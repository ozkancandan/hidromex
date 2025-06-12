import React from 'react';
import { LOGO_URL, NAVIGATION_ITEMS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center mb-4">
              <img className="h-10 w-auto" src={LOGO_URL} alt="Hidromex Logo" />
              <span className="ml-3 text-2xl font-bold text-white">Hidromex</span>
            </a>
            <p className="text-sm text-gray-400">
              Güneşin enerjisiyle sürdürülebilir bir geleceğe adım atın. Yenilikçi çözümlerimizle yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Adres:</span> {CONTACT_INFO.address}
              </li>
              <li>
                <span className="font-semibold">Telefon:</span> <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-accent">{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <span className="font-semibold">Email:</span> <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media placeholder or Newsletter */}
           <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.737 9.499.5.09.682-.218.682-.483 0-.237-.009-.867-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.909-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.891 1.528 2.336 1.086 2.907.831.091-.646.349-1.086.635-1.335-2.22-.251-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.252-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.729 9.729 0 0112 6.845c.85.004 1.705.114 2.505.335 1.91-1.294 2.747-1.025 2.747-1.025.546 1.375.202 2.393.1 2.645.64.702 1.027 1.595 1.027 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.678.915.678 1.846 0 1.33-.012 2.404-.012 2.73 0 .268.18.578.688.48C19.138 20.163 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Hidromex Güneş Enerji Sistemleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
