import { motion } from 'motion/react';

export function Marquee() {
  const words = Array(12).fill("Kama Velvære • Hudpleie • Massasje • Luksus • ");
  
  return (
    <div className="w-full overflow-hidden bg-beige-100 py-3 border-y border-beige-200">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {words.map((word, i) => (
          <span key={i} className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mx-4">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
