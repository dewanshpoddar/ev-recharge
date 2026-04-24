import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | EV Recharge",
  description: "Privacy Policy for EV Recharge.",
};

export default function PrivacyPage() {
  return (
    <main className="relative bg-white pt-24 min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-24 px-[6vw] max-w-[900px] mx-auto flex-1 w-full">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-evr-dark mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-evr-gray font-bold">Last updated: April 2026</p>
        </div>

        <div className="prose prose-lg prose-slate text-evr-dark max-w-none space-y-12">
          <div>
            <h2 className="text-2xl font-extrabold mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed text-evr-gray">
              Varnika Energy Private Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates EV Recharge. When you use our lead form, we collect your name, company name, work email, fleet size, and city. This information is solely used to construct your custom fleet uptime plan and contact you regarding our services.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-extrabold mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed text-evr-gray">
              We do not sell, rent, or trade your personal information to third parties. Your data is used exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-evr-gray">
              <li>Provide and maintain our charging infrastructure services</li>
              <li>Communicate with you regarding your fleet plan request</li>
              <li>Improve our website and operational delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">3. Data Security</h2>
            <p className="leading-relaxed text-evr-gray">
              We implement appropriate technical and organizational measures to maintain the safety of your personal information. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">4. Contact Us</h2>
            <p className="leading-relaxed text-evr-gray">
              If you have any questions about this Privacy Policy, please contact us at: <br />
              <a href="mailto:arpit@evrecharge.org" className="text-evr-green font-bold hover:underline mt-2 inline-block">arpit@evrecharge.org</a> or <a href="mailto:dewansh@evrecharge.org" className="text-evr-green font-bold hover:underline">dewansh@evrecharge.org</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
