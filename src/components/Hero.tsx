"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HERO_STATS } from "@/lib/content";
import { fadeUpHero, staggerContainerHero } from "@/lib/motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-evr-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-evr-green/10 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={staggerContainerHero}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-[6vw] max-w-[1400px] mx-auto w-full"
      >
        <motion.div variants={fadeUpHero} className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-evr-green/10 rounded-full border border-evr-green/20">
            <div className="w-1.5 h-1.5 bg-evr-green rounded-full animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-evr-green">
              Active operations across India
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUpHero}
          className="text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-tight text-evr-dark mb-8"
        >
          Your fleet runs on energy.<br className="hidden sm:block" />
          <span className="text-evr-green"> We deliver it.</span>
        </motion.h1>

        <motion.p
          variants={fadeUpHero}
          className="max-w-[600px] text-[clamp(16px,2vw,20px)] font-medium text-evr-gray leading-relaxed mb-10"
        >
          Mobile, grid-independent DC charging — deployed at your depot, warehouse, or hub. 
          SLA-backed uptime from day one.
        </motion.p>

        <motion.div variants={fadeUpHero} className="flex flex-wrap gap-4 mb-20">
          <a
            href="#conversion"
            className="px-8 py-4 bg-evr-dark text-white rounded-xl font-bold hover:bg-evr-green transition-all shadow-lg shadow-evr-dark/10 active:scale-95 text-center flex-1 sm:flex-none"
          >
            See your fleet's uptime plan
          </a>
          <a
            href="#product"
            className="px-8 py-4 bg-white text-evr-dark border border-evr-border rounded-xl font-bold hover:bg-evr-bg transition-all active:scale-95 text-center flex-1 sm:flex-none"
          >
            See the product
          </a>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          variants={staggerContainerHero}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-evr-border"
        >
          {HERO_STATS.map(stat => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <motion.div variants={fadeUpHero} className="flex flex-col gap-1">
    <div className="text-[32px] lg:text-[42px] font-extrabold text-evr-dark leading-none">
      {value.includes("TRL") ? (
        <>
          TRL <span className="text-evr-green">7</span>
        </>
      ) : (
        <span className="text-evr-green">{value}</span>
      )}
    </div>
    <div className="text-[11px] font-bold uppercase tracking-widest text-evr-gray">
      {label}
    </div>
  </motion.div>
);
