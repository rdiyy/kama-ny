import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
          alt="Spa Massage Velvære" 
          className="w-full h-full object-cover sepia-[.2]"
        />
        <div className="absolute inset-0 bg-charcoal-900/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-beige-100 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 font-bold"
        >
          Ålesunds skjulte perle
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light italic tracking-wide leading-tight mb-8"
        >
          Kama Velvære
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-beige-50 font-light tracking-wide mb-10 max-w-2xl"
        >
          Luksus for kropp og sinn
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" onClick={onBookClick} className="text-lg px-12 py-7">
            Book time
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator down */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Oppdag</span>
        <div className="w-px h-16 bg-white/30 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 64] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0" 
          />
        </div>
      </motion.div>
    </section>
  );
}
