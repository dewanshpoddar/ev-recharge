"use client";

import React from "react";
import { motion } from "framer-motion";
import { CloudLightning, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const ESGSection = () => {
  return (
    <section id="esg" className="py-24 px-[6vw] bg-evr-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-evr-green rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-[800px] mb-16"
        >
          <motion.p variants={fadeUp} className="text-evr-green font-extrabold uppercase tracking-widest text-[11px] mb-4">
            Net-Zero Integrity
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1] tracking-tight mb-8">
            India&apos;s grid is hidden coal.<br />
            <span className="text-evr-green">Your fleet deserves better.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/40 text-lg leading-relaxed">
            Grid charging in India runs on ~70% fossil fuels. EV Recharge provides the only 100% renewable, 
            SLA-backed charging infrastructure for modern fleets.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Comparison Cards */}
          <ComparisonCard 
            title="Conventional Grid" 
            icon={<CloudLightning className="w-6 h-6 text-red-400" />}
            desc="Standard depot charging relies on the state grid, which is primarily coal-fired. Your green fleet is still indirectly burning carbon."
            stat="710g CO2/kWh"
            statLabel="Carbon Intensity"
            color="red"
          />
          <ComparisonCard 
            title="EV Recharge MCI" 
            icon={<Sun className="w-6 h-6 text-evr-green" />}
            desc="Our units are powered by 100% dedicated solar and wind sources. We provide session-level traceability for your ESG board reporting."
            stat="0g CO2/kWh"
            statLabel="Carbon Intensity"
            color="green"
            isPrimary
          />
        </div>

        {/* Impact Stats */}
        <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <ImpactStat value="36K T" label="Estimated CO₂ Saved / 3 Years" />
          <ImpactStat value="100%" label="Renewable Traceability" />
          <ImpactStat value="SLA" label="Guaranteed Energy Uptime" />
        </div>
      </div>
    </section>
  );
};

interface ComparisonCardProps {
  title: string;
  icon: React.ReactNode;
  desc: string;
  stat: string;
  statLabel: string;
  color: "red" | "green";
  isPrimary?: boolean;
}

const ComparisonCard = ({ title, icon, desc, stat, statLabel, color, isPrimary }: ComparisonCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={cn(
      "p-10 rounded-[40px] flex flex-col justify-between border transition-all",
      isPrimary 
        ? "bg-white/5 border-evr-green/30 hover:border-evr-green" 
        : "bg-white/[0.02] border-white/5 hover:border-white/20"
    )}
  >
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center",
          isPrimary ? "bg-evr-green/20" : "bg-white/5"
        )}>
          {icon}
        </div>
        <h3 className="text-2xl font-extrabold">{title}</h3>
      </div>
      <p className="text-white/40 text-base leading-relaxed mb-12">
        {desc}
      </p>
    </div>
    <div className="bg-white/5 rounded-2xl p-6 flex items-center justify-between">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{statLabel}</span>
      <span className={cn(
        "text-2xl font-extrabold",
        color === "green" ? "text-evr-green" : "text-red-400"
      )}>
        {stat}
      </span>
    </div>
  </motion.div>
);

const ImpactStat = ({ value, label }: { value: string; label: string }) => (
  <div className="space-y-2">
    <div className="text-5xl font-extrabold tracking-tight">{value}</div>
    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{label}</div>
  </div>
);
