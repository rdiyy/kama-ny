import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Trash2, LogOut, CheckCircle2 } from 'lucide-react';
import { Booking } from '@/types';
import { Button } from '@/components/ui/Button';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Simple hardcoded auth for demo/SPA
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchBookings();
    } else {
      alert('Feil passord. Tips: Prøv admin123');
    }
  };

  const fetchBookings = () => {
    const data = localStorage.getItem('kama_bookings');
    if (data) {
      setBookings(JSON.parse(data));
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchBookings();
  }, [isAuthenticated]);

  const deleteBooking = (id: string) => {
    if (confirm('Er du sikker på at du vil slette denne timen?')) {
      const updated = bookings.filter(b => b.id !== id);
      localStorage.setItem('kama_bookings', JSON.stringify(updated));
      setBookings(updated);
    }
  };

  const toggleStatus = (id: string) => {
    const updated = bookings.map(b => 
      b.id === id ? { ...b, status: b.status === 'pending' ? 'confirmed' : 'pending' } : b
    );
    localStorage.setItem('kama_bookings', JSON.stringify(updated));
    setBookings(updated as Booking[]); // type assertion fix
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-beige-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-10 rounded-[40px] shadow-2xl shadow-gold-500/10 border border-beige-200 text-center"
        >
          <div className="w-16 h-16 bg-beige-100 mx-auto rounded-full flex items-center justify-center mb-6 text-gold-500">
            <Calendar size={32} />
          </div>
          <h2 className="font-serif italic font-light text-3xl mb-2 text-charcoal-900">Kama Admin</h2>
          <p className="text-gray-500 mb-8 text-sm">Logg inn for å se bookinger</p>
          
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <input 
                type="password"
                placeholder="Passord"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border-b-2 border-beige-200 pb-2 focus:outline-none focus:border-gold-500 text-lg transition-colors bg-transparent"
              />
            </div>
            <Button type="submit" className="w-full mt-6">Logg inn</Button>
          </form>
          <p className="text-xs text-gray-400 mt-6 mt-4">(Bruk <strong>admin123</strong> for demo)</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-serif text-4xl font-light italic text-charcoal-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Oversikt over fremtidige behandlinger (Lokal database)</p>
          </div>
          <Button variant="ghost" onClick={() => setIsAuthenticated(false)} className="gap-2">
            <LogOut size={18} /> Logg ut
          </Button>
        </header>

        <div className="bg-white rounded-[40px] shadow-sm border border-beige-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-beige-100 text-charcoal-800 text-sm tracking-wider uppercase">
                  <th className="p-4 font-medium">Dato & Tid</th>
                  <th className="p-4 font-medium">Kunde</th>
                  <th className="p-4 font-medium">Behandling</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Handlinger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-beige-100">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-gray-500 italic">
                      Ingen bookinger funnet. Prøv å bestille en time fra forsiden.
                    </td>
                  </tr>
                ) : (
                  bookings.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(booking => (
                    <tr key={booking.id} className="hover:bg-beige-50/50 transition-colors">
                      <td className="p-4 align-top">
                        <div className="font-medium text-charcoal-900 whitespace-nowrap">{booking.date}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Clock size={14} /> {booking.time}
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="font-medium text-charcoal-900">{booking.customerName}</div>
                        <div className="text-sm text-gray-500 mt-1">{booking.customerPhone}</div>
                      </td>
                      <td className="p-4 align-top max-w-[300px]">
                        <div className="text-charcoal-800 truncate" title={booking.treatment}>{booking.treatment}</div>
                        <div className="text-xs text-gray-400 mt-1">Opprettet: {new Date(booking.createdAt).toLocaleDateString()}</div>
                      </td>
                      <td className="p-4 align-top">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          <CheckCircle2 size={14} />
                          {booking.status === 'confirmed' ? 'Bekreftet' : 'Avventer'}
                        </span>
                      </td>
                      <td className="p-4 align-top text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => toggleStatus(booking.id)}
                            className="p-2 text-gold-600 hover:bg-gold-50 rounded-full transition-colors"
                            title="Bekreft/Avvent"
                          >
                            <CheckCircle2 size={18} />
                          </button>
                          <button 
                            onClick={() => deleteBooking(booking.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            title="Slett booking"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
