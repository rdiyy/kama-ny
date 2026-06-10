import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai'|'user', content: string}[]>([
    { role: 'ai', content: 'Hei! Velkommen til Kama Velvære. Spør meg gjerne om priser, behandlinger eller åpningstider.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // MOCK OpenAI responses
  const getAIResponse = async (userText: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const text = userText.toLowerCase();
    let response = "Jeg er foreløpig en enkel assistent og har ikke svar på alt. Vil du at jeg skal hjelpe deg med å bestille time, eller lese mer om våre behandlinger på nettsiden?";
    
    if (text.includes('pris') || text.includes('koster')) {
      response = "Prisene varierer fra behandling til behandling. For eksempel koster en 60 minutters massasje 900 kr, mens en 60 mins hudpleie koster 950 kr. Du kan se fullstendig prisoversikt under 'Tjenester'.";
    } else if (text.includes('åpningstid') || text.includes('når')) {
      response = "Våre åpningstider er:\n• Torsdag: 11:00 - 18:00\n• Fredag: 11:00 - 18:00\n• Lørdag: 12:00 - 17:00";
    } else if (text.includes('behandling') || text.includes('massasje') || text.includes('hudpleie')) {
      response = "Vi tilbyr avslappende massasje (rygg, nakke, hodebunn og helkropp), avansert hudpleie (inkludert Microneedling), og forming/farging av vipper og bryn (Vippeløft, Brynslaminering). Vil du booke time?";
    } else if (text.includes('hei') || text.includes('hallo')) {
      response = "Hei! Hvordan kan jeg hjelpe deg i dag?";
    }

    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', content: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: newMsg }]);
    setInput('');
    getAIResponse(newMsg);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-gold-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-gold-500/20 hover:scale-110 transition-transform z-40"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-[30px] shadow-2xl shadow-gold-500/10 overflow-hidden z-50 border border-beige-200 flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-gold-500 p-6 text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif font-light italic text-xl">Kama Velvære</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/80 mt-1">AI-assistent</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Lukk chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-beige-50 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`max-w-[85%] p-4 rounded-2xl whitespace-pre-wrap text-sm ${
                    msg.role === 'ai' 
                    ? 'bg-white border border-beige-200 text-charcoal-800 self-start rounded-tl-sm shadow-sm' 
                    : 'bg-gold-500 text-white self-end rounded-tr-sm shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="bg-white border border-beige-200 text-charcoal-800 self-start p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              )}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-beige-200 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Skriv din melding..." 
                className="flex-1 bg-beige-50 border border-beige-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-transparent"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="bg-gold-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold-600 disabled:opacity-50 transition-colors shrink-0"
              >
                <Send size={16} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
