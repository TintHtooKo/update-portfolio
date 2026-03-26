import React, { useState, type JSX } from 'react';
import Group from '../assets/img/group.png'
import Tax from '../assets/img/tax.png'
import Contrac from '../assets/img/contrac.png'
import Travel from '../assets/img/travel.png'
import Rbio from '../assets/img/rbio.png'
import Abc from '../assets/img/abc.png'
import Neil from '../assets/img/neil.png'
import Kka from '../assets/img/kka.png'
import Safe from '../assets/img/safe.png'
import Real from '../assets/img/real.png'
import Limo from '../assets/img/limo.png'
import Boat from '../assets/img/boat.png'
import Hello from '../assets/img/hello.png'
import Mj from '../assets/img/mj.png'
import Hr from '../assets/img/hr.png'
import Driver from '../assets/img/driver.png'
import Video from '../assets/img/video2.png'
import Cafe from '../assets/img/cafe.png'

interface Project {
  name: string;
  image: string;
  url: string;
  isPrivate: boolean;
  client?: string;
}

const projects: Project[] = [
    {
        name: "Ramzin Group",
        image: Group,
        url: "https://ramzingroup.com",
        isPrivate: false,
        client: "Ramzin Group"
    },
    {
        name: "Ramzin Luxury Boat Building",
        image: Boat,
        url: "https://www.ramzinboatsfactory.com",
        isPrivate: false,
    },
    {
        name: "Ramzin Real Estate L.L.C",
        image: Real,
        url: "https://www.ramzinrealestate.com",
        isPrivate: false,
    },
    {
        name: "Ramzin Limousine Transport",
        image: Limo,
        url: "https://www.ramzinlimo.com",
        isPrivate: false,
    },
    {
        name: "Ramzin Cafe",
        image: Cafe,
        url: "https://www.ramzincafe.com",
        isPrivate: false,
    },
    {
        name: "Ramzin Tax Consultant L.L.C",
        image: Tax,
        url: "https://ramzintax.com",
        isPrivate: false,
        client: "Ramzin Group"
    },
    {
        name: "Ramzin Building Contracting L.L.C",
        image: Contrac,
        url: "https://ramzincontractor.com",
        isPrivate: false,
        client: "Ramzin Group"
    },
    {
        name: "HR Management System",
        image: Hr,
        url: "#",
        isPrivate: true,
        client: "Ramzin Group",
    },
    {
        name: "Corporate Driver Booking System",
        image: Driver,
        url: "#", 
        isPrivate: true,
        client: "Ramzin Group",
    },
    {
        name: "Video Scheduling System",
        image: Video,
        url: "#",
        isPrivate: true,
        client: "Ramzin Group",
    },
    {
        name: "Hello Ella Admission Center",
        image: Hello,
        url: "https://helloellaadm.com",
        isPrivate: false,
    },
    {
        name: "MJ Business Group",
        image: Mj,
        url: "https://mjbusinesssetup.com",
        isPrivate: false,
    },
    {
        name: "ABC International",
        image: Abc,
        url: "https://abcinternational.global",
        isPrivate: false,
    },
    {
        name: "Neil Ventures",
        image: Neil,
        url: "https://neilventures.com",
        isPrivate: false,
    },
    {
        name: "RBIO",
        image: Rbio,
        url: "https://rbiomeds.com",
        isPrivate: false,
    },
    {
        name: "Reflesia Travel",
        image: Travel,
        url: "https://reflesiatravel.com",
        isPrivate: false,
    },
    {
        name: "KKA Groups",
        image: Kka,
        url: "https://kkagroups.com",
        isPrivate: false,
    },
    {
        name: "Safe Harbour Myanmar",
        image: Safe,
        url: "https://safeharbourmyanmar.com",
        isPrivate: false,
    },
  
  // Add more projects here...
];

export default function ProjectGallery(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project): void => {
    if (project.isPrivate) {
      e.preventDefault();
      setActiveProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

  return (
    <section className="lg:px-40 md:px-12.5 px-5 py-24 ">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">My Website Projects</h2>
        <div className="w-16 h-1 bg-[#0788FF]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a 
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
            href={project.url}
            onClick={(e) => handleProjectClick(e, project)}
            target={project.isPrivate ? "_self" : "_blank"}
            rel="noreferrer"
            className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all hover:border-[#0788FF]/50"
          >
            {/* Image Layer */}
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30" 
            />
            
            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
              <h3 className="text-white font-bold text-lg text-center px-4">{project.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#0788FF]">
                {project.isPrivate ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    Internal Access Only
                  </>
                ) : (
                  "View Live Site →"
                )}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Private Access Modal */}
      {isModalOpen && activeProject && (
        <>
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-100 transition-opacity" 
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-110 px-6 pointer-events-none">
            <div className="bg-[#000428] border border-slate-700 p-8 rounded-3xl max-w-md w-full shadow-[0_0_50px_rgba(7,136,255,0.15)] pointer-events-auto text-center relative">
              
              <div className="w-20 h-20 bg-[#0788FF]/10 text-[#0788FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Enterprise Privacy</h3>
              <p className="text-slate-400 mb-2 leading-relaxed">
                The <span className="text-white font-medium">{activeProject.name}</span> is a proprietary application built for <span className="text-[#0788FF]">{activeProject?.client}</span>.
              </p>
              <p className="text-sm text-slate-500 mb-8 italic">
                "Live access is restricted to internal corporate networks to ensure data security and compliance."
              </p>

              <button 
                onClick={closeModal}
                className="w-full py-4 bg-[#0788FF] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}