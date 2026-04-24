"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPARISON_DATA } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export const GlobalComparison = () => {
  return (
    <section id="comparison-table" className="py-24 px-[6vw] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-evr-green font-extrabold uppercase tracking-widest text-[11px] mb-4">
            Competitive Advantage
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.1] tracking-tight text-evr-dark mb-6">
            {COMPARISON_DATA.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-evr-gray text-lg max-w-[600px] mx-auto">
            {COMPARISON_DATA.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="overflow-hidden rounded-[32px] border border-evr-border bg-evr-bg"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-evr-dark text-white">
                  <th className="p-8 text-[11px] font-extrabold uppercase tracking-widest">Capabilities</th>
                  <th className="p-8 text-[11px] font-extrabold uppercase tracking-widest text-white/60">Traditional Grid</th>
                  <th className="p-8 text-[11px] font-extrabold uppercase tracking-widest text-evr-green">EV Recharge MCI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-evr-border">
                {COMPARISON_DATA.rows.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-white transition-colors">
                    <td className="p-8 font-extrabold text-evr-dark">
                      {row.feature}
                    </td>
                    <td className="p-8 text-evr-gray font-medium">
                      <div className="flex items-center gap-3">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        {row.grid}
                      </div>
                    </td>
                    <td className={cn(
                      "p-8 font-bold text-evr-dark",
                      row.highlight && "bg-evr-green/5"
                    )}>
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-evr-green shrink-0" />
                        {row.evr}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-evr-dark rounded-[24px] text-white gap-8"
        >
          <div className="text-xl font-extrabold">
            Ready to bypass the grid wait-list?
          </div>
          <a
            href="#conversion"
            className="px-8 py-4 bg-evr-green text-white rounded-xl font-bold hover:bg-opacity-90 transition-all active:scale-95"
          >
            Get your 48-hour plan
          </a>
        </motion.div>
      </div>
    </section>
  );
};
