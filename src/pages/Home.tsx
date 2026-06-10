import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/Marquee';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { GalleryAndTestimonials } from '@/components/sections/GalleryAndTestimonials';
import { Contact } from '@/components/sections/Contact';
import { Chatbot } from '@/components/Chatbot';
import { Modal } from '@/components/ui/Modal';
import { BookingForm } from '@/components/BookingForm';

export function Home() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Navigation />
      
      <main>
        <Hero onBookClick={() => setShowBooking(true)} />
        <Marquee />
        <About />
        <Services />
        <GalleryAndTestimonials />
        <Contact />
      </main>

      <footer className="bg-charcoal-900 border-t border-white/5 pt-12 pb-8 text-center text-beige-300/40 text-[10px] uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Kama Velvære. Alle rettigheter reservert.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/admin" className="hover:text-gold-500 transition-colors">Admin Login</a>
        </div>
      </footer>

      <Modal isOpen={showBooking} onClose={() => setShowBooking(false)}>
        <BookingForm onSuccess={() => setShowBooking(false)} />
      </Modal>

      <Chatbot />
    </>
  );
}
