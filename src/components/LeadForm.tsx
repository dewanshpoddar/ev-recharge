"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronLeft, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { FORM_PERSONAS, FORM_FLEET_SIZES, FORM_WEBHOOK_URL } from "@/lib/content";

export const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    // Explicit client-side validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setErrorMsg("Please enter a valid work email address.");
      setIsSubmitting(false);
      return;
    }
    
    const data = Object.fromEntries(formData.entries());
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(FORM_WEBHOOK_URL, {
        method: "POST",
        body: new URLSearchParams(data as Record<string, string>),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // GAS usually returns 200 even on error, we should verify response text
      // But if it's a cross-origin 'no-cors' request, we might not be able to read it.
      // If it's standard cors, we can read json. Assuming standard GAS macro setup:
      const result = await response.json().catch(() => null);
      
      if (response.ok && (!result || result.result === "success")) {
        setIsSuccess(true);
      } else {
        throw new Error("Server returned an error");
      }
    } catch (error) {
      console.error("Submission failed", error);
      setErrorMsg("Something went wrong. Please try submitting again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="conversion" className="py-24 px-[6vw] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-evr-dark text-white rounded-[40px] p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
          >
            <CheckCircle2 className="w-20 h-20 text-evr-green mb-8" />
            <h3 className="text-4xl font-extrabold mb-4">Plan is in motion.</h3>
            <p className="text-white/40 max-w-[360px] mx-auto">
              Arpit or Dewansh will reach out within 4 hours to confirm your fleet&apos;s specific micro-loop design.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="conversion" className="py-24 px-[6vw] bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="w-fit px-3 py-1 bg-evr-green/10 text-evr-green rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-6">
            Start Here
          </div>
          <h2 className="text-[clamp(32px,5vw,72px)] font-extrabold leading-[1] tracking-tight text-evr-dark mb-8">
            See your fleet&apos;s<br />uptime plan.
          </h2>
          <p className="text-evr-gray text-xl leading-relaxed mb-12">
            Not a sales deck. A specific charging plan for your fleet&apos;s exact size, city, and operating model — ready within 48 hours.
          </p>
          
          <div className="space-y-6">
            <FeatureItem icon="📋" text="Custom fleet plan in 48 hours — specific to your operations" />
            <FeatureItem icon="🚐" text="Pilots available for 20+ vehicle fleets" />
            <FeatureItem icon="🤝" text="Arpit or Dewansh confirms within 4 hours" />
          </div>
        </div>

        <div className="relative">
          <div className="bg-evr-dark text-white rounded-[40px] p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden min-h-[550px]">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-extrabold mb-2">What best describes you?</h3>
                  <p className="text-white/40 text-sm mb-8">This changes the plan we build for you. Takes 2 seconds.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FORM_PERSONAS.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { setPersona(p.id); setStep(2); }}
                        className="p-6 bg-white/5 border border-white/10 rounded-[24px] text-left hover:bg-evr-green hover:border-evr-green transition-all group"
                      >
                        <div className="text-3xl mb-4">{p.icon}</div>
                        <div className="font-extrabold text-lg mb-1">{p.title}</div>
                        <div className="text-xs text-white/40 group-hover:text-white/60">{p.desc}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button 
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-white/40 hover:text-white mb-8 text-sm font-bold"
                  >
                    <ChevronLeft className="w-4 h-4" /> Change selection
                  </button>
                  <h3 className="text-2xl font-extrabold mb-2">About your fleet</h3>
                  <p className="text-white/40 text-sm mb-6">Four fields. We&apos;ll do the rest.</p>
                  
                  {errorMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm font-bold"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="persona_type" value={persona} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input label="Name" name="name" placeholder="Rahul Sharma" required />
                      <Input label="Company" name="company" placeholder="FleetCo India" required />
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fleet_size" className="text-[11px] font-extrabold uppercase tracking-widest text-white/40">Fleet Size</label>
                        <select 
                          id="fleet_size"
                          name="fleet_size" 
                          required 
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-evr-green outline-none"
                        >
                          <option value="">Select size</option>
                          {FORM_FLEET_SIZES.map(size => (
                            <option key={size.value} value={size.value}>{size.label}</option>
                          ))}
                        </select>
                      </div>
                      <Input label="Work Email" name="email" type="email" placeholder="you@company.com" required />
                    </div>
                    <Input label="City / Region" name="city" placeholder="Delhi NCR / Mumbai / Bangalore" required />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-evr-green text-white py-5 rounded-2xl font-extrabold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Building plan..." : "Build my fleet's uptime plan"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Visual Decor */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-evr-green/10 rounded-full blur-[80px] z-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-4 text-evr-dark font-bold text-sm">
    <div className="w-10 h-10 bg-evr-bg rounded-xl flex items-center justify-center text-xl shrink-0">
      {icon}
    </div>
    {text}
  </div>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  const id = props.id || props.name;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] font-extrabold uppercase tracking-widest text-white/40">{label}</label>
      <input
        id={id}
        {...props}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-evr-green outline-none transition-colors"
      />
    </div>
  );
};
