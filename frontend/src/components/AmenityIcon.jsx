import React from 'react';
import { Wifi, Bath, Tv, Coffee, Wind, Flame, Laptop, Sparkles, Check } from 'lucide-react';

export default function AmenityIcon({ name, className = "w-5 h-5" }) {
  switch (name) {
    case 'Wifi': return <Wifi className={className} />;
    case 'Bath': return <Bath className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    default: return <Check className={className} />;
  }
}
