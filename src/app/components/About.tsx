import { motion } from 'motion/react';
import { Shield, Target, Eye, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Professionalism',
      description: 'Delivering excellence in every security solution with highly trained personnel',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Building trust through honest and ethical security practices',
    },
    {
      icon: Target,
      title: 'Discipline',
      description: 'Maintaining the highest standards of conduct and operational excellence',
    },
    {
      icon: Eye,
      title: 'Vigilance',
      description: '24/7 monitoring and rapid response to ensure your complete safety',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-red-600">ARMZ GLOBAL</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Armz Global provides unparalleled security solutions customised to suit each client's needs. 
              We provide end to end security services from traditional manned guards to cutting edge electronic 
              systems powered by artificial intelligence.
            </p>
            <p>
              Not only can we protect your physical assets, our IT security engineers can also protect your 
              network from hackers using firewalls.
            </p>
            <p>
              When we provide security, we do a full risk assessment to ensure that our personnel and services 
              will match the client's needs. Armz Global's management has a police and military background which 
              makes our security consultancy best in class.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to build lasting relationships based on trust, commitment, innovation and 
              superior customer service in the security sector.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-black to-gray-900 text-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="leading-relaxed">
              Be recognized as the leader in creating a safer society.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core <span className="text-red-600">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold mb-3 text-center">{value.title}</h4>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}