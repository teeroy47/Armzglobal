import { motion } from 'motion/react';
import { Shield, Users, Clock, Award, Target, TrendingUp } from 'lucide-react';
import ctaTeamImage from '../../assets/cta-team.png';

export function WhyUs() {
  const achievements = [
    {
      icon: Shield,
      value: '24/7',
      label: 'Security Operations',
      description: 'Round-the-clock monitoring and rapid response',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Clients',
      description: 'Trusted by businesses and homes across Zimbabwe',
    },
    {
      icon: Clock,
      value: 'Years',
      label: 'Police, Military & Intelligence',
      description: 'We have years of experience in police, military and intelligence operations.',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Committed to excellence in every service',
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Risk Management',
      description: 'We believe in foreseeing the risks and managing them before hand to minimize the dangers in better interest of our clients.',
    },
    {
      icon: Users,
      title: 'Participatory Management',
      description: 'We encourage all our employees to take part in assessing, controlling, problem solving and decision making at their work.',
    },
    {
      icon: TrendingUp,
      title: 'Productivity Management',
      description: 'We continuously ensure we are addressing the right issues, applying the most efficient methods, and employing the proper tools.',
    },
    {
      icon: Shield,
      title: 'Vigilance',
      description: 'We maintain constant awareness, close monitoring, and rapid readiness to respond to threats before they escalate.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-red-600">ARMZ GLOBAL</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Best-in-class security consultancy with police and military background
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#FF0000] to-[#d90000] rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="text-4xl font-bold mb-2 text-[#FF0000]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
              >
                {achievement.value}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{achievement.label}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Approach */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-4">
            Our <span className="text-[#FF0000]">Approach</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            To maintain high standard of performance, ARMZ GLOBAL Security integrates a plan which consists 
            of strategic planning, supporting client mission, long-term security planning, and developing 
            management initiative for enhanced performance.
          </p>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-black to-gray-900 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-[#FF0000]" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="relative overflow-hidden rounded-3xl text-center text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(127,29,29,0.35),_transparent_42%),linear-gradient(135deg,_#22060e_0%,_#2a0812_55%,_#3b0b0b_100%)]" />
          <div className="relative p-3 sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 sm:aspect-[5/4] lg:aspect-auto lg:min-h-[620px]">
              <img
                src={ctaTeamImage}
                alt="ARMZ Global guards standing in front of a branded response vehicle"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,6,23,0.08)_0%,_rgba(2,6,23,0.24)_48%,_rgba(2,6,23,0.8)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                <div className="max-w-xl rounded-[1.75rem] border border-white/12 bg-black/72 p-5 text-left shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-md sm:max-w-2xl sm:p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400 sm:text-sm">
                    Ready to Secure Your Property?
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-xl">
                    Get a free consultation and risk assessment from our expert security consultants
                  </p>
                  <motion.button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="mt-6 rounded-full bg-white px-8 py-4 text-base font-bold text-red-600 shadow-xl transition-all duration-300 hover:shadow-2xl sm:px-10 sm:text-lg"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us Today
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
