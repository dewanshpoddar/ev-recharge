import { Linkedin, Instagram, Mail } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/content";

export const Footer = () => {
  return (
    <footer className="bg-evr-dark text-white pt-24 pb-12 px-[6vw]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-24 border-b border-white/5">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white text-evr-dark rounded-md flex items-center justify-center text-[10px] font-extrabold">
                EV
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                ev<span className="text-evr-green-light">recharge</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">
              The uptime infrastructure for EV fleets. Mobile, grid-independent, 100% renewable. Built for India's fleet economy.
            </p>
            <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
              Varnika Energy Private Limited
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest mb-8 text-white/60">Infrastructure</h4>
            <div className="flex flex-col gap-4">
              {FOOTER_LINKS.infrastructure.map(link => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest mb-8 text-white/60">Industries</h4>
            <div className="flex flex-col gap-4">
              {FOOTER_LINKS.industries.map(link => (
                <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest mb-8 text-white/60">Reach Us</h4>
            <div className="flex flex-col gap-4">
              {FOOTER_LINKS.contact.map(link => (
                <a key={link.label} href={link.href} className="text-sm font-bold text-white/40 hover:text-white transition-colors">{link.label}</a>
              ))}
              <div className="flex gap-4 pt-4">
                <SocialIcon href="https://linkedin.com/company/ev-recharge/" icon={<Linkedin className="w-4 h-4" />} label="EV Recharge on LinkedIn" />
                <SocialIcon href="https://instagram.com/ev_recharge" icon={<Instagram className="w-4 h-4" />} label="EV Recharge on Instagram" />
                <SocialIcon href="mailto:arpit@evrecharge.org" icon={<Mail className="w-4 h-4" />} label="Email Arpit" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-[10px] text-white/30 font-bold uppercase tracking-wider mb-1">
              © 2024–2026 Varnika Energy Private Limited (EV Recharge). All rights reserved.
            </div>
            <div className="text-[10px] text-white/20 uppercase tracking-widest">
              WorkFlo Mauryansh Elanza, Ahmedabad, Gujarat 380015 · www.evrecharge.org
            </div>
          </div>
          <div className="flex gap-8">
            <a href="/privacy" className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest">Privacy</a>
            <a href="/terms" className="text-[10px] font-bold text-white/30 hover:text-white uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-bold text-white/40 hover:text-evr-green-light transition-colors">
    {children}
  </a>
);

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-evr-green hover:border-evr-green transition-all"
  >
    {icon}
  </a>
);
