import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onCategorySelect?: (category: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCategorySelect }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="announcement-wrapper">
      {/* 4-Color Category Top Strip matching Lakshita */}
      <div className="custom-announcement">
        <button
          onClick={() => onCategorySelect?.('Winter Wear')}
          className="custom-announcement-item"
          style={{ background: '#72285a' }}
        >
          <span>WINTER</span>
        </button>
        <button
          onClick={() => onCategorySelect?.('Suit Sets')}
          className="custom-announcement-item"
          style={{ background: '#b40740' }}
        >
          <span>NAYAM</span>
        </button>
        <button
          onClick={() => onCategorySelect?.('Sale')}
          className="custom-announcement-item"
          style={{ background: '#145636' }}
        >
          <span>UPTO 50%</span>
        </button>
        <button
          onClick={() => onCategorySelect?.('Velvets')}
          className="custom-announcement-item"
          style={{ background: '#998b0d' }}
        >
          <span>VELVETS</span>
        </button>
      </div>

      {/* Sale Timer Announcement */}
      <div className="announcement-sale-timer">
        <div className="announcement-sale-timer__inner">
          <span className="sale-pill">
            <Sparkles size={14} /> FESTIVE SALE
          </span>
          <span className="announcement-sale-timer__title">
            Flat 15% OFF On Prepaid Orders | Free Express Shipping Nationwide
          </span>
          <div className="announcement-sale-timer__clock">
            <Clock size={14} />
            <span>ENDS IN:</span>
            <strong>{formatNum(timeLeft.hours)}h</strong>
            <span className="sep">:</span>
            <strong>{formatNum(timeLeft.minutes)}m</strong>
            <span className="sep">:</span>
            <strong>{formatNum(timeLeft.seconds)}s</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
