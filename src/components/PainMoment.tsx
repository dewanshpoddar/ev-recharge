"use client";

import { motion } from "framer-motion";
import { PAIN_CARDS } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const PainMoment = () => {
  return (
    <section id="pain" className="py-24 px-[6vw] bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-evr-gray font-extrabold uppercase tracking-widest text-[11px] mb-4">
            The daily reality of EV fleet operations
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.1] tracking-tight text-evr-dark">
            The shift starts at 7.<br />
            <span className="text-evr-green">The charging queue doesn&apos;t care.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAIN_CARDS.map(card => (
            <PainCard 
              key={card.num}
              num={card.num} 
              label={card.label} 
              quote={card.quote}
              desc={card.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface PainCardProps {
  num: string;
  label: string;
  quote: string;
  desc: string;
}

const PainCard = ({ num, label, quote, desc }: PainCardProps) => (
  <motion.div
    variants={fadeUp}
    className="p-8 bg-evr-bg rounded-[32px] border border-transparent hover:border-evr-green transition-colors"
  >
    <div className="text-[10px] font-bold uppercase tracking-widest text-evr-gray mb-6">
      {num} — {label}
    </div>
    <div className="text-xl font-extrabold text-evr-dark mb-4 italic">
      &quot;{quote}&quot;
    </div>
    <p className="text-evr-gray text-sm leading-relaxed">
      {desc}
    </p>
  </motion.div>
);
