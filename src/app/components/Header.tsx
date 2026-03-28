import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Info, Briefcase, Award, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../assets/armz-logo.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: Info },
    { label: 'Services', id: 'services', icon: Briefcase },
    { label: 'Why Us', id: 'why-us', icon: Award },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ y: 0, opacity: 1 }}
      animate={isHidden ? { y: -140, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 rounded-full bg-red-600/95 px-4 py-3 text-white shadow-[0_0_40px_rgba(220,38,38,0.25)] backdrop-blur-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logo} alt="ARMZ GLOBAL" className="h-12 w-12 rounded-md bg-white object-contain p-1" />
          </motion.button>

          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 rounded-full bg-white/95 px-6 py-3 shadow-xl backdrop-blur-md">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 rounded-full px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-red-600"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </nav>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="hidden rounded-full border-2 border-white/30 bg-black/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 lg:block"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Get Started
          </motion.button>

          <motion.button
            className="z-50 rounded-lg bg-white/90 p-2 shadow-lg backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute left-4 right-4 top-20 overflow-hidden rounded-3xl bg-white shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="p-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className="flex w-full items-center gap-4 rounded-xl px-4 py-4 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-lg">{item.label}</span>
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-red-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
