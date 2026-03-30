import { motion } from 'motion/react';
import {
  Shield,
  Radio,
  DollarSign,
  Camera,
  Package,
  Search,
  Store,
  Pickaxe,
  ScanSearch,
  Fence,
  LockKeyhole,
} from 'lucide-react';
import logo from '../../assets/armz-logo.png';
import heroTeamImage from '../../assets/hero-team.png';
import aboutTeamImage from '../../assets/about-team.png';
import missionTeamImage from '../../assets/mission-team.png';
import visionTeamImage from '../../assets/vision-team.png';
import ctaTeamImage from '../../assets/cta-team.png';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Manned Security Guards',
      description:
        'Superior guarding services with well-equipped security officers. Our guards are provided with fully geared uniforms, button sticks, handcuffs, and panic buttons connected to our control room. We conduct full risk analysis and provide supervisors for day and night checks, plus guard tour systems for complete area coverage.',
      features: ['24/7 Guard Supervision', 'Guard Tour System', 'Panic Button System', 'Risk Assessment'],
      image: heroTeamImage,
    },
    {
      icon: Radio,
      title: 'Rapid Response',
      description:
        'Reliable fleet of tactical response vehicles manned by highly trained response officers. Each vehicle has GPS live tracking with packages designed for your specific needs. Our modern secure control room operates around the clock ensuring immediate response to alarm activations.',
      features: ['GPS Tracked Vehicles', '24/7 Control Room', 'Area-Based Response', 'ZRP Collaboration'],
      image: ctaTeamImage,
    },
    {
      icon: DollarSign,
      title: 'Cash in Transit Services',
      description:
        'Comprehensive CIT services including overnight storage of cash or bullion, local and long-distance movement of bulky cash, valuables, and confidential documents. We provide fully armoured vehicles for high-value consignments and daily, weekly, or monthly collections and deposits.',
      features: ['Armoured Vehicles', 'Overnight Storage', 'Valuables Transport', 'Scheduled Collections'],
      image: aboutTeamImage,
    },
    {
      icon: Camera,
      title: 'CCTV Monitoring & Control',
      description:
        'Advanced self-learning video analytics technology that detects unusual behaviors and assesses potential threats. Smart detection works with 24/7 live off-site monitoring. Prevention-focused approach with early detection and warning systems for real-time security support.',
      features: ['AI-Powered Analytics', 'Off-Site Monitoring', 'Threat Detection', 'Real-Time Alerts'],
      image:
        'https://images.pexels.com/photos/9301248/pexels-photo-9301248.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: ScanSearch,
      title: 'Intrusion Detection Systems (IDS) Installations',
      description:
        'Professional installation of intrusion detection systems designed to identify unauthorised entry attempts early and trigger a rapid security response.',
      features: ['Perimeter Detection', 'Alarm Integration', 'Sensor Placement', 'Rapid Response Ready'],
      image:
        'https://images.pexels.com/photos/9301842/pexels-photo-9301842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Fence,
      title: 'Technology Services',
      description:
        'Integrated technology services for mantraps, razor wire, electric fences, and electric gate motors to strengthen layered physical security around your property.',
      features: ['Mantraps', 'Razor Wire', 'Electric Fences', 'Electric Gate Motors'],
      image:
        'https://images.pexels.com/photos/33513495/pexels-photo-33513495.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Package,
      title: 'Messenger Services',
      description:
        'Well-trained, motorised, and well-equipped security operatives collect and deliver private and confidential documents requiring maximum protection. Services can be customized based on volume and frequency of items to be delivered or collected.',
      features: ['Confidential Delivery', 'Trained Operatives', 'Motorised Service', 'Flexible Scheduling'],
      image:
        'https://images.pexels.com/photos/6868182/pexels-photo-6868182.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Search,
      title: 'Private Investigations',
      description:
        'Independent investigation services to gather intelligence, provide additional information or evidence, and offer new perspectives on cases. Our agents provide thorough and professional investigative solutions tailored to your specific needs.',
      features: ['Intelligence Gathering', 'Evidence Collection', 'Case Analysis', 'Confidential Service'],
      image:
        'https://images.pexels.com/photos/9301248/pexels-photo-9301248.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Pickaxe,
      title: 'Mining Security',
      description:
        'Dedicated mining security solutions covering site access control, personnel protection, asset safeguarding, and operational risk management for mining environments.',
      features: ['Site Access Control', 'Asset Protection', 'Risk Management', 'Operational Coverage'],
      image:
        'https://images.pexels.com/photos/4612683/pexels-photo-4612683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Store,
      title: 'Retail Security',
      description:
        'Retail-focused security services designed to reduce losses, protect staff and shoppers, and maintain visible protection across stores and shopping environments.',
      features: ['Loss Prevention', 'Customer Safety', 'Store Patrols', 'Incident Response'],
      image:
        'https://images.pexels.com/photos/28607934/pexels-photo-28607934.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Search,
      title: 'Undercover Investigations',
      description:
        'Discrete investigative operations to uncover internal threats, gather intelligence, and identify patterns of fraud, theft, or misconduct without disrupting operations.',
      features: ['Covert Intelligence', 'Fraud Detection', 'Evidence Gathering', 'Confidential Reporting'],
      image:
        'https://images.pexels.com/photos/9301842/pexels-photo-9301842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: LockKeyhole,
      title: 'Undercover Security Operations',
      description:
        'Specialised undercover security deployments that blend into your environment while monitoring threats, supporting internal security goals, and assisting with risk mitigation.',
      features: ['Discrete Deployment', 'Threat Monitoring', 'Internal Risk Control', 'Operational Support'],
      image:
        'https://images.pexels.com/photos/9301248/pexels-photo-9301248.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="w-[320px] max-w-[72%] opacity-[0.04] sm:w-[460px] lg:w-[640px]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0.84)_58%,_rgba(255,255,255,1)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-red-600" />
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Comprehensive security solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,6,23,0.06)_0%,_rgba(2,6,23,0.26)_48%,_rgba(2,6,23,0.82)_100%)]" />
                <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/95 shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{service.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-700">
                      <span className="mt-2 mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-1 origin-left scale-x-0 bg-gradient-to-r from-red-600 to-black transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
