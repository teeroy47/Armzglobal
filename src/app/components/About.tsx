import { motion } from 'motion/react';
import { Shield, Target, Eye, Award } from 'lucide-react';
import aboutTeamImage from '../../assets/about-team.png';
import missionTeamImage from '../../assets/mission-team.png';
import visionTeamImage from '../../assets/vision-team.png';

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
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              About <span className="text-red-600">ARMZ GLOBAL</span>
            </h2>
            <div className="mb-8 mt-6 h-1 w-24 bg-red-600" />
            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Armz Global provides unparalleled security solutions customised to suit each client&apos;s needs.
                We provide end to end security services from traditional manned guards to cutting edge electronic
                systems powered by artificial intelligence.
              </p>
              <p>
                Not only can we protect your physical assets, our IT security engineers can also protect your
                network from hackers using firewalls.
              </p>
              <p>
                When we provide security, we do a full risk assessment to ensure that our personnel and services
                will match the client&apos;s needs. Armz Global&apos;s management has a police and military background
                which makes our security consultancy best in class.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-red-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.14)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(17,24,39,0.16)_55%,_rgba(17,24,39,0.48)_100%)]" />
              <img
                src={aboutTeamImage}
                alt="ARMZ Global rapid response team standing beside a branded vehicle"
                className="h-[280px] w-full object-cover object-center sm:h-[360px] md:h-[430px] lg:h-[520px]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="max-w-md rounded-2xl bg-black/60 p-4 text-white backdrop-blur-md sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400 sm:text-sm">
                    Trusted Teams
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-100 sm:text-base">
                    A disciplined, visible, and professionally trained team prepared for on-site protection and rapid response.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={missionTeamImage}
              alt="ARMZ Global team training in formation"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,24,39,0.18)_0%,_rgba(17,24,39,0.52)_45%,_rgba(17,24,39,0.88)_100%)]" />
            <div className="relative flex min-h-[320px] flex-col justify-end p-6 sm:min-h-[360px] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="max-w-md leading-relaxed text-white/90">
                Our mission is to build lasting relationships based on trust, commitment, innovation and
                superior customer service in the security sector.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(15,23,42,0.18)]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={visionTeamImage}
              alt="ARMZ Global response team in coordinated formation"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(3,7,18,0.12)_0%,_rgba(3,7,18,0.45)_44%,_rgba(3,7,18,0.88)_100%)]" />
            <div className="relative flex min-h-[320px] flex-col justify-end p-6 sm:min-h-[360px] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="max-w-md leading-relaxed text-white/90">
                Be recognized as the leader in creating a safer society.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-12 text-center text-3xl font-bold">
            Our Core <span className="text-red-600">Values</span>
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-700"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h4 className="mb-3 text-center text-xl font-bold">{value.title}</h4>
                <p className="text-center leading-relaxed text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
