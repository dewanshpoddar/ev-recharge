"use client";

import { motion } from "framer-motion";
import { Zap, Leaf, Cpu, Truck } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const BentoProduct = () => {
  return (
    <section id="product" className="py-24 bg-evr-bg px-[6vw]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-evr-green font-extrabold uppercase tracking-widest text-[11px] mb-4">
            Infrastructure
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.1] tracking-tight text-evr-dark">
            Next-gen mobile charging.<br />
            <span className="text-evr-green">Zero compromises.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Feature - 120kW */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-evr-dark rounded-[32px] p-8 md:p-12 text-white"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-evr-green rounded-2xl flex items-center justify-center mb-8">
                  <Zap className="w-6 h-6 text-white" fill="white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                  120kW DC Output.<br />ICE-level uptime.
                </h3>
                <p className="text-white/60 text-lg max-w-[440px] leading-relaxed">
                  No AC/DC conversion loss. A 12kWh commercial vehicle charges in 15–20 minutes — 
                  matching the ICE refueling window perfectly.
                </p>
              </div>
              <div className="mt-12 flex gap-12">
                <div>
                  <div className="text-3xl font-extrabold text-evr-green">12kWh</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40">Avg Battery Size</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-evr-green">15-20m</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40">Full Charge SOC</div>
                </div>
              </div>
            </div>
            {/* Visual Decor */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-evr-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Renewable */}
          <motion.div
            variants={fadeUp}
            className="bg-white border border-evr-border rounded-[32px] p-8 hover:border-evr-green transition-colors"
          >
            <div className="w-10 h-10 bg-evr-green/10 rounded-xl flex items-center justify-center mb-6">
              <Leaf className="w-5 h-5 text-evr-green" />
            </div>
            <h3 className="text-xl font-extrabold mb-4 text-evr-dark">100% Renewable</h3>
            <p className="text-evr-gray text-sm leading-relaxed">
              Solar and wind powered. ESG-reportable, carbon-credit eligible from day one.
            </p>
          </motion.div>

          {/* IoT */}
          <motion.div
            variants={fadeUp}
            className="bg-white border border-evr-border rounded-[32px] p-8 hover:border-evr-green transition-colors"
          >
            <div className="w-10 h-10 bg-evr-green/10 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="w-5 h-5 text-evr-green" />
            </div>
            <h3 className="text-xl font-extrabold mb-4 text-evr-dark">AI Telematics</h3>
            <p className="text-evr-gray text-sm leading-relaxed">
              Full fleet energy visibility. Per-vehicle SOC tracking and smart billing.
            </p>
          </motion.div>

          {/* Universal */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-3 bg-white border border-evr-border rounded-[32px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-evr-green transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-evr-green rounded-2xl flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-evr-dark">Universal 3W & 4W Compatibility</h3>
                <p className="text-evr-gray text-sm">Rugged daily-ops build. RSA support included in all service agreements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-evr-bg rounded-lg text-[11px] font-bold uppercase tracking-wider text-evr-dark">L5 Class</span>
              <span className="px-4 py-2 bg-evr-bg rounded-lg text-[11px] font-bold uppercase tracking-wider text-evr-dark">SCV Class</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
