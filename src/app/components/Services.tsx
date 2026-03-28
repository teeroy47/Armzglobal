import { motion } from 'motion/react';
import { Shield, Radio, DollarSign, Camera, Package, Search } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Manned Security Guards',
      description: 'Superior guarding services with well-equipped security officers. Our guards are provided with fully geared uniforms, button sticks, handcuffs, and panic buttons connected to our control room. We conduct full risk analysis and provide supervisors for day and night checks, plus guard tour systems for complete area coverage.',
      features: ['24/7 Guard Supervision', 'Guard Tour System', 'Panic Button System', 'Risk Assessment'],
    },
    {
      icon: Radio,
      title: 'Rapid Response',
      description: 'Reliable fleet of tactical response vehicles manned by highly trained response officers. Each vehicle has GPS live tracking with packages designed for your specific needs. Our modern secure control room operates around the clock ensuring immediate response to alarm activations.',
      features: ['GPS Tracked Vehicles', '24/7 Control Room', 'Area-Based Response', 'ZRP Collaboration'],
    },
    {
      icon: DollarSign,
      title: 'Cash in Transit Services',
      description: 'Comprehensive CIT services including overnight storage of cash or bullion, local and long-distance movement of bulky cash, valuables, and confidential documents. We provide fully armoured vehicles for high-value consignments and daily, weekly, or monthly collections and deposits.',
      features: ['Armoured Vehicles', 'Overnight Storage', 'Valuables Transport', 'Scheduled Collections'],
    },
    {
      icon: Camera,
      title: 'CCTV Monitoring & Control',
      description: 'Advanced self-learning video analytics technology that detects unusual behaviors and assesses potential threats. Smart detection works with 24/7 live off-site monitoring. Prevention-focused approach with early detection and warning systems for real-time security support.',
      features: ['AI-Powered Analytics', 'Off-Site Monitoring', 'Threat Detection', 'Real-Time Alerts'],
    },
    {
      icon: Package,
      title: 'Messenger Services',
      description: 'Well-trained, motorised, and well-equipped security operatives collect and deliver private and confidential documents requiring maximum protection. Services can be customized based on volume and frequency of items to be delivered or collected.',
      features: ['Confidential Delivery', 'Trained Operatives', 'Motorised Service', 'Flexible Scheduling'],
    },
    {
      icon: Search,
      title: 'Private Investigations',
      description: 'Independent investigation services to gather intelligence, provide additional information or evidence, and offer new perspectives on cases. Our agents provide thorough and professional investigative solutions tailored to your specific needs.',
      features: ['Intelligence Gathering', 'Evidence Collection', 'Case Analysis', 'Confidential Service'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-1 bg-gradient-to-r from-red-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}