import { NavItem, Product, Project } from './types';

export const LOGO_URL = "/logo.jpeg";
export const SOLAR_ARRAY_URL = "/ges-3.jpeg";
export const SOLAR_STRUCTURE_URL = "/ges-8.jpeg";

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: 'Anasayfa', href: '#hero' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'Ürünlerimiz', href: '#products' },
  { name: 'Neden Hidromex?', href: '#whyus' },
  { name: 'Projelerimiz', href: '#projects' },
  { name: 'İletişim', href: '#contact' },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    name: 'Arazi Tipi Güneş Enerji Sistemleri',
    description: 'Geniş araziler ve tarımsal alanlar için yüksek verimli, dayanıklı ve uzun ömürlü güneş enerjisi santralleri (GES) kurulumları. Optimize edilmiş taşıyıcı sistemlerimizle maksimum enerji üretimi.',
    imageUrl: SOLAR_ARRAY_URL,
    features: ['Yüksek Verimlilik', 'Dayanıklı Konstrüksiyon', 'Hızlı Kurulum', 'Özelleştirilebilir Tasarım']
  },
  {
    id: '2',
    name: 'Çatı Tipi Güneş Paneli Sistemleri',
    description: 'Evsel, ticari ve endüstriyel çatılar için estetik ve sağlam montaj çözümleri. Alanınızı en verimli şekilde kullanarak enerji maliyetlerinizi düşürün.',
    imageUrl: SOLAR_STRUCTURE_URL, // This image shows a structure, good for illustrating mounting systems.
    features: ['Estetik Tasarım', 'Çatı Dostu Montaj', 'Maksimum Alan Kullanımı', 'Uzun Ömürlü Performans']
  },
  {
    id: '3',
    name: 'Özel Tasarım Konstrüksiyonlar',
    description: 'Her türlü arazi ve çatı tipine uygun, projenizin özel ihtiyaçlarına göre tasarlanmış mühendislik harikası güneş paneli taşıyıcı sistemleri.',
    imageUrl: '/ges-10.jpeg',
    features: ['Proje Bazlı Çözümler', 'Yüksek Mukavemet', 'Farklı Zemin Tiplerine Uyum', 'Korozyona Karşı Direnç']
  },
   {
    id: '4',
    name: 'Solar Sulama Sistemleri',
    description: 'Tarımsal sulama ihtiyaçlarınız için şebekeden bağımsız, çevre dostu ve ekonomik güneş enerjili pompa sistemleri. Su kaynaklarınızı verimli kullanın.',
    imageUrl: '/ges-9.jpeg',
    features: ['Şebekeden Bağımsız Çalışma', 'Düşük İşletme Maliyeti', 'Çevre Dostu', 'Otomatik Kontrol Seçenekleri']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    name: 'Endüstriyel Çatı GES Projesi',
    location: 'İstanbul, Türkiye',
    capacity: '750 kWp',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    description: 'Organize sanayi bölgesindeki bir fabrikanın çatısına kurulan, yıllık enerji ihtiyacının önemli bir kısmını karşılayan anahtar teslim proje.'
  },
  {
    id: '2',
    name: 'Tarımsal Arazi GES Projesi',
    location: 'Konya, Türkiye',
    capacity: '1.2 MWp',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    description: 'Geniş tarım arazisine kurulan, sulama ve çiftlik operasyonları için enerji üreten, yüksek verimli arazi tipi GES.'
  },
  {
    id: '3',
    name: 'Ticari İşletme Çatı GES',
    location: 'İzmir, Türkiye',
    capacity: '300 kWp',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    description: 'Bir alışveriş merkezinin çatısına uygulanan, işletmenin enerji giderlerini azaltan ve karbon ayak izini düşüren modern GES çözümü.'
  },
];

export const WHY_US_POINTS = [
    { title: "Uzman Mühendislik", description: "Deneyimli mühendis kadromuzla projenize özel en verimli çözümleri sunuyoruz.", icon: "chip" },
    { title: "Kaliteli Malzeme", description: "Uzun ömürlü ve yüksek performanslı, sertifikalı ekipmanlar kullanıyoruz.", icon: "badge-check" },
    { title: "Müşteri Odaklı Yaklaşım", description: "İhtiyaçlarınızı dinliyor, beklentilerinizi aşan hizmetler sağlıyoruz.", icon: "users" },
    { title: "Anahtar Teslim Projeler", description: "Tasarım, kurulum ve devreye alma süreçlerinin tamamını yönetiyoruz.", icon: "key" },
    { title: "Sürdürülebilir Gelecek", description: "Yenilenebilir enerjiye yatırım yaparak dünyaya değer katıyoruz.", icon: "leaf" },
    { title: "Satış Sonrası Destek", description: "Kurulum sonrası bakım ve teknik destek hizmetlerimizle yanınızdayız.", icon: "support" }
];

export const HERO_TITLE = "Güneşin Gücüyle Geleceğinizi Aydınlatın";
export const HERO_SUBTITLE = "Hidromex - Yenilenebilir Enerji Çözümlerinde Güvenilir ve Yenilikçi Ortağınız.";
export const HERO_CTA = "Teklif Alın";

export const ABOUT_US_TITLE = "Hidromex Hakkında";
export const ABOUT_US_CONTENT_P1 = "Hidromex olarak, sürdürülebilir bir gelecek için yenilenebilir enerji kaynaklarının gücüne inanıyoruz. 20 yılı aşkın sektör tecrübemizle, güneş enerjisi sistemleri alanında mühendislik, tedarik, kurulum (EPC) ve bakım hizmetleri sunmaktayız.";
export const ABOUT_US_CONTENT_P2 = "Misyonumuz, müşterilerimize en yüksek kalitede, verimli ve ekonomik güneş enerjisi çözümleri sunarak enerji bağımsızlıklarını kazanmalarına yardımcı olmak ve karbon ayak izlerini azaltmaktır. Vizyonumuz ise, Türkiye'de ve bölgede yenilenebilir enerji dönüşümünün öncü firmalarından biri olmaktır.";
export const ABOUT_US_IMAGE_URL = "https://picsum.photos/seed/aboutus/800/600";


export const CONTACT_INFO = {
  address: "Örnek Mah. Teknoloji Cad. No:123, Teknopark, İstanbul, Türkiye",
  phone: "+90 212 555 44 33",
  email: "info@hidromex.com.tr",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.388129626818!2d28.97479231538064!3d41.01591197929993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9c51c8a1f8d%3A0x50e9b0f0b0c0f0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1620208163000!5m2!1sen!2str" // Example map
};
