"use client";

import { X } from 'lucide-react';
import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FF4F00] w-full flex justify-center items-center px-3 md:px-8 py-2.5 relative">
      <div className="flex items-center gap-2 max-w-screen-xl pr-8 md:pr-0">
        <p className="text-white text-sm font-medium text-center">
          Mới: Sutralab AI Fashion Studio hiện đã có sẵn ở phiên bản beta.
          <span className="underline cursor-pointer hover:opacity-90 ml-2 font-semibold">
            Tìm hiểu thêm →
          </span>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-12 p-1 rounded-xl hover:bg-white/10 transition-colors"
        aria-label="Đóng thông báo"
      >
        <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </button>
    </div>
  );
}
