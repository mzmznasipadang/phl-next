// lib/dictionary.ts
import { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.vessels": "Vessels",
    "nav.contact": "Contact",

    // Home Page
    "home.hero.title": "PT. Pahala Harapan Lestari",
    "home.hero.subtitle": "Your Trusted Partner in Maritime Solutions",
    "home.about.title": "About Us",
    "home.about.description":
      "PT. PAHALA HARAPAN LESTARI was founded as a shipping solution in 2023. With our experienced expertise, we have always taken challenges as opportunities to learn and grow in order to give the best solution for our clients.",
    "home.services.title": "Our Services",
    "home.services.subtitle":
      "We provide various maritime services to meet your needs",

    // Hero
    "hero.title": "We Serve",
    "hero.titleEmphasis": "You",
    "hero.subtitle": "Building and Repairing since 1982",

    // About Page
    'about.title': 'Forging the Future, Mastery in Every Vessel',
    'about.subtitle': 'Building Excellence Since 1982',
    'about.description1': 'Pahala Harapan Lestari stands proud as a national shipyard icon in Indonesia since 1982. Operating wherever there\'s a chance to refine, pioneer, or invest, Pahala Harapan Lestari values the voices of its clients.',
    'about.description2': 'Our inclusive, cooperative mindset has been instrumental in shaping our service offerings. Surpassing your aspirations remains our paramount objective; because, ultimately, we\'re constructing your future.',

    // Services Page
    "services.title": "Our Services",
    "services.repairs": "Repairs",
    "services.vessels": "Vessels",
    "services.profile": "Profile",
    "services.discoverMore": "Discover more",

    //Clients
    "clients.title": "Our Network in Indonesia",
    "clients.headOffice": "Head Office & Main Shipyard",
    "clients.representative": "Representative Branch",
    "clients.customers.title": "Our Customers",

    // Common
    "button.readMore": "Read More",
    "button.contact": "Contact Us",
    loading: "Loading...",
    "error.general": "Something went wrong. Please try again.",

    //Footer
    "footer.explore": "EXPLORE MORE",
    "footer.telephone": "Telephone",
    "footer.fax": "Fax",
    "footer.email": "Email",
    "footer.headOffice": "Address (Head Office)",
    "footer.representativeOffice": "Address (Representative Office)",
    "footer.copyright": "© PT. Pahala Harapan Lestari",
    "footer.builtBy": "Built with Love by NasPad Studio",
    "footer.nav.home": "Home",
    "footer.nav.vessels": "Vessels",
    "footer.nav.services": "Services",
    "footer.nav.about": "About",
    "footer.nav.contact": "Contact",
  },

  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.vessels": "Kapal",
    "nav.contact": "Kontak",

    // Home Page
    "home.hero.title": "PT. Pahala Harapan Lestari",
    "home.hero.subtitle": "Mitra Terpercaya dalam Solusi Maritim",
    "home.about.title": "Tentang Kami",
    "home.about.description":
      "PT. PAHALA HARAPAN LESTARI didirikan sebagai solusi perkapalan pada tahun 2023. Dengan keahlian yang berpengalaman, kami selalu menjadikan tantangan sebagai peluang untuk belajar dan berkembang demi memberikan solusi terbaik bagi klien kami.",
    "home.services.title": "Layanan Kami",
    "home.services.subtitle":
      "Kami menyediakan berbagai layanan maritim untuk memenuhi kebutuhan Anda",

    //Hero
    "hero.title": "Kami Melayani",
    "hero.titleEmphasis": "Anda",
    "hero.subtitle": "Membangun dan Memperbaiki sejak 1982",

    // About Page
    'about.title': 'Menempa Masa Depan, Keunggulan di Setiap Kapal',
    'about.subtitle': 'Membangun Keunggulan Sejak 1982',
    'about.description1': 'Pahala Harapan Lestari berdiri dengan bangga sebagai ikon galangan kapal nasional di Indonesia sejak 1982. Beroperasi di mana pun ada kesempatan untuk menyempurnakan, mempelopori, atau berinvestasi, Pahala Harapan Lestari menghargai suara kliennya.',
    'about.description2': 'Pola pikir inklusif dan kooperatif kami telah berperan penting dalam membentuk penawaran layanan kami. Melampaui aspirasi Anda tetap menjadi tujuan utama kami; karena, pada akhirnya, kami membangun masa depan Anda.',

    // Services Page
    'services.title': 'Layanan Kami',
    'services.repairs': 'Perbaikan',
    'services.vessels': 'Kapal',
    'services.profile': 'Profil',
    'services.discoverMore': 'Selengkapnya',

    //Clients
    "clients.title": "Jaringan Kami di Indonesia",
    "clients.headOffice": "Kantor Pusat & Galangan Utama",
    "clients.representative": "Kantor Perwakilan",
    "clients.customers.title": "Pelanggan Kami",

    // Common
    "button.readMore": "Selengkapnya",
    "button.contact": "Hubungi Kami",
    loading: "Memuat...",
    "error.general": "Terjadi kesalahan. Silakan coba lagi.",

    //Footer
    "footer.explore": "JELAJAHI",
    "footer.telephone": "Telepon",
    "footer.fax": "Fax",
    "footer.email": "Email",
    "footer.headOffice": "Alamat (Kantor Pusat)",
    "footer.representativeOffice": "Alamat (Kantor Perwakilan)",
    "footer.copyright": "© PT. Pahala Harapan Lestari",
    "footer.builtBy": "Dibuat dengan Cinta oleh NasPad Studio",
    "footer.nav.home": "Beranda",
    "footer.nav.vessels": "Kapal",
    "footer.nav.services": "Layanan",
    "footer.nav.about": "Tentang",
    "footer.nav.contact": "Kontak",
  },

  zh: {
    // Navigation
    "nav.home": "主页",
    "nav.about": "关于",
    "nav.services": "服务",
    "nav.vessels": "船舶",
    "nav.contact": "联系",

    // Home Page
    "home.hero.title": "PT. Pahala Harapan Lestari",
    "home.hero.subtitle": "您值得信赖的海事解决方案伙伴",
    "home.about.title": "关于我们",
    "home.about.description":
      "PT. PAHALA HARAPAN LESTARI 成立于2023年, 致力于提供航运解决方案。凭借我们丰富的专业经验, 我们始终将挑战视为学习和成长的机会, 以便为客户提供最佳解决方案。",
    "home.services.title": "我们的服务",
    "home.services.subtitle": "我们提供各种海事服务以满足您的需求",

    //Hero
    "hero.title": "我们为",
    "hero.titleEmphasis": "您",
    "hero.subtitle": "自1982年以来的建造与维修",

    //Service
    'services.title': '我们的服务',
    'services.repairs': '维修',
    'services.vessels': '船只',
    'services.profile': '简介',
    'services.discoverMore': '了解更多',

    //About
    'about.title': '铸就未来，精通每艘船舶',
    'about.subtitle': '自1982年起精心打造',
    'about.description1': '自1982年以来, Pahala Harapan Lestari一直是印尼国家造船厂的标志性企业。无论在哪里有改进、开拓或投资的机会, Pahala Harapan Lestari都重视客户的声音。',
    'about.description2': '我们包容、合作的理念在塑造我们的服务方面发挥了重要作用。超越您的期望始终是我们的首要目标；因为归根结底，我们正在构建您的未来。',

    //Clients
    "clients.title": "我们在印度尼西亚的网络",
    "clients.headOffice": "总部和主造船厂",
    "clients.representative": "代表处",
    "clients.customers.title": "我们的客户",

    //Footer
    "footer.explore": "更多探索",
    "footer.telephone": "电话",
    "footer.fax": "传真",
    "footer.email": "电子邮件",
    "footer.headOffice": "地址（总部）",
    "footer.representativeOffice": "地址（代表处）",
    "footer.copyright": "© PT. Pahala Harapan Lestari",
    "footer.builtBy": "由 NasPad Studio 用心制作",
    "footer.nav.home": "主页",
    "footer.nav.vessels": "船只",
    "footer.nav.services": "服务",
    "footer.nav.about": "关于",
    "footer.nav.contact": "联系",

    // Add more Chinese translations...
  },
};

// Create a type-safe dictionary getter
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
