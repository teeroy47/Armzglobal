import { motion } from 'motion/react';
import { ChevronDown, Shield, Users, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroTeamImage from '../../assets/hero-team.png';

export function Hero() {
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [displayedPanelText, setDisplayedPanelText] = useState('');
  const fullHeadline = 'Creating a Safer Society';
  const fullPanelText =
    'Real teams, rapid response capability, and visible security presence tailored for every client environment.';

  useEffect(() => {
    let headlineIndex = 0;
    const headlineTimer = setInterval(() => {
      if (headlineIndex <= fullHeadline.length) {
        setDisplayedHeadline(fullHeadline.slice(0, headlineIndex));
        headlineIndex++;
        return;
      }
      clearInterval(headlineTimer);
    }, 75);

    return () => clearInterval(headlineTimer);
  }, []);

  useEffect(() => {
    let panelIndex = 0;
    const panelTimer = setInterval(() => {
      if (panelIndex <= fullPanelText.length) {
        setDisplayedPanelText(fullPanelText.slice(0, panelIndex));
        panelIndex++;
        return;
      }
      clearInterval(panelTimer);
    }, 28);

    return () => clearInterval(panelTimer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Shield, value: '24/7', label: 'Security Monitoring' },
    { icon: Users, value: '500+', label: 'Clients Protected' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.18),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_42%,_#3f0a0a_100%)] text-white"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-red-600/20 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/15 blur-3xl"
          animate={{ x: [0, -90, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(3,7,18,0.82)_0%,_rgba(3,7,18,0.62)_42%,_rgba(3,7,18,0.32)_100%)]" />
      </div>

      <style>{`
        @keyframes glow {
          from {
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2);
          }
          to {
            text-shadow: 0 0 20px rgba(239, 68, 68, 1), 0 0 30px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6), 0 0 50px rgba(239, 68, 68, 0.4), 0 0 60px rgba(239, 68, 68, 0.2);
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:gap-10 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl font-bold leading-[0.96] sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="inline-block min-h-[2.5em] sm:min-h-[2.15em]">
              {displayedHeadline.split(' ').map((word, index) => {
                const isLastWord = word === 'Society';
                return (
                  <span key={index} className="mr-3 inline-block sm:mr-4">
                    {isLastWord ? (
                      <span
                        className="relative inline-block text-red-500"
                        style={{
                          textShadow:
                            '0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2)',
                          animation: 'glow 2s ease-in-out infinite alternate',
                        }}
                      >
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                );
              })}
              {displayedHeadline.length < fullHeadline.length && (
                <motion.span
                  className="ml-1 inline-block h-12 w-1 bg-red-500 sm:h-16 md:h-20"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Unparalleled security solutions from traditional manned guards to cutting-edge
            AI-powered systems. Police and military expertise you can trust.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Protected Today
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              className="rounded-full border-2 border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:px-8 sm:py-4 sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-md"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </motion.div>
                <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-300 sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-red-600/20 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:aspect-[5/4] lg:aspect-auto lg:min-h-[620px]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,6,23,0.06)_0%,_rgba(2,6,23,0.22)_48%,_rgba(2,6,23,0.78)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-[linear-gradient(90deg,_rgba(3,7,18,0.35)_0%,_transparent_100%)] lg:w-1/3" />
            <img
              src={heroTeamImage}
              alt="ARMZ Global security team standing in front of a response vehicle"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
              <div className="max-w-md rounded-2xl border border-white/15 bg-black/45 p-4 backdrop-blur-md sm:max-w-lg sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400 sm:text-sm">
                  Field Presence
                </p>
                <p className="mt-2 min-h-[5.5rem] text-sm leading-relaxed text-gray-100 sm:min-h-[4.5rem] sm:text-base">
                  {displayedPanelText}
                  {displayedPanelText.length < fullPanelText.length && (
                    <motion.span
                      className="ml-1 inline-block h-4 w-0.5 bg-red-400 align-middle"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        onClick={() => scrollToSection('about')}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
