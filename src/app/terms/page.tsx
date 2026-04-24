import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | EV Recharge",
  description: "Terms of Service for EV Recharge.",
};

export default function TermsPage() {
  return (
    <main className="relative bg-white pt-24 min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-24 px-[6vw] max-w-[900px] mx-auto flex-1 w-full">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-evr-dark mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-evr-gray font-bold">Last updated: April 2026</p>
        </div>

        <div className="prose prose-lg prose-slate text-evr-dark max-w-none space-y-12">
          <div>
            <h2 className="text-2xl font-extrabold mb-4">1. Introduction</h2>
            <p className="leading-relaxed text-evr-gray">
              These Terms of Service govern your use of the EV Recharge website (www.evrecharge.org), operated by Varnika Energy Private Limited. By accessing this website, you agree to be bound by these Terms.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-extrabold mb-4">2. Service Usage</h2>
            <p className="leading-relaxed text-evr-gray">
              The content on this website is for general information regarding our Mobile Charging Infrastructure (MCI) Series. Lead requests submitted through our form do not constitute a binding contract until a formal Service Level Agreement (SLA) is signed between Varnika Energy Private Limited and your organization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed text-evr-gray">
              All content on this website, including text, graphics, logos, and data visualizations, is the property of Varnika Energy Private Limited and is protected by applicable intellectual property laws. You may not reproduce or distribute this content without explicit permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">4. Limitation of Liability</h2>
            <p className="leading-relaxed text-evr-gray">
              Varnika Energy Private Limited shall not be liable for any indirect, incidental, or consequential damages resulting from the use of this website. Estimated CO₂ savings and uptime statistics are based on current data and may vary depending on specific operational conditions.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-extrabold mb-4">5. Contact Information</h2>
            <p className="leading-relaxed text-evr-gray">
              Varnika Energy Private Limited<br />
              WorkFlo Mauryansh Elanza, Ahmedabad, Gujarat 380015<br />
              Email: <a href="mailto:arpit@evrecharge.org" className="text-evr-green font-bold hover:underline mt-2 inline-block">arpit@evrecharge.org</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
