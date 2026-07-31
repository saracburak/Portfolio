import React from 'react';
import './Project.css';

function Project() {
  const projects = [
    {
      title: "İnşaat Holding Web Sitesi",
      description: "Modern ve kurumsal bir inşaat holding web sitesi. Proje portföyü, kurumsal bilgiler ve iletişim modülleri ile tam kapsamlı kurumsal websitesi.",
      tech: ["React.js", "Material-UI", "Node.js"],
      github: "",
      live: "https://www.burakyolmuhendislik.com"
    },
    {
      title: "Voice Chat Uygulaması",
      description: "MERN stack ile geliştirilmiş gerçek zamanlı sesli sohbet uygulaması. Oda sistemi, kullanıcı yönetimi ve anlık sesli iletişim özellikleri.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
      github: "https://github.com/saracburak/voice-chat",
      live: "https://voice-chat-app.netlify.app"
    },
    {
      title: "Hastane Randevu Sistemi Flutter",
      description: "Hastaneler için geliştirilmiş, kullanıcı dostu mobil randevu yönetim sistemi. Firebase altyapısı ile gerçek zamanlı veri senkronizasyonu.",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/saracburak/hastane-randevu-sistemi-flutter",
      live: "https://appetize.io/app/android/com.example.hastane_randevu_sistemi_flutter?device=pixel7&osVersion=13.0"
    },
    {
      title: "Burger Restaurant Website",
      description: "Modern tasarıma sahip, responsive restaurant web sitesi. Menü yönetimi ve online sipariş sistemi entegrasyonu.",
      tech: ["React", "CSS", "JavaScript"],
      github: "https://github.com/saracburak/burgerwebsite",
      live: "https://saracburak.github.io/burgerwebsite/"
    },
    {
      title: "Hastane Randevu Sistemi React",
      description: "Web tabanlı hastane randevu sistemi. Doktor ve hasta paneli ile tam entegre çalışan modern arayüz.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/saracburak/burgerwebsite",
      live: "https://hastanerandevusistemi.netlify.app"
    },
    {
      title: "Ürün Sipariş Etme Flutter",
      description: "E-ticaret uygulaması için geliştirilmiş mobil sipariş sistemi. Kullanıcı dostu arayüz ve güvenli ödeme sistemi.",
      tech: ["Flutter", "Firebase", "State Management","Firebase"],
      github: "https://github.com/saracburak/Urun-siparis-etme",
      live: "https://appetize.io/app/android/com.example.urun_siparis?device=pixel7&osVersion=13.0"
    },
    {
      title: "Teknogenç Projesi Website",
      description: "Gençler için teknoloji platformu. Blog, eğitim içerikleri ve etkinlik yönetimi modülleri.",
      tech: ["React", "Redux", "Material-UI"],
      github: "",
      live: "https://teknogencfrontend.netlify.app"
    },
    {
      title: "Teknogenç Projesi Flutter",
      description: "Teknogenç platformunun mobil uygulaması. Offline kullanım ve bildirim sistemi entegrasyonu.",
      tech: ["Flutter", "REST API", "Provider"],
      github: "https://github.com/saracburak/Tekno-genc-flutter",
      live: ""
    }
  ];

  return (
    <section id="portfolio" className="section">
      <h2>Projelerim</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} className="project-btn github" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} className="project-btn live" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
