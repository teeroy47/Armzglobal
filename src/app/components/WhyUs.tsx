import { motion } from 'motion/react';
import { Shield, Users, Clock, Award, Target, TrendingUp } from 'lucide-react';

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
      value: '15+',
      label: 'Years Experience',
      description: 'Police and military background expertise',
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
                className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="text-4xl font-bold mb-2 text-red-600"
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
            Our <span className="text-red-600">Approach</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            To maintain high standard of performance, ARMZ GLOBAL Security integrates a plan which consists 
            of strategic planning, supporting client mission, long-term security planning, and developing 
            management initiative for enhanced performance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
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
                  <feature.icon className="w-8 h-8 text-red-600" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Property?
          </h3>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Get a free consultation and risk assessment from our expert security consultants
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-10 py-4 bg-white text-red-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}