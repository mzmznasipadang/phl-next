// src/app/components/home/hero/useYouTubePlayer.ts
'use client';

import { useEffect, useRef, useState } from 'react';

// YouTube Player types
interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  destroy(): void;
  getCurrentTime(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  setPlaybackQuality(quality: string): void;
}

interface YouTubeEvent {
  target: YouTubePlayer;
  data: number;
}

interface YouTubePlayerVars {
  autoplay?: 0 | 1;
  controls?: 0 | 1;
  rel?: 0 | 1;
  showinfo?: 0 | 1;
  loop?: 0 | 1;
  mute?: 0 | 1;
  modestbranding?: 0 | 1;
  playsinline?: 0 | 1;
  playlist?: string;
  origin?: string;
  enablejsapi?: 0 | 1;
  fs?: 0 | 1;
  iv_load_policy?: 1 | 3;
  start?: number;
  end?: number;
  suggestedQuality?: string;
}

interface YouTubePlayerOptions {
  videoId: string;
  playerVars?: YouTubePlayerVars;
  events?: {
    onReady?: (event: YouTubeEvent) => void;
    onStateChange?: (event: YouTubeEvent) => void;
    onError?: (event: YouTubeEvent) => void;
    onPlaybackQualityChange?: (event: YouTubeEvent) => void;
  };
  width?: number | string;
  height?: number | string;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        element: HTMLElement | null,
        options: YouTubePlayerOptions
      ) => YouTubePlayer;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface UseYouTubePlayerProps {
  videoId: string;
  options?: Partial<YouTubePlayerOptions>;
  onReady?: () => void;
}

export function useYouTubePlayer({ 
  videoId, 
  options = {},
  onReady 
}: UseYouTubePlayerProps) {
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeUpdateRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const initPlayer = () => {
      if (!containerRef.current) return;

      const startTime = options.playerVars?.start || 0;
      const endTime = options.playerVars?.end;
      const bufferTime = 0.5; // Buffer time before loop

      // Default options for background video
      const defaultOptions: YouTubePlayerOptions = {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          loop: 1,
          mute: 1,
          modestbranding: 1,
          playsinline: 1,
          playlist: videoId,
          origin: window.location.origin,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          suggestedQuality: 'hd1080',
          ...options.playerVars,
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            const player = event.target;
            player.mute();
            player.playVideo();
            player.setPlaybackQuality('hd1080');
            setIsReady(true);
            onReady?.();
            options.events?.onReady?.(event);

            // Set up smooth loop checking
            if (endTime) {
              const checkTime = () => {
                const currentTime = player.getCurrentTime();
                if (currentTime >= (endTime - bufferTime)) {
                  player.seekTo(startTime, true);
                }
                timeUpdateRef.current = requestAnimationFrame(checkTime);
              };
              checkTime();
            }
          },
          onStateChange: (event: YouTubeEvent) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(startTime, true);
              event.target.playVideo();
            }
            if (event.data === window.YT.PlayerState.BUFFERING) {
              event.target.setPlaybackQuality('hd1080');
            }
            options.events?.onStateChange?.(event);
          },
          onError: (event: YouTubeEvent) => {
            console.error('YouTube Player Error');
            options.events?.onError?.(event);
          },
          onPlaybackQualityChange: (event: YouTubeEvent) => {
            options.events?.onPlaybackQualityChange?.(event);
          },
          ...options.events,
        },
        width: options.width || '100%',
        height: options.height || '100%',
      };

      playerRef.current = new window.YT.Player(containerRef.current, defaultOptions);
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    return () => {
      if (timeUpdateRef.current) {
        cancelAnimationFrame(timeUpdateRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, options, onReady]);

  return {
    containerRef,
    isReady,
    player: playerRef.current,
  };
}