const AGENCY_NAME = process.env.NEXT_PUBLIC_AGENCY_NAME || "Myron's Agency";
const AGENCY_PHONE = process.env.NEXT_PUBLIC_AGENCY_PHONE || "+1 (672) 208-8280";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[#0B1020] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] font-bold">AI</div>
            <span className="text-lg font-semibold">{AGENCY_NAME}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">
            Leading AI consultancy helping businesses transform through intelligent automation and data-driven insights.
          </p>
          <div className="mt-3 space-y-1 text-sm text-white/80">
            <div>myronmalyk@gmail.com</div>
            <a className="hover:underline" href={`tel:${AGENCY_PHONE.replace(/[^+\d]/g, "")}`}>{AGENCY_PHONE}</a>
            <div>Vancouver, BC</div>
          </div>
        </div>

        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>AI Chatbots</li>
            <li>Predictive Analytics</li>
            <li>Process Automation</li>
            <li>Data Strategy</li>
            <li>Machine Learning</li>
            <li>Computer Vision</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Stay Updated</div>
          <p className="mt-3 text-sm text-white/70">Get the latest AI insights and industry updates delivered to your inbox.</p>
          <form className="mt-3 flex gap-2">
            <input
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-indigo-400/60"
            />
            <button className="rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#7C3AED] to-[#8B5CF6] px-4 py-2 text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
