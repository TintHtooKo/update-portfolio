import { Typewriter } from "react-simple-typewriter";
import Linkedin from '../assets/svg/linkedin.svg'
import Git from '../assets/svg/github.svg'
import ReactIcon from '../assets/svg/react.svg'
import Js from '../assets/svg/js.svg'
import PHP from '../assets/svg/php.svg'
import Laravel from '../assets/svg/laravel.svg'
import Bootstrap from '../assets/svg/bootstrap.svg'
import Tailwind from '../assets/svg/tailwind.svg'
import Wordpress from '../assets/svg/wordpress.svg'
import Ts from '../assets/svg/ts.svg'
import Python from '../assets/svg/python.svg'
import Django from '../assets/svg/django.svg'
import Mysql from '../assets/svg/mysql.svg'
import Mongo from '../assets/svg/mongo.svg'
import Node from '../assets/svg/nodejs.svg'
import Express from '../assets/svg/express.png'
import Next from '../assets/svg/next.png'
import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  label: string;
  skills: string[];
}

const techCategories: SkillCategory[] = [
  { label: "Frontend", skills: ["React", "Next.js (Exploring)", "TypeScript", "Tailwind","Bootstrap"] },
  { label: "Backend", skills: ["Laravel", "Node.js", "Django" ,"MySQL", "MongoDB"] },
  { label: "Tools & CMS", skills: ["Git", "Github", "WordPress", "Figma"] }
];

export default function Home() {
    const [show,setShow] = useState(false)
    const toggleShow = ()=> setShow(prev => !prev)
    const skills = [
        { name: "Javascript", icon: Js },
        { name: "Typescript", icon: Ts },
        { name: "React", icon: ReactIcon },
        { name: "PHP", icon: PHP },
        { name: "Laravel", icon: Laravel },
        { name: "Wordpress", icon: Wordpress },
        { name: "Nodejs", icon: Node },
        { name: "ExpressJs", icon: Express },
        { name: "Python", icon: Python },
        { name: "Django", icon: Django },
        { name: "Bootstrap", icon: Bootstrap },
        { name: "Tailwind", icon: Tailwind },
        { name: "MYSQL", icon: Mysql },
        { name: "MongoDB", icon: Mongo },
        { name: "NextJs", icon: Next },
    ];
    const doubledSkills = [...skills,...skills]
    const modalRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            toggleShow(); 
            }
        }
    
        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show]);

    return (
        <div className=" md:h-[85vh] flex flex-col items-center justify-center lg:px-40 md:px-12.5 px-5 py-2 mt-5">
            <div className=" flex lg:flex-row gap-3 flex-col items-center justify-between">
                <div data-aos="fade-up" data-aos-delay="100" className=" space-y-3 w-full">
                    <p className="bg-[#063560] text-white px-2 py-1 rounded-sm w-fit md:mx-0">
                    Tint Htoo Ko
                    </p>
                    <h1 className="md:text-4xl text-3xl font-bold">
                    HELLO! I'M TIMMY.
                    </h1>
                    <h1 className=" md:text-3xl text-2xl">
                        I am{' '}
                        <span style={{ color: '#0788FF' }}>
                            <Typewriter
                            words={['Full Stack Developer.','Web Developer.',  'WordPress Developer.']}
                            loop={true}
                            cursor
                            typeSpeed={120}
                            deleteSpeed={150}
                            delaySpeed={400}
                            />
                        </span>
                    </h1>
                    
                    <div className=" flex items-center gap-3">
                        <button onClick={toggleShow} className=" bg-[#026acb] text-white px-4 py-1 rounded-sm cursor-pointer">
                            Hire Me
                        </button>
                    </div>
                    <div className=" flex items-center gap-3" >
                    <a href={'https://www.linkedin.com/in/tint-htoo-ko-0a18462a4/'} target="_blank" rel="nonreferrer"><img src={Linkedin} className=' w-9 hover:-translate-y-2 transition-transform duration-300' alt="Linkedin" /></a>
                    <a href={'https://github.com/TintHtooKo'} target="_blank" rel="nonreferrer"><img src={Git} className=' w-15 hover:-translate-y-2 transition-transform duration-300' alt="Github" /></a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="text-xl">
                    <p>To become a professional programmer with an opportunity to apply my skills and knowledge in programming technology and also achieve a responsible and challenging career.</p>
                    <div className="pt-4 space-y-4">
                        {techCategories.map((cat, idx) => (
                        <div key={idx} className="flex flex-wrap items-center gap-2">
                            <span className="text-[12px] uppercase tracking-widest text-slate-300 font-bold min-w-20">
                            {cat.label}:
                            </span>
                            <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill) => (
                                <span 
                                key={skill} 
                                className="px-3 py-1 cursor-pointer text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded-full hover:border-[#0788FF] transition-colors"
                                >
                                {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="scroll-container md:py-4 py-10">
                <div className="scroll-content">
                    {doubledSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 min-w-fit">
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                        <span className="text-gray-400 text-xl font-medium">{skill.name}</span>
                    </div>
                    ))}
                </div>
            </div>
            {show && (
                <>
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity" onClick={toggleShow}></div>
                    
                    {/* Modal Container */}
                    <div className="fixed inset-0 flex justify-center items-center z-50 px-4 pointer-events-none">
                    <div 
                        ref={modalRef} 
                        className="bg-[#000428] border border-slate-800 rounded-2xl p-8 md:w-112.5 w-full shadow-2xl relative pointer-events-auto transform transition-all"
                    >
                        {/* Close Button */}
                        <button onClick={toggleShow} className="absolute top-4 right-4 cursor-pointer text-slate-400 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <h3 className="text-2xl font-bold text-white mb-2">Let's Work Together</h3>
                        <p className="text-slate-400 mb-8">Choose your preferred way to connect. I'll get back to you as soon as possible.</p>

                        <div className="space-y-4">
                        {/* Email Option */}
                        <a 
                            href="mailto:tinthtooko.official18@gmail.com" 
                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#0788FF] hover:bg-slate-800/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-[#0788FF] group-hover:bg-[#0788FF] group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                            <p className="text-white font-semibold">Send an Email</p>
                            <p className="text-xs text-slate-500">Professional inquiries & project briefs</p>
                            </div>
                        </a>

                        {/* WhatsApp Option */}
                        <a 
                            href="https://wa.me/+971506435276" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500 hover:bg-slate-800/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </div>
                            <div>
                            <p className="text-white font-semibold">Message on WhatsApp</p>
                            <p className="text-xs text-slate-500">Quick chat or instant messaging</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </>
            )}
        </div>
    )
}
