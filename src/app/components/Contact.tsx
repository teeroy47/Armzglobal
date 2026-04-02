import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

type SubmitState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ status: 'idle', message: '' });

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message.');
      }

      setSubmitState({
        status: 'success',
        message: 'Your message has been sent successfully. We will get back to you shortly.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again later.';

      setSubmitState({
        status: 'error',
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@armzglobal.com',
      link: 'mailto:info@armzglobal.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '0774 625 137',
      link: 'tel:0774625137',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '58 Elizabeth Windsor Rd, Harare',
      link: 'https://maps.google.com/?q=58+Elizabeth+Windsor+Rd,+Harare',
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-red-600" />
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Ready to secure your property? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8 text-3xl font-bold">Contact Information</h3>
            <p className="mb-8 leading-relaxed text-gray-600">
              Reach out to us for comprehensive security solutions tailored to your needs.
              Our team is available 24/7 to assist you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center transition-transform group-hover:scale-110">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-red-600"
                    placeholder="Tapiwanashe Chiunye"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-red-600"
                    placeholder="Tapiwanashe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-red-600"
                    placeholder="0774 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-red-600"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                {submitState.status !== 'idle' && (
                  <div
                    className={`rounded-lg px-4 py-3 text-sm ${
                      submitState.status === 'success'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {submitState.message}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  whileHover={isSubmitting ? undefined : { scale: 1.02, y: -2 }}
                  whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
