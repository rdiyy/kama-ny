import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { BookingForm } from '@/components/BookingForm';

export function Navigation() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  // Quick listener for scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsNavScrolled(window.scrollY > 50);
    });
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isNavScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase italic text-gold-500 cursor-pointer" onClick={() => scrollTo('hero')}>
            Kama Velvære
          </div>
          <div className="hidden md:flex gap-8 items-center text-[10px] tracking-widest uppercase font-medium text-charcoal-800">
            <button onClick={() => scrollTo('about')} className="hover:text-gold-500 transition-colors">Om oss</button>
            <button onClick={() => scrollTo('services')} className="hover:text-gold-500 transition-colors">Tjenester</button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-gold-500 transition-colors">Galleri</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-gold-500 transition-colors">Kontakt</button>
            <button 
              onClick={() => setShowBooking(true)}
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-full transition-all shadow-lg shadow-gold-500/20 active:scale-95"
            >
              Book Time
            </button>
          </div>
          {/* Mobile Booking Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setShowBooking(true)}
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 text-[10px] tracking-widest uppercase font-semibold rounded-full shadow-lg shadow-gold-500/20"
            >
              Book
            </button>
          </div>
        </div>
      </motion.nav>

      <Modal isOpen={showBooking} onClose={() => setShowBooking(false)}>
        <BookingForm onSuccess={() => setShowBooking(false)} />
      </Modal>
    </>
  );
}
