import { Link } from "react-router-dom";

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined select-none ${className}`}>{name}</span>
);

const features = [
  { icon: "movie", title: "Original → Recap", desc: "ရုပ်ရှင်တစ်ကားလုံးကို AI က ကြည့်ပြီး Recap ဇာတ်ညွှန်း၊ Hook၊ အသံ ထည့်ပြီး ဗီဒီယို အလိုအလျောက် ထုတ်ပေးတယ်။" },
  { icon: "translate", title: "Recap → Recap", desc: "တခြားဘာသာ Recap ဗီဒီယိုကို ဘာသာပြန်ပြီး AI အသံနဲ့ ပြန်ပြောပေးတယ်။" },
  { icon: "content_cut", title: "Long → Short", desc: "ဗီဒီယိုရှည်ကနေ 9:16 Short ဗီဒီယိုတွေ ထုတ်ပေးတယ်။" },
  { icon: "skull", title: "Horror Studio", desc: "ဇာတ်လမ်း၊ Horror အသံ၊ music နဲ့ ပုံတွေကနေ ဗီဒီယိုထုတ်တယ်။" },
  { icon: "newspaper", title: "News Studio", desc: "သတင်း Link / ဗီဒီယိုကနေ သတင်းဗီဒီယို ထုတ်ပေးတယ်။" },
  { icon: "record_voice_over", title: "24 Languages & AI Voices", desc: "မြန်မာ၊ English၊ ထိုင်း၊ ဂျပန် စတဲ့ ဘာသာ ၂၄ မျိုး၊ Neural voice များ။" },
];

const steps = [
  ".exe ဖိုင်ကို download ဆွဲပါ",
  "Download ဆွဲထားတဲ့ ဖိုင်ကို double-click လုပ်ပြီး app ကိုဖွင့်ပါ",
  "aistudio.google.com/apikey က free Gemini key ကို 🔑 API Key မှာ ထည့်ပါ",
];

const reqs = ["Windows 10 / 11", "Internet connection", "NVIDIA GPU (optional, ပိုမြန်)"];

export default function MovieRecapFree() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0f131c]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 md:px-6">
            <Link to={'/'} className="flex items-center gap-3 cursor-pointer">
                <img
                    src="/logo.png"
                    alt="Tint Htoo Ko"
                    className="h-15 w-15 rounded-lg object-cover"
                />

                <div className="hidden sm:flex flex-col">
                    <span className="font-[Space_Grotesk] text-lg font-semibold tracking-tight text-[#dfe2ef]">
                    Tint Htoo Ko
                    <span className="font-normal text-[#86948a]">
                        {" "}
                        / Developer
                    </span>
                    </span>

                    <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4edea3] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4edea3]" />
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#4edea3]">
                        Available for Full Stack Roles
                    </span>
                    </div>
                </div>
            </Link>

            <div className="flex items-center gap-2">
                <Link
                    to="/"
                    download
                    className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-[#10b981] via-[#4edea3] to-[#4cd7f6] px-4 py-2 text-sm font-semibold text-[#002113] transition hover:bg-[#4edea3] md:flex"
                >
                    Visit My Website
                </Link>
            </div>
        </div>
        </header>

      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <section className="relative py-20 text-center md:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-64 max-w-2xl rounded-full bg-primary/10 blur-3xl" />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Free Edition · v116
          </span>
          <h1 className="relative mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Movie Recap{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Studio</span>
          </h1>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            ကိုယ့်ကွန်ပျူတာပေါ်မှာ run တဲ့ AI ဗီဒီယို app — ရုပ်ရှင် Recap၊ ဘာသာပြန်၊ AI အသံ၊ Short / Horror / News ဗီဒီယိုတွေ ထုတ်ပေးတယ်။ <span className="text-primary">License key မလိုပါ။</span>
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://drive.google.com/file/d/1WUj7nr4g3SeJI5HEQkVNhpk7e2KaJImr/view?usp=sharing"
              download
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-brand px-8 py-4 font-display text-lg font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            >
              <Icon name="download" /> Free Download
            </a>
          </div>
        </section>

        <section className="pb-20">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-brand-cyan">// features</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={f.icon} />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 pb-20 md:grid-cols-5">
          <div className="rounded-2xl border border-border bg-surface p-8 md:col-span-3">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-brand-lilac">// how to start</p>
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-sm text-primary">{i + 1}</span>
                  <p className="pt-1 text-foreground">{s}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8 md:col-span-2">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-brand-cyan">// requirements</p>
            <ul className="space-y-4">
              {reqs.map((r) => (
                <li key={r} className="flex items-center gap-3 text-foreground">
                  <Icon name="check_circle" className="text-primary" /> {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tint Htoo Ko · Movie Recap Studio Free
      </footer>
    </div>
  );
}
