"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CASE_STUDIES } from "@/lib/content";

export const OperationalProof = () => {
  const [activeTab, setActiveTab] = useState<(typeof CASE_STUDIES)[number]>(CASE_STUDIES[0]);

  return (
    <section id="proof" className="py-24 px-[6vw] bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-evr-gray font-extrabold uppercase tracking-widest text-[11px] mb-4">
            Operational Proof
          </p>
          <h2 className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.1] tracking-tight text-evr-dark">
            Actual Trial Logs.<br />
            <span className="text-evr-green">Built on real-world uptime.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {CASE_STUDIES.map((trial) => (
              <button
                key={trial.id}
                onClick={() => setActiveTab(trial)}
                aria-pressed={activeTab.id === trial.id}
                className={cn(
                  "p-6 rounded-2xl border text-left transition-all group relative overflow-hidden",
                  activeTab.id === trial.id
                    ? "bg-evr-dark border-evr-dark text-white"
                    : "bg-white border-evr-border hover:border-evr-green"
                )}
              >
                <div className="relative z-10">
                  <div className="text-lg font-extrabold mb-1">{trial.name}</div>
                  <div className={cn(
                    "text-xs font-medium uppercase tracking-wider opacity-60",
                    activeTab.id === trial.id ? "text-white/60" : "text-evr-gray"
                  )}>
                    {trial.type}
                  </div>
                </div>
                {activeTab.id === trial.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-evr-dark z-0"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 bg-evr-bg rounded-[40px] p-8 md:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div className="space-y-8">
                  <div className="grid grid-cols-3 gap-4">
                    {activeTab.stats.map(stat => (
                      <DataStat key={stat.label} label={stat.label} value={stat.value} />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl font-extrabold italic text-evr-dark leading-tight">
                    &quot;{activeTab.quote}&quot;
                  </blockquote>
                  
                  <p className="text-evr-gray text-sm font-medium border-t border-evr-border pt-6">
                    {activeTab.desc}
                  </p>
                </div>

                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl bg-evr-border">
                  <Image
                    src={activeTab.image.src}
                    alt={activeTab.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-evr-dark/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="px-3 py-1 bg-evr-green text-white text-[10px] font-bold uppercase rounded-full w-fit mb-2">
                      Live Case Study
                    </div>
                    <div className="text-white font-extrabold text-xl">{activeTab.name}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataStat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-2xl font-extrabold text-evr-green tracking-tight">{value}</div>
    <div className="text-[10px] font-bold uppercase tracking-wider text-evr-gray mt-1">
      {label}
    </div>
  </div>
);
