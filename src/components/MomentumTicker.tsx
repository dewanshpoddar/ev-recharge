"use client";

import { TICKER_ITEMS } from "@/lib/content";

export const MomentumTicker = () => {
  return (
    <section 
      className="bg-evr-dark py-6 overflow-hidden border-t border-white/5 relative z-20"
      aria-label="Recent deployment news"
    >
      <div 
        className="animate-ticker gap-12 items-center whitespace-nowrap"
        role="marquee"
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div
            key={`${idx}-${item}`}
            className="flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest px-6"
          >
            <div className="w-2 h-2 bg-evr-green rounded-full shadow-[0_0_8px_rgba(74,222,128,0.5)] shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
