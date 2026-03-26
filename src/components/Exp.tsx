
export default function Exp() {
    const experiences = [
        {
            company: "Ramzin Group",
            role: "Senior Full Stack Developer (On Site)",
            period: "Nov 2024 – April 2026",
            location: "Dubai, UAE",
            description: "Spearheading the digital transformation for a diversified conglomerate of 12+ companies. Architected a centralized HR management system that boosted data tracking efficiency by 60%. Leading the development of custom CRMs and AI-driven ambassador systems using Groq API, while establishing robust unit testing workflows and secure HTTP-only authentication protocols.",
            tech: ["React", "Laravel", "Typescript", "MYSQL", "Bootstrap", "Tailwind"],
        },
        {
            company: "Myan Pro Solutions",
            role: "WordPress Developer (Remote)",
            period: "July 2022 – June 2024",
            location: "India",
            description: "Managed and maintained high-traffic WordPress ecosystems using Elementor. Specialized in ensuring project quality through proactive server monitoring, Hostinger webmail customization, and implementing advanced security compliance. Collaborated with clients to plan complex website architectures and custom front-end functions while managing back-end database integrations.",
            tech: ["WordPress", "Elementor", "PHP", "MySQL", "Hostinger"],
        },
        {
            company: "Idea Tomorrow",
            role: "Junior Web Developer (On Site)",
            period: "Sep 2020 – May 2022",
            location: "Yangon, Myanmar",
            description: "Developed MERN stack applications with secure JWT authentication and responsive UIs. Focused on creating RESTful APIs, managing MongoDB databases, and conducting bug fixes through user input analysis. Collaborated closely with senior developers to design new features and maintain high code quality using Git/GitHub version control.",
            tech: ["React.js", "Node.js", "MongoDB", "Express", "JavaScript"],
        },
        {
            company: "Fortune International Limited",
            role: "Web Developer Intern (On Site)",
            period: "Jan 2020 – Aug 2020",
            location: "Yangon, Myanmar",
            description: "Gained hands-on experience developing backend APIs with Django and integrating frontend elements. Optimized database queries and conducted unit testing to ensure software reliability. Assisted in troubleshooting web-based systems and managed regular content updates to ensure site accuracy and performance.",
            tech: ["Django", "Python", "PostgreSQL", "Unit Testing", "Bootstrap"],
        },
        ];
    return (
        <section id="experience" className="lg:px-40 md:px-12.5 px-5 py-24 bg-[#000216] ">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
                <div className="w-20 h-1.5 bg-[#0788FF] rounded-full"></div>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                <div data-aos='fade-up' data-aos-delay={index * 100} key={index} className="relative pl-8 md:pl-12">
                    
                    {/* Timeline Dot */}
                    <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-[#0788FF] border-4 border-[#000216] z-10"></div>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-[#0788FF] font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right md:text-right text-sm text-slate-500 font-mono">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                    </div>
                    </div>

                    <p className="mt-4 text-slate-400 max-w-3xl leading-relaxed">
                    {exp.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 rounded-md">
                        {t}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
