import React from 'react';
import { X } from 'lucide-react';
import './BookingModal.css';

const BOOKING_URL = 'https://booking-directly.com/widgets/2FtcovmkVyAu40RKQAmygormLwDtQaaiPqUPvmBAmAEMHQRdo3lLtMhkIBSWY/properties';

export default function BookingModal({ onClose }) {
  return (
    <div className="bm-overlay" onClick={onClose}>
      <div className="bm-modal" onClick={e => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose} aria-label="Close">
          <X className="w-5 h-5" />
        </button>
        <iframe
          src={BOOKING_URL}
          className="bm-iframe"
          title="Check Availability"
          allow="payment"
        />
      </div>
    </div>
  );
}
