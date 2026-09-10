 "use client";
import {useEffect,useState} from "react";
import {ArrowRight,ArrowUpRight,Download,Github,Linkedin,Mail,MapPin,Phone,Code2,Database,Server,Users,GraduationCap,Lightbulb,TrendingUp,Menu,X} from "lucide-react";

const BASE_PATH="/AnwarHossain919";
const projects=[
 {title:"Micro Finance Management System",desc:"Custom Odoo solution for loans, installments, collections and operational workflows.",tags:["Odoo 18","Python","PostgreSQL"],img:`${BASE_PATH}/project-microfinance.png`},
 {title:"Asset Management System",desc:"Business-focused asset lifecycle management with tracking, assignment, reporting and workflows.",tags:["Odoo 18","Python","PostgreSQL"],img:`${BASE_PATH}/project-asset.png`},
 {title:"Export LC Management System",desc:"ERP workflow for export LC operations, documentation, tracking and automation.",tags:["Odoo 18","Python","PostgreSQL"],img:`${BASE_PATH}/project-lc.png`}
];
const experiences=[
 {date:"Jan 2026 — Present",role:"Senior Executive | Python & Odoo Developer",company:"Zencore Solutions Ltd.",points:["Develop and customize Odoo modules for business operations.","Implement business workflows, automation and ERP integrations.","Work with Python, PostgreSQL and REST APIs."]},
 {date:"Sep 2025 — Jan 2026",role:"Odoo Developer",company:"Zencore Solutions Ltd.",points:["Customized Odoo ERP modules and implemented client-specific requirements."]},
 {date:"Dec 2024 — Aug 2025",role:"Python Developer",company:"AppExit",points:["Built backend features and worked with Python-based web applications."]}
];
const skills=["Python","Odoo","Django","PostgreSQL","MySQL","Git & GitHub","Linux","VS Code"];

function Title({label,title=""}:{label:string,title?:string}){return <div className="section-title"><i></i><div><p>{label}</p>{title&&<h2>{title}</h2>}</div></div>}

export default function Home(){
 const [open,setOpen]=useState(false);
 const [lightMode,setLightMode]=useState(false);
 useEffect(()=>{setLightMode(localStorage.getItem("portfolio-theme")==="light")},[]);
 const toggleTheme=()=>setLightMode(current=>{
  const next=!current;
  localStorage.setItem("portfolio-theme",next?"light":"dark");
  return next;
 });
 return <main className={lightMode?"light-mode":""}>
  <header className="nav-wrap"><nav className="nav container">
   <a className="brand" href="#home"><b>AH</b><span>Anwar Hossain</span></a>
   <div className={"nav-links "+(open?"open":"")}>{["Home","About","Experience","Projects","Skills","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}</div>
   <div className="nav-actions"><button type="button" className="theme" onClick={toggleTheme} aria-label="Change color mode">{lightMode?"☀ Light":"☾ Dark"}</button><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </nav></header>

  <section id="home" className="hero section"><div className="container hero-grid">
   <div className="hero-copy"><p className="hello">Hello, I'm</p><h1>Anwar <span>Hossain</span></h1>
    <h3>Odoo Developer <em>|</em> Python Backend Developer</h3>
    <p className="hero-text">I build scalable ERP systems, develop custom Odoo modules, create efficient backend APIs, and automate business processes with Python and modern technologies.</p>
    <div className="buttons"><a className="btn primary" href="#projects">View Projects <ArrowRight/></a><a className="btn secondary" href={`${BASE_PATH}/Anwar-Hossain-CV.pdf`} target="_blank"><Download/> Download CV</a></div>
    <div className="tech"><span><Code2/>Python</span><span><Server/>Odoo</span><span><Code2/>Django</span><span><Database/>PostgreSQL</span><span><Code2/>REST API</span></div>
   </div>
   <div className="hero-photo"><div className="glow"></div><div className="photo"><img src={`${BASE_PATH}/anwar.jpeg`} alt="Anwar Hossain"/></div><div className="scribble">Code<br/>Build<br/>Automate</div></div>
  </div></section>

  <section id="about" className="section divider"><div className="container"><Title label="About Me" title="Turning Ideas into Scalable Solutions"/>
   <div className="about-grid"><div><p className="about-text">I am an Odoo Developer and Python Backend Developer with hands-on experience in Odoo ERP customization, module development, business workflow implementation, and building REST APIs. I enjoy solving real-world problems with clean code and efficient solutions.</p>
    <div className="traits"><div><Lightbulb/>Problem Solver</div><div><GraduationCap/>Quick Learner</div><div><Users/>Team Player</div><div><TrendingUp/>Always Improving</div></div>
   </div>
   <div className="contact-card">
    <Info icon={<Users/>} label="Name" value="Anwar Hossain"/><Info icon={<Mail/>} label="Email" value="anwarjafrin@gmail.com"/><Info icon={<Phone/>} label="Phone" value="+880 1743 672990"/><Info icon={<MapPin/>} label="Location" value="Dhaka, Bangladesh"/>
    <div className="socials"><a href="https://github.com/AnwarHossain909" target="_blank"><Github/></a><a href="https://www.linkedin.com/" target="_blank"><Linkedin/></a><a href="mailto:anwarjafrin@gmail.com"><Mail/></a><a className="mini" href={`${BASE_PATH}/Anwar-Hossain-CV.pdf`} target="_blank"><Download/> View CV</a></div>
   </div></div>
  </div></section>

  <section id="experience" className="section divider"><div className="container"><Title label="Experience"/>
   <div className="experience-grid"><div className="timeline">{experiences.map(e=><article className="exp" key={e.date+e.role}><span className="dot"></span><small>{e.date}</small><h3>{e.role}</h3><h4>{e.company}</h4><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div>
    <div className="goal"><small>MY GOAL</small><h3>Build impactful<br/>solutions with Odoo<br/>and Python.</h3><Code2 className="goal-icon"/></div>
   </div>
  </div></section>

  <section id="projects" className="section divider"><div className="container"><Title label="Featured Projects"/>
   <div className="projects">{projects.map(p=><article className="project" key={p.title}><div className="project-img"><img src={p.img} alt=""/><b>ODOO</b></div><div className="project-body"><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact" className="arrow"><ArrowUpRight/></a></div></article>)}</div>
  </div></section>

  <section id="skills" className="section divider"><div className="container"><Title label="My Skills"/><div className="skills">{skills.map(s=><span key={s}><Code2/>{s}</span>)}</div></div></section>

  <section id="contact" className="section divider"><div className="container contact-grid"><div><Title label="Let's Connect"/><p className="lead">Feel free to reach out for collaboration, opportunities, or just to say hello!</p><div className="contact-list"><a href="mailto:anwarjafrin@gmail.com"><Mail/>anwarjafrin@gmail.com</a><a href="tel:+8801743672990"><Phone/>+880 1743 672990</a><span><MapPin/>Dhaka, Bangladesh</span></div></div>
   <form className="form" action="mailto:anwarjafrin@gmail.com" method="post" encType="text/plain"><div className="form-row"><input name="name" placeholder="Your Name"/><input name="email" type="email" placeholder="Your Email"/></div><textarea name="message" placeholder="Message" rows={5}/><button className="btn primary">Send Message <ArrowRight/></button></form>
  </div></section>
  <footer><div className="container footer"><span>© 2026 Anwar Hossain. All rights reserved.</span><div><a href="https://github.com/AnwarHossain909"><Github/></a><a href="https://www.linkedin.com/"><Linkedin/></a><a href="mailto:anwarjafrin@gmail.com"><Mail/></a><a href="#home">↑</a></div></div></footer>
 </main>
}
function Info({icon,label,value}:{icon:React.ReactNode,label:string,value:string}){return <div className="info"><span>{icon}</span><div><small>{label}</small><strong>{value}</strong></div></div>}
