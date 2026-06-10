import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              {/* Decorative back framing */}
              <div className="absolute -inset-4 md:-inset-6 border border-beige-200 rounded-[40px] -z-10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80" 
                alt="Mathilde, hudpleier på Kama Velvære" 
                className="w-full aspect-[3/4] object-cover rounded-[40px] shadow-xl sepia-[.1]"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h4 className="text-gold-500 uppercase tracking-widest text-[10px] font-bold">Om oss</h4>
            <h2 className="font-serif italic font-light text-4xl md:text-5xl text-charcoal-900 leading-tight">
              Velkommen til Kama Velvære!
            </h2>
            
            <div className="space-y-4 text-charcoal-800 text-sm md:text-base leading-relaxed font-light italic mt-8">
              <p>
                Mitt navn er Mathilde og jeg er 22 år. Jeg er utdannet hudpleier og har jobbet med dette i fire år. Jeg har god erfaring med alle typer behandlinger innenfor yrket mitt, i tillegg til kurs i spesialbehandlinger.
              </p>
              <p>
                Kama Velvære er en liten salong som ligger i Larsgården, Ålesund. Her tilbyr jeg en rekke behandlinger som vil fremme både helse og velvære. Du kan velge mellom ulike typer massasje, voksing; eller få stelt vipper og bryn i en behagelig atmosfære.
              </p>
              <p>
                Mer informasjon og priser finner du i de ulike historiene som er festet øverst på profilen:)
              </p>
            </div>
            
            <div className="pt-8">
              <img src="/signature.png" alt="Mathilde Signature" className="h-12 opacity-50 hidden" /> {/* Placeholder for signature if present */}
              <p className="font-serif italic text-gold-600 text-xl">Mathilde</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Eier & Hudpleier</p>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
