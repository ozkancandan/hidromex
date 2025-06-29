import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProjectCard from './components/ProjectCard';
import { 
  PRODUCTS_DATA, 
  PROJECTS_DATA, 
  HERO_TITLE, 
  HERO_SUBTITLE, 
  HERO_CTA,
  ABOUT_US_TITLE,
  ABOUT_US_CONTENT_P1,
  ABOUT_US_CONTENT_P2,
  ABOUT_US_IMAGE_URL,
  WHY_US_POINTS,
  CONTACT_INFO,
  SOLAR_ARRAY_URL // Assuming HERO_BACKGROUND_IMAGE was meant to be one of the existing images, e.g. SOLAR_ARRAY_URL
} from './constants';

// Heroicons SVGs as components
const ChipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const BadgeCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6M21 21h-3c0-2.035-2.985-4-6.5-4S3 17.965 3 20M21 15h-3" />
  </svg>
);

const KeyIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.964 2.276a2.25 2.25 0 00-2.366-.065l-8.485 4.243a2.25 2.25 0 00-1.18 1.982V14.25a2.25 2.25 0 001.142 1.967l3.021 1.51c.495.248 1.03.428 1.58.541V21a.75.75 0 001.5 0v-2.732a5.25 5.25 0 004.09-3.268l2.528-5.056a2.25 2.25 0 00-.584-2.878l-4.943-4.943a2.25 2.25 0 00-1.743-.64zM15 9.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2-2 4 4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SupportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0A4.993 4.993 0 0012 12.006a4.993 4.993 0 00-2.828 2.828m5.656-5.656l3.536 3.536M12 21a9 9 0 100-18 9 9 0 000 18zM9.75 12.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
  </svg>
);


const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


const App: React.FC = () => {
  const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
    "chip": ChipIcon,
    "badge-check": BadgeCheckIcon,
    "users": UsersIcon,
    "key": KeyIcon,
    "leaf": LeafIcon,
    "support": SupportIcon
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert('Mesajınız gönderildi!');
      form.reset();
    } else {
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="font-sans bg-lightBg text-darkText">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.5)), url(${SOLAR_ARRAY_URL})` }}>
        <div className="text-center text-white p-4 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">
            {HERO_TITLE}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
            {HERO_SUBTITLE}
          </p>
          <a
            href="#contact"
            className="bg-accent hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {HERO_CTA}
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{ABOUT_US_TITLE}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <img src={ABOUT_US_IMAGE_URL} alt="Hakkımızda" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 text-gray-700 space-y-4 text-justify">
              <p className="leading-relaxed">{ABOUT_US_CONTENT_P1}</p>
              <p className="leading-relaxed">{ABOUT_US_CONTENT_P2}</p>
              <a href="#products" className="inline-block mt-4 bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors">
                Ürünlerimizi Keşfedin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-lightBg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ürünlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Yüksek kaliteli ve verimli güneş enerjisi çözümlerimizle tanışın.</p>
            <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PRODUCTS_DATA.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

       {/* Why Us Section */}
      <section id="whyus" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Neden Hidromex?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Enerji ihtiyaçlarınız için doğru adres olduğumuzu kanıtlayan nedenler:</p>
             <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_POINTS.map(point => {
              const IconComponent = iconMap[point.icon];
              return (
                <div key={point.title} className="bg-lightBg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-accent mr-4"/>}
                    <h3 className="text-xl font-semibold text-primary">{point.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-lightBg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Referans Projelerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Başarıyla tamamladığımız çeşitli ölçeklerdeki güneş enerjisi projelerimizden bazıları.</p>
            <div className="w-24 h-1 bg-green-400 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bize Ulaşın</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Size yardımcı olmak için buradayız!<br/>

              Ürünlerimiz, hizmetlerimiz veya iş birlikleri hakkında merak ettiğiniz her konuda bize kolayca ulaşabilirsiniz. İster telefonla, ister e-posta yoluyla, ister form aracılığıyla bizimle iletişime geçin – size en kısa sürede dönüş yapmaktan memnuniyet duyarız.<br/>

              Görüşleriniz, önerileriniz ve geri bildirimleriniz bizim için çok değerli. Çünkü biz, sizden gelen her mesajı gelişimimiz için bir fırsat olarak görüyoruz.<br/>

              Sorularınız mı var?<br/>
              Ekibimiz size yardımcı olmak için hazır!
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <LocationMarkerIcon className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <p><span className="font-semibold">Adres:</span><br/>{CONTACT_INFO.address}</p>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <p><span className="font-semibold">Telefon:</span> <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-accent">{CONTACT_INFO.phone}</a></p>
                </div>
                <div className="flex items-center">
                  <MailIcon className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                  <p><span className="font-semibold">Email:</span> <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent">{CONTACT_INFO.email}</a></p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary mb-2">Çalışma Saatleri</h4>
                <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi: 10:00 - 14:00</p>
                <p className="text-gray-600">Pazar: Kapalı</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">Mesaj Gönderin</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Adınız Soyadınız</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Adresiniz</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon Numaranız (Opsiyonel)</label>
                  <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesajınız</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-12">
             <iframe 
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
                title="Konumumuz"
                className="rounded-lg shadow-lg"
              ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
