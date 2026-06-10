import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-900 text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-gold-500 uppercase tracking-widest text-[10px] font-bold mb-3">Besøk Oss</h4>
            <h2 className="font-serif italic font-light text-4xl md:text-5xl mb-8">Kontakt & Åpningstider</h2>
            <p className="text-beige-200 font-light text-sm md:text-base mb-10 max-w-md leading-relaxed">
              Kama Velvære er en liten, eksklusiv salong hvor du kan senke skuldrene. Ta gjerne kontakt for spørsmål eller spesielle henvendelser.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-beige-300 tracking-wider uppercase mb-1">Adresse</p>
                  <p className="text-lg">Larsgården, 6009 Ålesund</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-beige-300 tracking-wider uppercase mb-1">Telefon</p>
                  <p className="text-lg">47 27 20 13</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-beige-300 tracking-wider uppercase mb-1">E-post</p>
                  <p className="text-lg">kama.salong@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[40px]"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-gold-400" size={28} />
              <h3 className="font-serif font-light text-3xl">Åpningstider</h3>
            </div>
            
            <ul className="space-y-4 font-light text-lg">
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Torsdag</span>
                <span className="text-gold-300">11.00 - 18.00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Fredag</span>
                <span className="text-gold-300">11.00 - 18.00</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Lørdag</span>
                <span className="text-gold-300">12.00 - 17.00</span>
              </li>
              <li className="flex justify-between items-center pt-4 text-beige-300/60 text-sm">
                <span>Mandag - Onsdag</span>
                <span>Stengt</span>
              </li>
              <li className="flex justify-between items-center pb-2 text-beige-300/60 text-sm">
                <span>Søndag</span>
                <span>Stengt</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
