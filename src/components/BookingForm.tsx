import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Check } from 'lucide-react';
import { servicesData } from '@/data';
import { Button } from './ui/Button';
import { generateId } from '@/lib/utils';
import { Booking } from '@/types';

interface BookingFormProps {
  onSuccess: () => void;
}

export function BookingForm({ onSuccess }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Extract all services into a flat list for the dropdown
  const allServices = servicesData.flatMap(cat => 
    cat.items.map(item => ({
      ...item,
      category: cat.title,
      fullName: `${cat.title} - ${item.name} (${item.price})`
    }))
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate network delay & LocalStorage persistence
    await new Promise(r => setTimeout(r, 1000));
    
    const newBooking: Booking = {
      id: generateId(),
      customerName: name,
      customerPhone: phone,
      treatment: selectedService,
      date,
      time,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const existingStr = localStorage.getItem('kama_bookings');
    const existing: Booking[] = existingStr ? JSON.parse(existingStr) : [];
    localStorage.setItem('kama_bookings', JSON.stringify([...existing, newBooking]));
    
    setIsSubmitting(false);
    setStep(4); // Success step
  };

  if (step === 4) {
    return (
      <div className="py-8 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <Check size={32} />
        </div>
        <h3 className="font-serif italic font-light text-3xl mb-2 text-charcoal-900">Timen er booket!</h3>
        <p className="text-gray-600 mb-6">Takk for din bestilling, {name}. Vi gleder oss til å se deg.</p>
        <Button onClick={onSuccess}>Lukk vinduet</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">
      <div className="text-center mb-2">
        <h2 className="font-serif text-3xl font-light italic text-charcoal-900 mb-1">Book Time</h2>
        <p className="text-sm text-charcoal-800">
          Steg {step} av 3
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {[1,2,3].map(i => (
            <div key={i} className={`h-1.5 w-10 rounded-full ${i <= step ? 'bg-gold-500' : 'bg-beige-200'}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <label className="block">
            <span className="block text-sm font-medium mb-2">Velg behandling</span>
            <select 
              required
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full bg-white border border-beige-200 rounded-[20px] p-4 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-shadow appearance-none"
            >
              <option value="" disabled>-- Velg fra meny --</option>
              {allServices.map(svc => (
                <option key={svc.id} value={svc.fullName}>{svc.fullName}</option>
              ))}
            </select>
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <label className="block">
            <span className="block text-sm font-medium mb-2 flex items-center gap-2"><Calendar size={16}/> Velg dato</span>
            <input 
              type="date" 
              required
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={e => setDate(e.target.value)}
              className="w-full bg-white border border-beige-200 rounded-[20px] p-4 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium mb-2 flex items-center gap-2"><Clock size={16}/> Velg tid</span>
            <select
              required
              value={time}
              onChange={e => setTime(e.target.value)}
              className="w-full bg-white border border-beige-200 rounded-[20px] p-4 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            >
              <option value="" disabled>-- Velg tid --</option>
              {['11:00','12:00','13:00','14:00','15:00','16:00','17:00'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <label className="block">
            <span className="block text-sm font-medium mb-2 flex items-center gap-2"><User size={16}/> Ditt navn</span>
            <input 
              type="text" 
              required
              placeholder="Fornavn og etternavn"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-white border border-beige-200 rounded-[20px] p-4 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </label>
          <label className="block mt-4">
            <span className="block text-sm font-medium mb-2 flex items-center gap-2"><Phone size={16}/> Telefonnummer</span>
            <input 
              type="tel" 
              required
              placeholder="+47 •• •• •• ••"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full bg-white border border-beige-200 rounded-[20px] p-4 text-sm outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </label>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        {step > 1 && (
          <Button 
            type="button" 
            variant="outline" 
            className="flex-1"
            onClick={() => setStep(step - 1)}
          >
            Tilbake
          </Button>
        )}
        <Button 
          type="submit" 
          className="flex-1 flex justify-center items-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
          ) : step === 3 ? 'Bekreft booking' : 'Neste steg'}
        </Button>
      </div>

      {/* Note about Mock Data */}
      <p className="text-xs text-center text-gray-400 mt-4">
        (Bookings lagres lokalt i nettleseren for demonstrasjon, ettersom skydatabase ble fravalgt under oppstartsfasen)
      </p>
    </form>
  );
}
