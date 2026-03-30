import { motion } from 'motion/react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/armz-logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Manned Security Guards', href: '#services' },
    { label: 'Rapid Response', href: '#services' },
    { label: 'Cash in Transit', href: '#services' },
    { label: 'CCTV Monitoring', href: '#services' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/armzglobal', 
      label: 'Facebook',
      color: '#1877F2'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/armzglobal', 
      label: 'Instagram',
      color: '#E4405F'
    },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              className="mb-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={scrollToHome}
            >
              <img 
                src={logo} 
                alt="ARMZ GLOBAL" 
                className="h-16 w-auto mb-4 object-contain" 
              />
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating a safer society through unparalleled security solutions and professional excellence.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:armzglobal20@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>info@armzglobal.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0774625137"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>0774 625 137</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=58+Elizabeth+Windsor+Rd,+Harare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>58 Elizabeth Windsor Rd, Harare</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ARMZ GLOBAL Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
