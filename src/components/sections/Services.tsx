import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '@/data';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ServiceCategory } from '@/types';

function ServiceAccordion({ category, isOpen, onToggle }: { category: ServiceCategory, isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="border border-beige-200 rounded-[30px] overflow-hidden bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-gold-500/5 transition-all">
      <button 
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="font-serif italic font-light text-2xl text-charcoal-900">{category.title}</h3>
        <span className={cn("text-gold-500 transition-transform duration-300", isOpen && "rotate-180")}>
          <ChevronDown size={24} />
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-8 pt-2 border-t border-dashed border-beige-200 flex flex-col md:flex-row gap-10">
              
              {/* Pricing List */}
              <div className="flex-1 space-y-4">
                {category.items.map(item => (
                  <div key={item.id} className="flex items-end justify-between border-b border-dashed border-beige-200 pb-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-charcoal-900">{item.name}</span>
                      {item.duration && <span className="text-[10px] text-charcoal-800/60 uppercase tracking-widest mt-1">{item.duration}</span>}
                    </div>
                    <span className="font-medium text-charcoal-900 mb-0.5 whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Info Blocks (if any) */}
              {category.infoBlocks && category.infoBlocks.length > 0 && (
                <div className="w-full md:w-[40%] bg-beige-100 rounded-[20px] p-6 space-y-6">
                  {category.infoBlocks.map((block, idx) => (
                    <div key={idx}>
                      <h5 className={cn("text-[10px] tracking-widest font-bold uppercase mb-3", block.warning ? "text-red-500" : "text-charcoal-900")}>
                        {block.title}
                      </h5>
                      {block.list && (
                        <ul className="space-y-2">
                          {block.list.map((listItem, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-charcoal-800 leading-relaxed">
                              <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", block.warning ? "bg-red-400" : "bg-gold-400")} />
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {block.text && <p className="text-sm text-charcoal-800 leading-relaxed">{block.text}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const [openId, setOpenId] = useState<string | null>(servicesData[0].id);

  return (
    <section id="services" className="py-24 bg-beige-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold-500 uppercase tracking-[0.2em] text-[10px] font-bold mb-3">Våre Behandlinger</h4>
          <h2 className="font-serif italic font-light text-4xl md:text-5xl text-charcoal-900">Spa & Velvære Meny</h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-8"></div>
        </div>

        <div className="space-y-4">
          {servicesData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <ServiceAccordion 
                category={category} 
                isOpen={openId === category.id} 
                onToggle={() => setOpenId(openId === category.id ? null : category.id)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
