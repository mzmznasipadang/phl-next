// lib/dictionary.ts
import { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Repair",
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
    "about.title": "Forging the Future, Mastery in Every Vessel",
    "about.subtitle": "Building Excellence Since 1982",
    "about.description1":
      "Pahala Harapan Lestari stands proud as a national shipyard icon in Indonesia since 1982. Operating wherever there's a chance to refine, pioneer, or invest, Pahala Harapan Lestari values the voices of its clients.",
    "about.description2":
      "Our inclusive, cooperative mindset has been instrumental in shaping our service offerings. Surpassing your aspirations remains our paramount objective; because, ultimately, we're constructing your future.",

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
    "footer.nav.services": "Repair",
    "footer.nav.about": "About",
    "footer.nav.contact": "Contact",

    //Vessels Page
    "vessels.hero.title": "A Fleet for Every Need",
    "vessels.hero.subtitle": "Vessels",
    "vessels.hero.contact": "Contact Us",
    "vessels.content.main.title": "CONQUEROR OF THE SEAS",
    "vessels.content.main.subtitle": "Leader in national ship industry.",
    "vessels.content.main.description1":
      "Sailing the seas for over four decades, PT. Pahala Harapan Lestari has carved its name as a formidable player in the ship-building sector of Indonesia. Today, our vessels, built with precision and excellence, are operational in ports and terminals across Indonesia.",
    "vessels.content.main.description2":
      "From durable tugs designed for the most demanding towing operations to specialized crafts tailored to various marine applications, PT. Pahala Harapan Lestari crafts each vessel to meet the diverse needs of the maritime world.",

    "vessels.showcase.title1": "Vessel",
    "vessels.showcase.title2": "Showcase",
    "vessels.showcase.description":
      "A gallery of our greatest fleets,\ncrafted with care and excellence.\nMasterpiece in its class.",

    //Services Page
    "services.hero.title": "A Tool for Every Need",
    "services.hero.subtitle": "Repairs",
    "services.hero.contact": "Contact Us",
    "services.content.main.title": "CONQUEROR OF THE SEAS",
    "services.content.main.subtitle": "Maritime restoration excellence.",
    "services.content.main.description1":
      "Navigating the maritime domain for more than forty years, PT. Pahala Harapan Lestari has established itself as a leading force in Indonesia's ship-repairing and docking industry. Now, our expertly repaired and docked vessels are active in ports and terminals throughout Indonesia.",
    "services.content.main.description2":
      "From restoring robust tugs to their prime condition after rigorous towing tasks, to refitting specialized ships for diverse marine functions, PT. Pahala Harapan Lestari prioritizes top-notch repairing and docking services, ensuring each vessel meets the multifaceted demands of the maritime sector.",

    "services.showcase.title1": "Discover our",
    "services.showcase.title2": "Vessels families",
    "services.showcase.description":
      "A perfect fit for your every need. \nTake a look at our variety of vessels, tailored to your specific requirements.",

    //About Page
    "about.top.title": "Providing the best since 1982.",
    "about.top.subtitle": "About PT. PHL",
    "about.hero.title": "Craftsman in heart.",
    "about.leading.heading":
      "Pahala Harapan Lestari is a nationally acclaimed family shipyard company, rooted in Indonesia since 1982. As specialists in ship-building and ship-repairing, we embody the values of unity, skill, innovation, and responsibility. To harness these potentials, we offer maritime solutions through our expertise in design, shipbuilding, ship repair, and associated service. \nOver the past decades, we have transformed the realm of shipbuilding by introducing standardization and serial production. Fast forward to today, after crafting over 100 vessels, these core principles remain unaltered. Striving forward, we aim to blend our established standardization techniques with the advancements of digitalization, positioning ourselves as Indonesia's most eco-friendly shipbuilder.",
    "about.steady.heading": "Steadfast principles.",
    "about.steady.vision": "Vision",
    "about.steady.visionleading":
      "To be a shipyard company serving in new shipbuilding and ship repair by prioritizing quality, occupational health & safety and green environment in accordance to national and international regulations",
    "about.steady.mission": "Mission",
    "about.steady.missionleading":
      "Creating qualified and reliable human resource Products with quality, on-time delivery and environmental friendly Competitive cost and price by effectivity, productivity and efficiency Prioritizing occupational health & safety environment and green environment",
    "about.qhse.title": "QHSE Policy",
    "about.qhse.paragraph":
      "Implementing a quality, environmental and occupational safety and health management system in accordance with applicable management standards, namely ISO 9001:2015 (Quality), ISO 14001:2015 (Environment) ISO 45001:2018 (Occupational Health and Safety). \nMeeting customer requirements and strive to improve the company’s performance on an ongoing basis. \nMinimizing the number of customer complaints, the incidence of environmental pollution (pollution) and the occurrence of work accidents and occupational diseases.\n Fulfilling and comply with statutory requirements and other requirements related to quality, K3 and the environment. \nCarrying out continuous improvement of the effectiveness of the quality management system, environmental management system and occupational safety and health management system",

    "about.outstanding.title": "Outstanding Remarks.",
    "about.outstanding.awards": `PENGHARGAAN PARAMAKARYA TAHUN 2021 DENGAN KUALIFIKASI "PEMIMPIN DALAM INDUSTRI" DARI PRESIDEN REPUBLIK INDONESIA

PENGHARGAAN SIDHAKARYA TAHUN 2020 DALAM KATEGORI "EMERGING LEADER" DARI GUBERNUR KEP. BANGKA BELITUNG

PENGHARGAAN PROGRAM PENCEGAHAN DAN PENANGGULANGAN COVID-19 DARI KATEGORI "SILVER" KEMENTERIAN KETENAGAKERJAAN REPUBLIK INDONESIA

PENGHARGAAN DARI BIRO KLASIFIKASI INDONESIA DALAM KATEGORI KONTRIBUSI MITRA KERJA

PENGHARGAAN PROGRAM PENILAIAN PERINGKAT KINERJA PERUSAHAAN DALAM PENGELOLAAN LINGKUNGAN HIDUP (PROPER) TAHUN 2021 DENGAN KATEGORI "BIRU"

PENGHARGAAAN PERUSAHAAN MANAJEMEN K3 TERBAIK DARI WALIKOTA PANGKALPINANG`,
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
    "about.title": "Menempa Masa Depan, Keunggulan di Setiap Kapal",
    "about.subtitle": "Membangun Keunggulan Sejak 1982",
    "about.description1":
      "Pahala Harapan Lestari berdiri dengan bangga sebagai ikon galangan kapal nasional di Indonesia sejak 1982. Beroperasi di mana pun ada kesempatan untuk menyempurnakan, mempelopori, atau berinvestasi, Pahala Harapan Lestari menghargai suara kliennya.",
    "about.description2":
      "Pola pikir inklusif dan kooperatif kami telah berperan penting dalam membentuk penawaran layanan kami. Melampaui aspirasi Anda tetap menjadi tujuan utama kami; karena, pada akhirnya, kami membangun masa depan Anda.",

    // Services Page
    "services.title": "Layanan Kami",
    "services.repairs": "Perbaikan",
    "services.vessels": "Kapal",
    "services.profile": "Profil",
    "services.discoverMore": "Selengkapnya",

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

    //Vessels
    "vessels.hero.title": "Armada untuk Setiap Kebutuhan",
    "vessels.hero.subtitle": "Kapal",
    "vessels.hero.contact": "Hubungi Kami",
    "vessels.content.main.title": "PENGUASA LAUTAN",
    "vessels.content.main.subtitle": "Pemimpin di industri kapal nasional.",
    "vessels.content.main.description1":
      "Menyusuri lautan selama lebih dari empat dekade, PT. Pahala Harapan Lestari telah mengukir namanya sebagai pelaku utama di sektor pembangunan kapal Indonesia. Saat ini, kapal-kapal kami, yang dibangun dengan ketelitian dan keunggulan, beroperasi di pelabuhan dan terminal di seluruh Indonesia.",
    "vessels.content.main.description2":
      "Dari kapal tunda yang tahan lama dirancang untuk operasi penarikan yang paling menantang hingga kapal khusus yang disesuaikan untuk berbagai aplikasi maritim, PT. Pahala Harapan Lestari merancang setiap kapal untuk memenuhi beragam kebutuhan dunia maritim.",

    "vessels.showcase.title1": "Galeri",
    "vessels.showcase.title2": "Kapal",
    "vessels.showcase.description":
      "Galeri armada terbaik kami,yang dirancang dengan perhatian dan keunggulan.\nMahakarya dalam kelasnya.",

    //About Page
   "about.top.title": "Memberikan yang terbaik sejak 1982.",
    "about.top.subtitle": "Tentang PT. PHL",
    "about.hero.title": "Pengrajin di hati.",
    "about.leading.heading": "Pahala Harapan Lestari adalah perusahaan galangan kapal keluarga yang diakui secara nasional...",
    "about.steady.heading": "Prinsip yang teguh.",
    "about.steady.vision": "Visi",
    "about.steady.visionleading": "Menjadi perusahaan galangan kapal...",
    "about.steady.mission": "Misi",
    "about.steady.missionleading": "Menciptakan sumber daya manusia yang berkualitas\nMenghasilkan produk berkualitas\nMengutamakan efisiensi dan produktivitas",
    "about.qhse.title": "Kebijakan QHSE",
    "about.qhse.paragraph": "Menerapkan sistem manajemen...",
    "about.outstanding.title": "Pencapaian Luar Biasa",
    "about.outstanding.awards": `PENGHARGAAN PARAMAKARYA TAHUN 2021 DENGAN KUALIFIKASI "PEMIMPIN DALAM INDUSTRI" DARI PRESIDEN REPUBLIK INDONESIA

PENGHARGAAN SIDHAKARYA TAHUN 2020 DALAM KATEGORI "EMERGING LEADER" DARI GUBERNUR KEP. BANGKA BELITUNG

PENGHARGAAN PROGRAM PENCEGAHAN DAN PENANGGULANGAN COVID-19 DARI KATEGORI "SILVER" KEMENTERIAN KETENAGAKERJAAN REPUBLIK INDONESIA

PENGHARGAAN DARI BIRO KLASIFIKASI INDONESIA DALAM KATEGORI KONTRIBUSI MITRA KERJA

PENGHARGAAN PROGRAM PENILAIAN PERINGKAT KINERJA PERUSAHAAN DALAM PENGELOLAAN LINGKUNGAN HIDUP (PROPER) TAHUN 2021 DENGAN KATEGORI "BIRU"

PENGHARGAAAN PERUSAHAAN MANAJEMEN K3 TERBAIK DARI WALIKOTA PANGKALPINANG`,
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
    "services.title": "我们的服务",
    "services.repairs": "维修",
    "services.vessels": "船只",
    "services.profile": "简介",
    "services.discoverMore": "了解更多",

    //About
    "about.title": "铸就未来，精通每艘船舶",
    "about.subtitle": "自1982年起精心打造",
    "about.description1":
      "自1982年以来, Pahala Harapan Lestari一直是印尼国家造船厂的标志性企业。无论在哪里有改进、开拓或投资的机会, Pahala Harapan Lestari都重视客户的声音。",
    "about.description2":
      "我们包容、合作的理念在塑造我们的服务方面发挥了重要作用。超越您的期望始终是我们的首要目标；因为归根结底，我们正在构建您的未来。",

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

    //Vessels
    "vessels.hero.title": "满足各种需求的船队",
    "vessels.hero.subtitle": "船舶",
    "vessels.hero.contact": "联系我们",
    "vessels.content.main.title": "海洋征服者",
    "vessels.content.main.subtitle": "国家船舶工业的领导者。",
    "vessels.content.main.description1":
      "在过去四十多年里, PT. Pahala Harapan Lestari在印度尼西亚造船业树立了强大的品牌形象。如今,我们精心打造的船舶以其精湛工艺和卓越品质，在印度尼西亚各个港口和码头投入运营。",
    "vessels.content.main.description2":
      "从为最苛刻的拖船作业设计的耐用拖船到为各种海洋应用定制的专业船舶, PT. Pahala Harapan Lestari精心打造每艘船舶, 以满足海事世界的多样化需求。",

    "vessels.showcase.title1": "船舶",
    "vessels.showcase.title2": "展示",
    "vessels.showcase.description":
      "我们最优秀船队的展示，\n以关怀和卓越精心打造。\n同类中的杰作。",

    //About Page
    "about.top.title": "自1982年以来提供最优质的服务。",
    "about.top.subtitle": "关于 PT. PHL",
    "about.hero.title": "匠人之心。",
    "about.leading.heading":
      "Pahala Harapan Lestari是一家享有盛誉的家族造船公司，自1982年起扎根印度尼西亚。作为船舶建造和维修的专家，我们体现团结、技能、创新和责任的价值观。为充分发挥这些潜力，我们通过在设计、造船、船舶维修和相关服务方面的专业知识提供海事解决方案。\n在过去几十年里，我们通过引入标准化和批量生产改变了造船领域。时至今日，在建造了100多艘船舶之后，这些核心原则依然不变。展望未来，我们致力于将我们成熟的标准化技术与数字化进步相结合，将自己定位为印度尼西亚最环保的造船厂。",
    "about.steady.heading": "坚定的原则。",
    "about.steady.vision": "愿景",
    "about.steady.visionleading":
      "成为一家专注于新船建造和船舶维修的造船公司，以符合国家和国际法规的方式优先考虑质量、职业健康安全和绿色环境",
    "about.steady.mission": "使命",
    "about.steady.missionleading":
      "培养合格可靠的人力资源\n打造优质、准时交付且环保的产品\n通过效率、生产力和效能实现具有竞争力的成本和价格\n优先考虑职业健康安全环境和绿色环境",
    "about.qhse.title": "QHSE政策",
    "about.qhse.paragraph":
      "按照适用的管理标准实施质量、环境和职业安全健康管理体系，即ISO 9001:2015（质量）、ISO 14001:2015（环境）ISO 45001:2018（职业健康安全）。\n满足客户要求并努力持续改进公司业绩。\n最大限度地减少客户投诉、环境污染事件以及工作事故和职业病的发生。\n履行并遵守与质量、职业健康安全和环境相关的法律要求和其他要求。\n持续改进质量管理体系、环境管理体系和职业安全健康管理体系的有效性。",

    "about.outstanding.title": "卓越表现",
    "about.outstanding.awards": `2021年获得印度尼西亚总统颁发的"行业领导者"资格的PARAMAKARYA奖

2020年获得邦加勿里洞省长颁发的"新兴领导者"类别的SIDHAKARYA奖

获得印度尼西亚劳工部颁发的"银奖"类别的新冠肺炎预防和控制计划奖

获得印度尼西亚船级社在合作伙伴贡献类别的奖项

2021年获得"蓝色"类别的企业环境管理绩效评级计划(PROPER)奖

获得邦加槟港市长颁发的最佳职业健康安全管理企业奖`,

    // Add more Chinese translations...
  },
};

// Create a type-safe dictionary getter
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
