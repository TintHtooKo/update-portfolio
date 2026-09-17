import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

type CodeTab = "laravel" | "typescript";

const experiences = [
  {
    company: "Ramzin Group",
    role: "Senior Full Stack Developer",
    period: "Nov 2024 – Aug 2026",
    location: "Dubai, United Arab Emirates",
    type: "ON SITE",
    description:
      "Worked on enterprise digital transformation across a diversified group of companies, building React and Laravel applications for centralized HR and business operations.",
    highlights: [
      {
        title: "Centralized HR Management System",
        description:
          "Built and maintained a centralized HR management system serving multiple group companies. Improved employee tracking and record-management efficiency by approximately 75%.",
      },
      {
        title: "Secure Authentication",
        description:
          "Implemented secure authentication using HTTP-only cookies, Laravel Sanctum/session authentication, protected API routes, validation, and permission-based access control.",
      },
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Laravel",
      "PHP",
      "MySQL",
      "Axios",
      "TanStack Query",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    company: "Myan Pro Solutions",
    role: "WordPress & Infrastructure Developer",
    period: "July 2022 – June 2024",
    location: "India",
    type: "REMOTE",
    description:
      "Developed and maintained WordPress websites and business portals for international clients while handling server, email, DNS and website performance tasks.",
    highlights: [
      {
        title: "WordPress Development",
        description:
          "Managed WordPress and Elementor websites, custom PHP functionality, responsive interfaces, and client-specific website requirements.",
      },
      {
        title: "Infrastructure & Email",
        description:
          "Worked with hosting, DNS, SPF, DKIM, DMARC, webmail configuration, website performance and basic server maintenance.",
      },
    ],
    stack: [
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL",
      "Hostinger",
      "DNS",
      "HTML",
      "CSS",
    ],
  },
  {
    company: "Idea Tomorrow",
    role: "Web Developer",
    period: "Sep 2020 – May 2022",
    location: "Yangon, Myanmar",
    type: "ON SITE",
    description:
      "Developed full-stack web applications using the MERN stack and worked on REST APIs, MongoDB data models, frontend interfaces and application maintenance.",
    highlights: [
      {
        title: "MERN Applications",
        description:
          "Built React-based single-page applications with Node.js, Express.js and MongoDB REST APIs.",
      },
      {
        title: "API & Application Maintenance",
        description:
          "Implemented API endpoints, authentication, bug fixes, validation and application improvements.",
      },
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
      "JWT",
    ],
  },
  {
    company: "Fortune International Limited",
    role: "Web Developer Intern",
    period: "Jan 2020 – Aug 2020",
    location: "Yangon, Myanmar",
    type: "INTERNSHIP",
    description:
      "Supported backend development and internal web applications using Django, Python and PostgreSQL.",
    highlights: [
      {
        title: "Backend Development",
        description:
          "Assisted with Django APIs, PostgreSQL database work, testing and internal content-management functionality.",
      },
    ],
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap", "REST API"],
  },
];

const techGroups = [
  {
    icon: "terminal",
    title: "Frontend Engineering",
    subtitle: "Client & State Layers",
    badge: "CORE",
    items: [
      ["React.js", "Expert"],
      ["TypeScript", "Advanced"],
      ["React Native", "Production"],
      ["Tailwind CSS", "Advanced"],
      ["Bootstrap", "Advanced"],
      ["Next.js", "Exploring"],
    ],
  },
  {
    icon: "dns",
    title: "Backend & APIs",
    subtitle: "Application Services",
    badge: "FULL STACK",
    items: [
      ["Laravel", "Core Primary"],
      ["PHP", "Advanced"],
      ["Node.js", "Advanced"],
      ["Express.js", "Advanced"],
      ["Django", "Working"],
      ["REST APIs", "Advanced"],
    ],
  },
  {
    icon: "database",
    title: "Data & Persistence",
    subtitle: "Database Systems",
    badge: "DATA",
    items: [
      ["MySQL", "Advanced"],
      ["PostgreSQL", "Advanced"],
      ["MongoDB", "Production"],
      ["Redis", "Working"],
      ["SQL Optimization", "Advanced"],
      ["Database Design", "Advanced"],
    ],
  },
  {
    icon: "shield",
    title: "Security & Tools",
    subtitle: "Application Security",
    badge: "SECURITY",
    items: [
      ["HTTP-only Cookies", "Production"],
      ["Laravel Sanctum", "Production"],
      ["Authentication", "Advanced"],
      ["RBAC / Permissions", "Production"],
      ["Git / GitHub", "Advanced"],
      ["Context / Zustand", "Advanced"],
      ["Axios / TanStack Query", "Production"],
    ],
  },
];

function Icon({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
    >
      {children}
    </span>
  );
}

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0f131c]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 md:px-6">
        <div onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer">
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
        </div>

        <nav className="hidden items-center gap-1 rounded-xl bg-[#0a0e17]/80 p-1 lg:flex">
          <div
              onClick={scrollToTop}
              className="rounded-lg cursor-pointer px-4 py-2 text-sm text-[#bbcabf] transition hover:bg-[#262a34] hover:text-white"
            >
              Overview
            </div>
          {[
            ["Tech Stack", "#tech-stack"],
            ["Experience", "#experience"],
            ["Architecture", "#architecture"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-lg px-4 py-2 text-sm text-[#bbcabf] transition hover:bg-[#262a34] hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/TintHtooKo"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#181b25] text-[#bbcabf] transition hover:text-[#4cd7f6]"
          >
            <Icon className="text-[20px]">code</Icon>
          </a>

          <a
            href="https://www.linkedin.com/in/tint-htoo-ko-0a18462a4/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#181b25] text-[#bbcabf] transition hover:text-[#4cd7f6]"
          >
            <Icon className="text-[20px]">share</Icon>
          </a>

          <a
            href="/Tint Htoo Ko.pdf"
            download
            className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-[#10b981] via-[#4edea3] to-[#4cd7f6] px-4 py-2 text-sm font-semibold text-[#002113] transition hover:bg-[#4edea3] md:flex"
          >
            <Icon className="text-[18px]">download</Icon>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-16 pt-10 md:px-6"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-56 w-[calc(100vw-2rem)] max-w-180 -translate-x-1/2 rounded-full bg-[#10b981]/10 blur-3xl md:h-90" />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#262a34] px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#4edea3] opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-[#4edea3]" />
          </span>

          <span className="font-mono text-[10px] uppercase tracking-wider text-[#4edea3]">
            Available for Full Stack Roles
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#181b25] px-3 py-1 font-mono text-[10px] text-[#bbcabf]">
          <Icon className="text-[14px] text-[#4cd7f6]">
            location_on
          </Icon>
          Dubai, UAE / Remote
        </div>
      </div>

      <div className="grid items-end gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="font-[Space_Grotesk] text-3xl font-bold leading-tight tracking-tight text-[#dfe2ef] md:text-4xl">
            Building Scalable{" "}
            <span className="bg-linear-to-r from-[#4edea3] via-[#6ffbbe] to-[#4cd7f6] bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            Web Systems.
          </h1>

          <p className="mt-5 max-w-2xl md:text-lg leading-relaxed text-[#bbcabf]">
            Full Stack Developer with 5+ years of experience building
            production web applications using React, TypeScript, Laravel,
            Node.js and React Native. Experienced in enterprise HR systems, CRM,
            REST APIs, database-driven applications and business platforms.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-4">
          <a
            href="#experience"
            className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#10b981] via-[#4edea3] to-[#4cd7f6] px-6 py-3.5 font-[Space_Grotesk] font-semibold text-[#002113] transition hover:scale-[1.01]"
          >
            Explore Experience
            <Icon className="text-[20px]">arrow_downward</Icon>
          </a>

          <div className="flex gap-2">
            <a
              href="#contact"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#262a34] px-4 py-3 text-sm font-medium text-[#dfe2ef] transition hover:text-[#4cd7f6]"
            >
              <Icon className="text-[18px]">chat</Icon>
              Contact
            </a>

            <a
              href="/Tint Htoo Ko.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-xl bg-[#181b25] px-4 py-3 font-mono text-xs text-[#dfe2ef] transition hover:text-[#4edea3]"
            >
              <Icon className="text-[18px]">article</Icon>
              CV.pdf
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 rounded-xl bg-[#181b25] p-4 md:grid-cols-4">
        <Metric
          value="12+"
          label="Companies"
          description="Enterprise HR System"
          icon="domain"
        />

        <Metric
          value="75%"
          label="Efficiency"
          description="HR Tracking Improvement"
          icon="trending_up"
          primary
        />

        <Metric
          value="5+"
          label="Years Experience"
          description="Full Stack Development"
          icon="schedule"
          secondary
        />

        <Metric
          value="10+"
          label="Projects"
          description="International Clients"
          icon="verified"
        />
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  description,
  icon,
  primary = false,
  secondary = false,
}: {
  value: string;
  label: string;
  description: string;
  icon: string;
  primary?: boolean;
  secondary?: boolean;
}) {
  return (
    <div className="rounded-lg bg-[#1c1f29]/70 p-4 transition hover:bg-[#262a34]">
      <div className="mb-1 flex items-center justify-between">
        <span
          className={`font-mono text-3xl font-bold ${
            primary
              ? "text-[#4edea3]"
              : secondary
                ? "text-[#4cd7f6]"
                : "text-[#dfe2ef]"
          }`}
        >
          {value}
        </span>

        <Icon
          className={`text-[22px] ${
            secondary ? "text-[#4cd7f6]" : "text-[#4edea3]"
          }`}
        >
          {icon}
        </Icon>
      </div>

      <span className="font-[Space_Grotesk] text-sm font-semibold text-[#dfe2ef]">
        {label}
      </span>

      <span className="mt-0.5 block font-mono text-[10px] text-[#86948a]">
        {description}
      </span>
    </div>
  );
}

function TechStack() {
  return (
    <section id="tech-stack" className="bg-[#0a0e17] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
        <SectionHeading
          code=">_"
          label="Systems & Languages"
          title="Production Tech Stack"
          description="Technologies used across production applications and client projects."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl bg-[#1c1f29] p-6 shadow-md transition hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#262a34] text-[#4edea3]">
                    <Icon>{group.icon}</Icon>
                  </div>

                  <div>
                    <h3 className="font-[Space_Grotesk] font-semibold text-[#dfe2ef]">
                      {group.title}
                    </h3>

                    <span className="font-mono text-[10px] text-[#86948a]">
                      {group.subtitle}
                    </span>
                  </div>
                </div>

                <span className="rounded bg-[#4edea3]/10 px-2 py-0.5 font-mono text-[9px] text-[#4edea3]">
                  {group.badge}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {group.items.map(([name, level]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-lg bg-[#181b25] p-2"
                  >
                    <span className="text-sm font-medium text-[#dfe2ef]">
                      {name}
                    </span>

                    <span className="font-mono text-[10px] text-[#4edea3]">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  code,
  label,
  title,
  description,
}: {
  code: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-xs text-[#4edea3]">{code}</span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#4edea3]">
            {label}
          </span>
        </div>

        <h2 className="font-[Space_Grotesk] text-3xl font-bold text-[#dfe2ef]">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-md text-sm text-[#86948a]">{description}</p>
      )}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-[#0f131c] py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          code="02 //"
          label="Career Timeline"
          title="Engineering Experience"
          description="Experience across enterprise applications, web infrastructure and full-stack development."
        />

        <div className="relative flex flex-col gap-8">
          <div className="absolute bottom-6 left-4 top-6 w-px bg-[#31353f] md:left-8" />

          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="relative pl-12 md:pl-20"
            >
              <div
                className={`absolute left-4 top-5 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ${
                  index === 0
                    ? "bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,.6)] ring-[#4edea3]/20"
                    : "bg-[#4cd7f6] ring-[#4cd7f6]/20"
                } md:left-8`}
              />

              <div className="rounded-xl bg-[#1c1f29] p-6 shadow-md transition hover:shadow-xl md:p-8">
                <div className="flex flex-col justify-between gap-4 border-b border-white/5 pb-5 lg:flex-row lg:items-center">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#4edea3]/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-[#4edea3]">
                        {experience.type}
                      </span>

                      <span className="rounded-full bg-[#31353f] px-2.5 py-0.5 font-mono text-[9px] text-[#bbcabf]">
                        {experience.location}
                      </span>

                      <span className="rounded-full bg-[#262a34] px-2.5 py-0.5 font-mono text-[9px] text-[#bbcabf]">
                        {experience.period}
                      </span>
                    </div>

                    <h3 className="font-[Space_Grotesk] text-xl font-bold text-[#dfe2ef]">
                      {experience.role}
                    </h3>

                    <span className="font-[Space_Grotesk] text-base text-[#4edea3]">
                      {experience.company}
                    </span>
                  </div>

                  {index === 0 && (
                    <div className="flex items-center gap-2 rounded-lg bg-[#181b25] px-3 py-1.5 font-mono text-[10px] text-[#dfe2ef]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#4edea3]" />
                      Recent Experience
                    </div>
                  )}
                </div>

                <p className="my-6 text-sm leading-relaxed text-[#bbcabf]">
                  {experience.description}
                </p>

                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="rounded-lg bg-[#181b25] p-4"
                    >
                      <h4 className="mb-1 font-[Space_Grotesk] font-semibold text-[#dfe2ef]">
                        {highlight.title}
                      </h4>

                      <p className="text-sm leading-relaxed text-[#86948a]">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-[#181b25] px-2.5 py-1 font-mono text-[10px] text-[#dfe2ef]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="bg-[#181b25] py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          code="03 //"
          label="Architecture"
          title="Featured Engineering Work"
          description="Selected examples of how I approach real production systems."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <ArchitectureCard
            path="module://hr-management"
            label="Enterprise Application"
            title="HR Management System"
            description="React and Laravel based HR management platform used to manage employee records, departments, assets, attendance and business workflows."
            metric="~75% Tracking Efficiency"
            icon="hub"
          />

          <ArchitectureCard
            path="security://authentication"
            label="Application Security"
            title="Secure Authentication"
            description="Authentication architecture using Laravel Sanctum/session-based authentication, HTTP-only cookies, protected API routes and role-based permissions."
            metric="HTTP-only + RBAC"
            icon="shield"
          />

          <ArchitectureCard
            path="data://api-client"
            label="Frontend Architecture"
            title="Axios + TanStack Query"
            description="React API layer using Axios for HTTP communication and TanStack Query for server-state fetching, caching, loading states and mutation handling."
            metric="Cached Server State"
            icon="sync"
          />
        </div>
      </div>
    </section>
  );
}

function ArchitectureCard({
  path,
  label,
  title,
  description,
  metric,
  icon,
}: {
  path: string;
  label: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-[#1c1f29] shadow-lg transition hover:shadow-2xl">
      <div className="flex items-center justify-between bg-[#262a34] p-5">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ffb4ab]" />
          <span className="h-3 w-3 rounded-full bg-[#c0c1ff]" />
          <span className="h-3 w-3 rounded-full bg-[#4edea3]" />
        </div>

        <span className="font-mono text-[10px] text-[#86948a]">
          {path}
        </span>
      </div>

      <div className="flex h-36 items-center justify-center bg-[#0a0e17]">
        <div className="flex items-center gap-2">
          <div className="rounded-lg border border-[#4edea3]/40 bg-[#1c1f29] p-4 text-center">
            <Icon className="text-[#4edea3]">{icon}</Icon>
          </div>

          <div className="h-px w-8 bg-[#4edea3]" />

          <div className="rounded-lg border border-[#4cd7f6]/40 bg-[#1c1f29] px-4 py-3 text-center">
            <span className="font-mono text-xs text-[#4cd7f6]">
              API
            </span>
          </div>

          <div className="h-px w-8 bg-[#4edea3]" />

          <div className="rounded-lg border border-[#c0c1ff]/40 bg-[#1c1f29] px-4 py-3 text-center">
            <span className="font-mono text-xs text-[#c0c1ff]">
              DB
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-6">
        <div>
          <span className="font-mono text-[10px] font-semibold uppercase text-[#4edea3]">
            {label}
          </span>

          <h3 className="mb-2 mt-1 font-[Space_Grotesk] text-lg font-bold text-[#dfe2ef]">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-[#86948a]">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-[#262a34]/50 p-3">
          <span className="font-mono text-[10px] text-[#86948a]">
            Engineering Detail
          </span>

          <span className="font-mono text-xs font-bold text-[#4edea3]">
            {metric}
          </span>
        </div>
      </div>
    </div>
  );
}

function CodeInspection() {
  const [tab, setTab] = useState<CodeTab>("laravel");

  return (
    <section className="bg-[#0f131c] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            code="04 //"
            label="Real-Time Inspection"
            title="Production API Architecture"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setTab("laravel")}
              className={`rounded px-3 py-1.5 font-mono text-[10px] transition ${
                tab === "laravel"
                  ? "bg-[#262a34] text-[#4edea3]"
                  : "bg-[#181b25] text-[#86948a]"
              }`}
            >
              Laravel Controller
            </button>

            <button
              onClick={() => setTab("typescript")}
              className={`rounded px-3 py-1.5 font-mono text-[10px] transition ${
                tab === "typescript"
                  ? "bg-[#262a34] text-[#4cd7f6]"
                  : "bg-[#181b25] text-[#86948a]"
              }`}
            >
              TypeScript Client
            </button>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl bg-[#0a0e17] shadow-2xl">
          <div className="flex items-center justify-between gap-3 bg-[#1c1f29] px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ffb4ab]" />
              <span className="h-3 w-3 rounded-full bg-[#4edea3]/40" />
              <span className="h-3 w-3 rounded-full bg-[#4edea3]" />

              <span className="ml-2 min-w-0 truncate font-mono text-[10px] text-[#86948a] sm:text-xs">
                {tab === "laravel"
                  ? "app/Http/Controllers/HR/ActivityController.php"
                  : "src/services/api/activityClient.ts"}
              </span>
            </div>

            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4edea3]" />

              <span className="font-mono text-[9px] uppercase text-[#4edea3]">
                Production Example
              </span>
            </div>
          </div>

          <div className="max-h-120 overflow-x-auto overflow-y-scroll p-4 font-mono text-xs leading-7 text-[#dfe2ef] sm:p-6"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: "#4edea3 #111620",
          }}
          >
            {tab === "laravel" ? (
              <LaravelCode />
            ) : (
              <TypeScriptCode />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function LaravelCode() {
  return (
    <pre>
      <code>
        <span className="text-[#86948a]">
          // Production HR API — Activity tracking & team completion
        </span>
        {"\n\n"}

        <span className="text-[#4cd7f6]">namespace</span>{" "}
        App\Http\Controllers\Api;
        {"\n\n"}

        <span className="text-[#4cd7f6]">use</span>{" "}
        App\Http\Controllers\Controller;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        Illuminate\Http\Request;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        Illuminate\Support\Facades\Auth;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        Illuminate\Support\Facades\DB;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        Illuminate\Support\Facades\Validator;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        Carbon\Carbon;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        App\Models\Activity;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        App\Models\ActivityLocation;
        {"\n"}
        <span className="text-[#4cd7f6]">use</span>{" "}
        App\Models\EmployeeActivity;
        {"\n\n"}

        <span className="text-[#4cd7f6]">class</span>{" "}
        <span className="text-[#4edea3]">AdminController</span>{" "}
        <span className="text-[#4cd7f6]">extends</span> Controller {"{"}
        {"\n\n"}

        {"  "}
        <span className="text-[#4cd7f6]">public function</span>{" "}
        <span className="text-[#4edea3]">addActivityLocation</span>(
        Request $request
        ) {"{"}
        {"\n\n"}

        {"    "}
        <span className="text-[#86948a]">
          // Validate activity request
        </span>
        {"\n"}

        {"    "}$validate = Validator::make(
        $request-&gt;all(),
        [
        {"\n"}

        {"      "}
        <span className="text-[#c0c1ff]">'location'</span> =&gt;{" "}
        <span className="text-[#c0c1ff]">'required|string|max:255'</span>,
        {"\n"}

        {"      "}
        <span className="text-[#c0c1ff]">'activityId'</span> =&gt;{" "}
        <span className="text-[#c0c1ff]">
          'required|integer|exists:activities,id'
        </span>
        ,
        {"\n"}

        {"    "}]);
        {"\n\n"}

        {"    "}
        <span className="text-[#4cd7f6]">if</span>{" "}
        ($validate-&gt;fails()) {"{"}
        {"\n"}

        {"      "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        response()-&gt;json([
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'status'</span> =&gt;{" "}
        <span className="text-[#f0c674]">false</span>,
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'message'</span> =&gt;{" "}
        <span className="text-[#c0c1ff]">'Validation failed.'</span>,
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'errors'</span> =&gt;{" "}
        $validate-&gt;errors(),
        {"\n"}

        {"      "}]);
        {"\n"}

        {"    "}{"}"}
        {"\n\n"}

        {"    "}
        <span className="text-[#86948a]">
          // Resolve authenticated employee
        </span>
        {"\n"}

        {"    "}$employeeId = Auth::user()-&gt;employee-&gt;id;
        {"\n\n"}

        {"    "}
        <span className="text-[#86948a]">
          // Load activity and verify assignment
        </span>
        {"\n"}

        {"    "}$activity = Activity::with(
        <span className="text-[#c0c1ff]">'assignedEmployees'</span>
        )-&gt;find($request-&gt;activityId);
        {"\n\n"}

        {"    "}$assignedEmployee =
        $activity-&gt;assignedEmployees()
        {"\n"}

        {"      "}-&gt;where(
        <span className="text-[#c0c1ff]">'employee_id'</span>,
        $employeeId
        )
        {"\n"}

        {"      "}-&gt;first();
        {"\n\n"}

        {"    "}
        <span className="text-[#4cd7f6]">if</span> (!$assignedEmployee) {"{"}
        {"\n"}

        {"      "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        response()-&gt;json([
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'status'</span> =&gt;{" "}
        <span className="text-[#f0c674]">false</span>,
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'message'</span> =&gt;{" "}
        <span className="text-[#c0c1ff]">
          'You are not assigned to this activity.'
        </span>
        ,
        {"\n"}

        {"      "}]);
        {"\n"}

        {"    "}{"}"}
        {"\n\n"}

        {"    "}
        <span className="text-[#86948a]">
          // Find active employee activity session
        </span>
        {"\n"}

        {"    "}$existing = ActivityLocation::where(
        <span className="text-[#c0c1ff]">'employee_id'</span>,
        $employeeId
        )
        {"\n"}

        {"      "}-&gt;where(
        <span className="text-[#c0c1ff]">'activity_id'</span>,
        $activity-&gt;id
        )
        {"\n"}

        {"      "}-&gt;whereNull(
        <span className="text-[#c0c1ff]">'logout_time'</span>
        )
        {"\n"}

        {"      "}-&gt;first();
        {"\n\n"}

        {"    "}
        <span className="text-[#4cd7f6]">if</span> ($existing) {"{"}
        {"\n"}

        {"      "}
        <span className="text-[#86948a]">
          // Update or complete existing activity
        </span>
        {"\n"}

        {"      "}$existing-&gt;activity_location =
        $request-&gt;location;
        {"\n"}

        {"      "}$existing-&gt;employee_activity_status =
        <span className="text-[#c0c1ff]">'Active'</span>;
        {"\n"}

        {"      "}$existing-&gt;save();
        {"\n\n"}

        {"      "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        response()-&gt;json([
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'status'</span> =&gt;{" "}
        <span className="text-[#f0c674]">true</span>,
        {"\n"}

        {"        "}
        <span className="text-[#c0c1ff]">'message'</span> =&gt;{" "}
        <span className="text-[#c0c1ff]">
          'Activity status updated.'
        </span>
        ,
        {"\n"}

        {"      "}]);
        {"\n"}

        {"    "}{"}"}
        {"\n\n"}

        {"    "}
        <span className="text-[#86948a]">
          // Create activity tracking record
        </span>
        {"\n"}

        {"    "}$activityLocation = new ActivityLocation();
        {"\n"}

        {"    "}$activityLocation-&gt;employee_id = $employeeId;
        {"\n"}

        {"    "}$activityLocation-&gt;activity_id = $activity-&gt;id;
        {"\n"}

        {"    "}$activityLocation-&gt;start_location =
        $request-&gt;location;
        {"\n"}

        {"    "}$activityLocation-&gt;login_time = Carbon::now();
        {"\n"}

        {"    "}$activityLocation-&gt;employee_activity_status =
        <span className="text-[#c0c1ff]">'Ongoing'</span>;
        {"\n"}

        {"    "}$activityLocation-&gt;save();
        {"\n\n"}

        {"    "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        response()-&gt;json([
        {"\n"}

        {"      "}
        <span className="text-[#c0c1ff]">'status'</span> =&gt;{" "}
        <span className="text-[#f0c674]">true</span>,
        {"\n"}

        {"      "}
        <span className="text-[#c0c1ff]">'message'</span> =&gt;{" "}
        <span className="text-[#c0c1ff]">
          'Activity started successfully.'
        </span>
        ,
        {"\n"}

        {"    "}]);
        {"\n"}

        {"  "}{"}"}
        {"\n"}

        {"}"}
      </code>
    </pre>
  );
}

function TypeScriptCode() {
  return (
    <pre>
      <code>
        <span className="text-[#86948a]">
          // Typed HR Activity Tracking API — Axios + TanStack Query
        </span>
        {"\n\n"}

        {/* Imports */}
        <span className="text-[#4cd7f6]">import</span>{" "}
        {"{"}
        useQuery,
        useMutation,
        useQueryClient
        {"}"}{" "}
        <span className="text-[#4cd7f6]">from</span>{" "}
        <span className="text-[#c0c1ff]">
          "@tanstack/react-query"
        </span>
        ;
        {"\n"}

        <span className="text-[#4cd7f6]">import</span> axios{" "}
        <span className="text-[#4cd7f6]">from</span>{" "}
        <span className="text-[#c0c1ff]">"axios"</span>;
        {"\n\n"}

        {/* Types */}
        <span className="text-[#4cd7f6]">type</span>{" "}
        <span className="text-[#4edea3]">ActivityStatus</span> =
        {" "}
        <span className="text-[#c0c1ff]">"NotStarted"</span> |{" "}
        <span className="text-[#c0c1ff]">"Ongoing"</span> |{" "}
        <span className="text-[#c0c1ff]">"Active"</span> |{" "}
        <span className="text-[#c0c1ff]">"Completed"</span>;
        {"\n\n"}

        <span className="text-[#4cd7f6]">type</span>{" "}
        <span className="text-[#4edea3]">EmployeeActivity</span> = {"{"}
        {"\n"}

        {"  "}id: <span className="text-[#4cd7f6]">number</span>;
        {"\n"}

        {"  "}employee_id:{" "}
        <span className="text-[#4cd7f6]">number</span>;
        {"\n"}

        {"  "}employee_name:{" "}
        <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"  "}role:{" "}
        <span className="text-[#c0c1ff]">"Participant"</span> |{" "}
        <span className="text-[#c0c1ff]">"Driver"</span>;
        {"\n"}

        {"  "}complete_or_not:{" "}
        <span className="text-[#4cd7f6]">boolean</span>;
        {"\n"}

        {"}"} ;
        {"\n\n"}

        <span className="text-[#4cd7f6]">type</span>{" "}
        <span className="text-[#4edea3]">ActivityLocation</span> = {"{"}
        {"\n"}

        {"  "}id: <span className="text-[#4cd7f6]">number</span>;
        {"\n"}

        {"  "}activity_id:{" "}
        <span className="text-[#4cd7f6]">number</span>;
        {"\n"}

        {"  "}location: <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"  "}status: ActivityStatus;
        {"\n"}

        {"  "}login_time?:{" "}
        <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"  "}logout_time?:{" "}
        <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"}"} ;
        {"\n\n"}

        <span className="text-[#4cd7f6]">type</span>{" "}
        <span className="text-[#4edea3]">Activity</span> = {"{"}
        {"\n"}

        {"  "}id: <span className="text-[#4cd7f6]">number</span>;
        {"\n"}

        {"  "}name: <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"  "}description?:{" "}
        <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"  "}city: <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"  "}progress: ActivityStatus;
        {"\n"}

        {"  "}employees: EmployeeActivity[];
        {"\n"}

        {"  "}locations: ActivityLocation[];
        {"\n"}

        {"}"} ;
        {"\n\n"}

        {/* Request types */}
        <span className="text-[#4cd7f6]">type</span>{" "}
        <span className="text-[#4edea3]">LocationPayload</span> = {"{"}
        {"\n"}

        {"  "}activityId:{" "}
        <span className="text-[#4cd7f6]">number</span>;
        {"\n"}

        {"  "}location: <span className="text-[#4cd7f6]">string</span>;
        {"\n"}

        {"}"} ;
        {"\n\n"}

        {/* Axios instance */}
        <span className="text-[#4cd7f6]">const</span> api = axios.create({"{"}
        {"\n"}

        {"  "}baseURL:{" "}
        <span className="text-[#c0c1ff]">"/api"</span>,
        {"\n"}

        {"  "}withCredentials:{" "}
        <span className="text-[#4cd7f6]">true</span>,
        {"\n"}

        {"  "}headers: {"{"}
        {"\n"}

        {"    "}
        <span className="text-[#c0c1ff]">"Accept"</span>:{" "}
        <span className="text-[#c0c1ff]">
          "application/json"
        </span>,
        {"\n"}

        {"  "}
        {"}"},
        {"\n"}

        {"}"}); 
        {"\n\n"}

        {/* Response interceptor */}
        api.interceptors.response.use(
        {"\n"}

        {"  "}(response) =&gt; response,
        {"\n"}

        {"  "}(error) =&gt; {"{"}
        {"\n"}

        {"    "}
        <span className="text-[#4cd7f6]">if</span> (
        error.response?.status === 401
        ) {"{"}
        {"\n"}

        {"      "}window.location.href =
        <span className="text-[#c0c1ff]">"/login"</span>;
        {"\n"}

        {"    "}
        {"}"}
        {"\n"}

        {"    "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        Promise.reject(error);
        {"\n"}

        {"  "}
        {"}"}
        {"\n"}

        );
        {"\n\n"}

        {/* Fetch activity */}
        <span className="text-[#4cd7f6]">const</span>{" "}
        <span className="text-[#4edea3]">fetchActivity</span> ={" "}
        <span className="text-[#4cd7f6]">async</span> (
        activityId: <span className="text-[#4cd7f6]">number</span>
        ): <span className="text-[#4cd7f6]">Promise</span>
        &lt;Activity&gt; =&gt; {"{"}
        {"\n"}

        {"  "}
        <span className="text-[#4cd7f6]">const</span> {"{"} data {"}"} =
        <span className="text-[#4cd7f6]"> await</span> api.get
        &lt;Activity&gt;(
        <span className="text-[#c0c1ff]">
          `/activities/${"{"}activityId{"}"}`
        </span>
        );
        {"\n\n"}

        {"  "}
        <span className="text-[#4cd7f6]">return</span> data.data;
        {"\n"}

        {"}"} ;
        {"\n\n"}

        {/* Activity query */}
        <span className="text-[#4cd7f6]">export function</span>{" "}
        <span className="text-[#4edea3]">useActivity</span>(
        activityId: <span className="text-[#4cd7f6]">number</span>
        ) {"{"}
        {"\n"}

        {"  "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        useQuery({"{"}
        {"\n"}

        {"    "}queryKey: [
        <span className="text-[#c0c1ff]">"activity"</span>,
        activityId
        ],
        {"\n"}

        {"    "}queryFn: () =&gt; fetchActivity(activityId),
        {"\n"}

        {"    "}enabled: Boolean(activityId),
        {"\n"}

        {"    "}staleTime: 30_000,
        {"\n"}

        {"    "}retry: 2,
        {"\n"}

        {"  "}
        {"}"});
        {"\n"}

        {"}"} ;
        {"\n\n"}

        {/* Add location API */}
        <span className="text-[#4cd7f6]">const</span>{" "}
        <span className="text-[#4edea3]">addActivityLocation</span> =
        <span className="text-[#4cd7f6]"> async</span> (
        payload: LocationPayload
        ) =&gt; {"{"}
        {"\n"}

        {"  "}
        <span className="text-[#4cd7f6]">const</span> {"{"} data {"}"} =
        <span className="text-[#4cd7f6]"> await</span> api.post(
        <span className="text-[#c0c1ff]">
          "/activities/location"
        </span>
        ,
        {"\n"}

        {"    "}payload
        {"\n"}

        {"  "});
        {"\n\n"}

        {"  "}
        <span className="text-[#4cd7f6]">return</span> data.data;
        {"\n"}

        {"}"} ;
        {"\n\n"}

        {/* Mutation */}
        <span className="text-[#4cd7f6]">export function</span>{" "}
        <span className="text-[#4edea3]">
          useAddActivityLocation
        </span>
        () {"{"}
        {"\n"}

        {"  "}
        <span className="text-[#4cd7f6]">const</span>{" "}
        queryClient = useQueryClient();
        {"\n\n"}

        {"  "}
        <span className="text-[#4cd7f6]">return</span>{" "}
        useMutation({"{"}
        {"\n"}

        {"    "}mutationFn: addActivityLocation,
        {"\n\n"}

        {"    "}onSuccess: (_data, variables) =&gt; {"{"}
        {"\n"}

        {"      "}queryClient.invalidateQueries(
        {"{"}
        {"\n"}

        {"        "}queryKey: [
        <span className="text-[#c0c1ff]">"activity"</span>,
        variables.activityId
        ],
        {"\n"}

        {"      "}
        {"}"}
        );
        {"\n"}

        {"    "}
        {"}"}
        {"\n"}

        {"  "});
        {"\n"}

        {"}"} ;
      </code>
    </pre>
  );
}

function Contact() {
  const [loading,setLoading] = useState(false);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "a3a9b8d9-6a2d-428a-9202-b8b45ea1e9b0");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        toast.error("Something went wrong.");
      }
    } finally{
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0a0e17] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-xs text-[#4edea3]">
                05 //
              </span>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#4edea3]">
                Initiate Contact
              </span>
            </div>

            <h2 className="font-[Space_Grotesk] text-3xl font-bold text-[#dfe2ef]">
              Let's Build Something Useful.
            </h2>

            <p className="mt-4 leading-relaxed text-[#86948a]">
              Available for Full Stack Developer, Frontend Developer,
              Backend Developer and React Native opportunities in Dubai,
              UAE, Global and remote environments.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <ContactLink
                icon="alternate_email"
                label="Email"
                value="tinthtooko.official18@gmail.com"
                href="mailto:tinthtooko.official18@gmail.com"
              />

              <ContactLink
                icon="share"
                label="LinkedIn"
                value="linkedin.com/in/tint-htoo-ko"
                href="https://www.linkedin.com/in/tint-htoo-ko-0a18462a4/"
              />

              <ContactLink
                icon="code"
                label="GitHub"
                value="github.com/TintHtooKo"
                href="https://github.com/TintHtooKo"
              />

              <ContactLink
                icon="phone"
                label="Phone/WhatsApp"
                value="+971 50 643 5276"
                href="https://wa.me/971506435276"
              />
            </div>

           
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#1c1f29] p-6 shadow-xl md:p-8 ">
              <h3 className="font-[Space_Grotesk] text-xl font-bold text-[#dfe2ef]">
                Send a Message
              </h3>

              <p className="mb-6 mt-2 text-sm text-[#86948a]">
                Tell me about the role, team, and technical challenges you're looking to solve.
              </p>

              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="rounded-lg bg-[#0a0e17] px-4 py-3 text-sm text-[#dfe2ef] outline-none ring-1 ring-transparent transition focus:ring-[#4edea3]"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="rounded-lg bg-[#0a0e17] px-4 py-3 text-sm text-[#dfe2ef] outline-none ring-1 ring-transparent transition focus:ring-[#4cd7f6]"
                  />
                </div>
                <input
                    required
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="rounded-lg bg-[#0a0e17] px-4 py-3 text-sm text-[#dfe2ef] outline-none ring-1 ring-transparent transition focus:ring-[#4cd7f6]"
                  />
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell me about the role or project..."
                  className="resize-none rounded-lg bg-[#0a0e17] px-4 py-3 text-sm text-[#dfe2ef] outline-none ring-1 ring-transparent transition focus:ring-[#4edea3]"
                />

                <div className="flex flex-col justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#86948a]">
                    <Icon className="text-[16px] text-[#4edea3]">
                      verified_user
                    </Icon>
                    Secure contact form
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-linear-to-r from-[#10b981] via-[#4edea3] to-[#4cd7f6] px-8 py-3.5 font-[Space_Grotesk] font-semibold text-[#002113] transition hover:scale-[1.02]"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-6 flex flex-col gap-3 rounded-xl bg-[#1c1f29] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <Icon className="text-[#4edea3]">public</Icon>

                  <div className="min-w-0">
                    <span className="block font-[Space_Grotesk] font-semibold text-[#dfe2ef]">
                      Dubai, UAE
                    </span>

                    <span className="block font-mono text-[10px] text-[#86948a]">
                      Open to UAE, Global & Remote Opportunities
                    </span>
                  </div>
                </div>

                <span className="w-fit rounded bg-[#4edea3]/10 px-2 py-1 font-mono text-[10px] font-bold text-[#4edea3]">
                  AVAILABLE
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex min-w-0 items-center gap-3 rounded-xl bg-[#1c1f29] p-3.5 text-[#dfe2ef] transition hover:bg-[#262a34]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#4edea3]/10 text-[#4edea3]">
        <Icon className="text-[20px]">{icon}</Icon>
      </div>

      <div className="min-w-0">
        <span className="block font-mono text-[10px] text-[#86948a]">
          {label}
        </span>

        <span className="block wrap-break-words text-sm font-medium">{value}</span>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0e17] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-white/5 pb-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-[Space_Grotesk] font-semibold text-[#dfe2ef]">
                Tint Htoo Ko
              </span>

              <span className="font-mono text-xs text-[#86948a]">
                Full Stack Developer
              </span>
            </div>

            <p className="mt-1 max-w-md text-sm text-[#86948a]">
              Building practical, scalable and maintainable web and mobile
              applications.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#181b25] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4edea3]" />

            <span className="font-mono text-[10px] text-[#86948a]">
              Available for opportunities
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#86948a] sm:flex-row">
          <div className="flex flex-wrap gap-5">
            <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white cursor-pointer">
              Overview
            </div>

            <a href="#tech-stack" className="hover:text-white">
              Tech Stack
            </a>

            <a href="#experience" className="hover:text-white">
              Experience
            </a>

            

            <a href="#architecture" className="hover:text-white">
              Architecture
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <span>© {new Date().getFullYear()} Tint Htoo Ko</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f131c] font-sans text-[#dfe2ef] antialiased selection:bg-[#10b981] selection:text-[#002113]">
      <Header />

      <main className="pt-20">
        <Hero />
        <TechStack />
        <Experience />
        <Architecture />
        <CodeInspection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
