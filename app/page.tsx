"use client";
import {useEffect,useState} from "react";
import {ArrowUpRight,BriefcaseBusiness,Code2,Database,Download,Github,Layers3,Linkedin,Mail,MapPin,Menu,Phone,ServerCog,Sparkles,X} from "lucide-react";

const BASE_PATH=process.env.NODE_ENV==="production"?"/AnwarHossain919":"";
const services=[
 {icon:<Layers3/>,title:"Odoo Module Development",text:"Custom Odoo modules designed around practical business requirements and scalable workflows."},
 {icon:<ServerCog/>,title:"ERP Customization",text:"Forms, reports, security, approvals and process automation tailored for growing businesses."},
 {icon:<Code2/>,title:"API & Backend Integration",text:"Reliable Python APIs, payment gateway integrations and connections with third-party services."}
];
const experiences=[
 {date:"Jan 2026 — Present",role:"Senior Executive | Python & Odoo Developer",company:"Zencore Solutions Ltd.",text:"Developing custom Odoo modules, automating business workflows and delivering ERP integrations with Python and PostgreSQL."},
 {date:"Sep 2025 — Jan 2026",role:"Odoo Developer",company:"Zencore Solutions Ltd.",text:"Customized Odoo ERP applications and implemented client-focused functional and technical requirements."},
 {date:"Dec 2024 — Aug 2025",role:"Python Developer",company:"AppExit",text:"Built backend features and contributed to maintainable Python-based web applications."}
];
const skills=["Odoo 18/19","Python","PostgreSQL","Django","REST API","JavaScript","Git & GitHub","Linux"];
const projects=[
 {eyebrow:"ERP Solution",title:"Micro Finance Management System",text:"Loans, installments, collections, accounting and operational workflows in one custom Odoo solution.",image:`${BASE_PATH}/project-microfinance.png`,tone:"gold"},
 {eyebrow:"Business Automation",title:"Asset Management System",text:"A complete asset lifecycle solution covering tracking, assignment, maintenance, reporting and approvals.",image:`${BASE_PATH}/project-asset.png`,tone:"purple"},
 {eyebrow:"Trade Operations",title:"Export LC Management System",text:"An automated ERP workflow for export LC documentation, realization, discounting and financial tracking.",image:`${BASE_PATH}/project-lc.png`,tone:"blue"}
];

function Reveal({children,className=""}:{children:React.ReactNode,className?:string}){
 const [visible,setVisible]=useState(false);const [node,setNode]=useState<HTMLDivElement|null>(null);
 useEffect(()=>{if(!node)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect()}},{threshold:.12});observer.observe(node);return()=>observer.disconnect()},[node]);
 return <div ref={setNode} className={`reveal ${visible?"is-visible":""} ${className}`}>{children}</div>;
}
function SectionHead({label,title,text}:{label:string,title:string,text?:string}){return <div className="section-head"><span className="eyebrow"><Sparkles/>{label}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}

export default function Home(){
 const [menuOpen,setMenuOpen]=useState(false);const [lightMode,setLightMode]=useState(false);
 useEffect(()=>{setLightMode(localStorage.getItem("portfolio-theme")==="light")},[]);
 const toggleTheme=()=>setLightMode(current=>{const next=!current;localStorage.setItem("portfolio-theme",next?"light":"dark");return next});
 const closeMenu=()=>setMenuOpen(false);
 return <main className={lightMode?"site light-mode":"site"}>
  <header className="nav-wrap"><nav className="nav shell"><a className="brand" href="#home" onClick={closeMenu}><i></i><b>Anwar</b></a><div className={`nav-links ${menuOpen?"open":""}`}>{["Home","About","Services","Experience","Skills","Projects","Contact"].map(item=><a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</div><div className="nav-actions"><button className="theme-switch" type="button" onClick={toggleTheme}>{lightMode?"Dark":"Light"}</button><a className="chat" href="#contact">Let&apos;s Chat</a><button className="menu" type="button" aria-label="Open menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div></nav></header>

  <section id="home" className="hero"><div className="hero-left"><div className="hero-content"><p className="hello">Hi! I&apos;m Anwar Hossain</p><h1>Odoo & Python<br/><span>Backend Developer</span></h1><p className="hero-copy">I build scalable ERP solutions, custom Odoo modules and efficient backend integrations that turn complex business processes into simple digital workflows.</p><div className="hero-actions"><a className="btn btn-primary" href="#contact"><BriefcaseBusiness/>Hire Me</a><a className="btn btn-outline" href={`${BASE_PATH}/Anwar-Hossain-CV.pdf`} target="_blank"><Download/>Download CV</a></div><div className="hero-stats"><div><b>Odoo</b><span>ERP Development</span></div><div><b>Python</b><span>Backend Solutions</span></div><div><b>Dhaka</b><span>Bangladesh</span></div></div></div></div><div className="hero-visual"><div className="name-watermark">ANWAR<br/>HOSSAIN</div><span className="shape shape-one"></span><span className="shape shape-two"></span><img src={`${BASE_PATH}/anwar.jpeg`} alt="Anwar Hossain"/></div></section>

  <section id="about" className="section about-section"><div className="shell"><Reveal><span className="eyebrow"><Sparkles/>ABOUT ME</span><h2 className="about-title">Hi! I&apos;m Anwar Hossain</h2><p className="about-copy">I&apos;m an Odoo Developer and Python Backend Developer focused on ERP customization, module development, workflow automation and API integration. I enjoy converting real business challenges into clean, dependable and scalable solutions.</p><div className="about-meta"><div><span>Email</span><a href="mailto:anwarjafrin@gmail.com">anwarjafrin@gmail.com</a></div><div><span>Phone</span><a href="tel:+8801743672990">+880 1743 672990</a></div><div><span>Location</span><b>Dhaka, Bangladesh</b></div><div><span>Focus</span><b>Odoo ERP & Backend</b></div><div className="about-social"><span>Social Media</span><p><a href="https://github.com/AnwarHossain909" target="_blank"><Github/></a><a href="https://www.linkedin.com/" target="_blank"><Linkedin/></a></p></div></div></Reveal></div></section>

  <section id="services" className="section alternate"><div className="shell"><Reveal><SectionHead label="SERVICES" title="Services I Offer" text="Purpose-built ERP and backend solutions that help teams work faster, smarter and with confidence."/><div className="service-grid">{services.map((service,index)=><article className="service-card" key={service.title}><span>{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><i>0{index+1}</i></article>)}</div></Reveal></div></section>

  <section id="experience" className="section"><div className="shell"><Reveal><SectionHead label="LIFE TIME" title="Professional Experience" text="A growing journey through Python development, Odoo customization and business process automation."/><div className="timeline">{experiences.map((item,index)=><article className={index%2?"timeline-item right":"timeline-item left"} key={item.date+item.role}><span className="timeline-dot"></span><div className="timeline-card"><small>{item.date}</small><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p></div></article>)}</div></Reveal></div></section>

  <section id="skills" className="section alternate"><div className="shell"><Reveal><SectionHead label="SKILLS" title="Technologies & Expertise" text="The technical toolkit I use to build dependable ERP systems and backend applications."/><div className="skill-grid">{skills.map((skill,index)=><div className="skill-orbit" key={skill}><div><Code2/><b>{skill}</b><span>{String(index+1).padStart(2,"0")}</span></div></div>)}</div></Reveal></div></section>

  <section id="projects" className="section"><div className="shell"><Reveal><SectionHead label="SELECTED WORK" title="Showcasing My Odoo Projects" text="Business-focused solutions built to automate operations, improve control and create measurable value."/><div className="project-list">{projects.map((project,index)=><article className={`project-row ${index%2?"reverse":""}`} key={project.title}><div className="project-copy"><span className={project.tone}>{project.eyebrow}</span><h3>{project.title}</h3><p>{project.text}</p><div className="project-tools"><Code2/><Database/><ServerCog/></div><a href="#contact">View Project<ArrowUpRight/></a></div><div className={`project-image ${project.tone}`}><div className="project-placeholder"><b>ODOO</b><span>{project.title}</span></div><img src={project.image} alt={project.title} onError={event=>{event.currentTarget.style.display="none"}}/></div></article>)}</div></Reveal></div></section>

  <section id="contact" className="contact-section"><div className="shell contact-top"><Reveal><h2>Have a project in mind?<br/>Let&apos;s get to work.</h2><a className="btn btn-primary" href="mailto:anwarjafrin@gmail.com">Say Hello<ArrowUpRight/></a></Reveal><div className="contact-art"><Code2/><span></span><i></i></div></div><div className="contact-wave"></div><div className="contact-details"><div className="shell contact-grid"><div><Phone/><span>Available for professional discussion.</span><a href="tel:+8801743672990">+880 1743 672990</a></div><div><Mail/><span>Let&apos;s discuss your next solution.</span><a href="mailto:anwarjafrin@gmail.com">anwarjafrin@gmail.com</a></div><div><MapPin/><span>Based in Bangladesh.</span><b>Dhaka, Bangladesh</b></div></div><footer className="shell"><span>© 2026 Anwar Hossain. All rights reserved.</span><p><a href="https://github.com/AnwarHossain909" target="_blank"><Github/></a><a href="https://www.linkedin.com/" target="_blank"><Linkedin/></a></p></footer></div></section>
 </main>
}
