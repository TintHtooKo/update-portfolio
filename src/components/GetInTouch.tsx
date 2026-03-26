interface ContactMethod {
  label: string;
  value: string;
  icon: string;
  link: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "tinthtooko.official18@email.com",
    icon: "✉️",
    link: "mailto:tinthtooko.official18@email.com",
    color: "hover:text-blue-400"
  },
  {
    label: "WhatsApp",
    value: "+971 50 643 5276",
    icon: "💬",
    link: "https://wa.me/971506435276", // Dubai format
    color: "hover:text-green-400"
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    icon: "🔗",
    link: "https://www.linkedin.com/in/tint-htoo-ko-0a18462a4/",
    color: "hover:text-blue-600"
  }
];

import Resume from '../assets/resume/Mr. Tint Htoo Ko ( Timmy).pdf'


export default function GetInTouch() {
  return (
    <section id="contact" className="lg:px-40 md:px-12.5 px-5 py-24 bg-[#000216] border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#0788FF] font-mono mb-4 text-sm tracking-[0.2em] uppercase">
          // What's Next?
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I’m currently based in <span className="text-white">Dubai, UAE</span> and 
          open to new opportunities worldwide. Whether you have a question or just 
          want to say hi, I’ll try my best to get back to you!
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.link}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#0788FF]/50 transition-all group"
            >
              <div className="text-2xl mb-3">{method.icon}</div>
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">
                {method.label}
              </h3>
              <p className={`text-white font-medium truncate ${method.color}`}>
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          <a 
            href={Resume} 
            target='_blank'
            rel="noreferrer"
            className="px-10 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <span>View & Download CV</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-mono">
        <p>© 2026 Tint Htoo Ko. Built with React & TS.</p>
        <p>Currently in Dubai, UAE 🇦🇪</p>
      </div>
    </section>
  );
}