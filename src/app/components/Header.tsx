import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Info, Briefcase, Award, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/8b5985481dd5f1ac9b0db965d81945b6c6adc1cb.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isPillMode, setIsPillMode] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if at top
      const atTop = currentScrollY < 100;
      setIsAtTop(atTop);
      setIsScrolled(currentScrollY > 20);

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }

      lastScrollY.current = currentScrollY;

      // Clear existing timeouts
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (pauseTimeout.current) {
        clearTimeout(pauseTimeout.current);
      }

      // If at top, show full header
      if (atTop) {
        setIsPillMode(false);
      } else {
        // When user pauses scrolling for 3 seconds, switch to pill mode
        pauseTimeout.current = setTimeout(() => {
          if (!atTop) {
            setIsPillMode(true);
          }
        }, 3000);
      }

      // Reset scroll direction after a short delay
      scrollTimeout.current = setTimeout(() => {
        setScrollDirection(null);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
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

  // Animation variants for the header
  const headerVariants = {
    full: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    pill: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    hidden: {
      y: -100,
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    bubble: {
      y: [0, -10, 0],
      scale: [1, 1.02, 1],
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      variants={headerVariants}
      initial="full"
      animate={
        scrollDirection === 'up' && !isAtTop
          ? 'bubble'
          : scrollDirection === 'down' && !isAtTop
          ? 'hidden'
          : isAtTop
          ? 'full'
          : 'pill'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center"
          animate={{
            height: isPillMode && !isAtTop ? '56px' : isAtTop ? '96px' : '80px',
            justifyContent: isPillMode && !isAtTop ? 'center' : 'space-between',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Logo - Hidden in pill mode */}
          <AnimatePresence>
            {!isPillMode && (
              <motion.div
                className="flex items-center cursor-pointer z-10"
                onClick={() => scrollToSection('home')}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={logo} 
                  alt="ARMZ GLOBAL" 
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-2xl" 
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation - White rounded container */}
          <nav className="hidden lg:flex items-center">
            <motion.div
              className={`flex items-center gap-1 px-6 py-3 rounded-full transition-all duration-300 ${
                isScrolled || isPillMode
                  ? 'bg-white/95 backdrop-blur-md shadow-xl' 
                  : 'bg-white/90 backdrop-blur-sm shadow-lg'
              }`}
              animate={{
                scale: isPillMode && !isAtTop ? 1.05 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </nav>

          {/* Get Started Button - Hidden in pill mode */}
          <AnimatePresence>
            {!isPillMode && (
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="hidden lg:block px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden z-50 p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-20 right-4 left-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
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
                    className="flex items-center gap-4 w-full px-4 py-4 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <span className="text-lg">{item.label}</span>
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-4 px-6 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
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