import { motion } from 'motion/react';
import { galleryImages, testimonials } from '@/data';

export function GalleryAndTestimonials() {
  return (
    <section id="gallery" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Testimonials */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h4 className="text-gold-500 uppercase tracking-widest text-[10px] font-bold mb-3">Omtaler</h4>
          <h2 className="font-serif italic font-light text-4xl md:text-5xl text-charcoal-900 mb-12">Hva våre kunder sier</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {testimonials.map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/50 backdrop-blur-sm border border-beige-200 p-8 rounded-[30px] relative shadow-sm"
              >
                <div className="text-gold-300 font-serif text-6xl absolute top-4 left-6 opacity-30 leading-none">"</div>
                <p className="text-charcoal-800 relative z-10 text-sm leading-relaxed italic mb-6 mt-4">"{testi.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-charcoal-900">{testi.name}</p>
                  <p className="text-[10px] text-gold-600 uppercase tracking-widest mt-1">{testi.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12 border-t border-beige-100">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-square rounded-[30px] overflow-hidden shadow-sm group"
            >
              <img 
                src={src} 
                alt={`Kama Velvære Galleri Bilde ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
