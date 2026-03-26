import { Github, ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Jarvis",
    description: "A JavaScript-based virtual assistant project inspired by Iron Man's JARVIS AI, featuring voice commands and interactive responses.",
    tech: ["JavaScript"],
    github: "https://github.com/SanyuktaNev/Jarvis",
  },
  {
    title: "Trading Bot",
    description: "An automated trading bot built with Python for executing trading strategies in financial markets with real-time data analysis.",
    tech: ["Python"],
    github: "https://github.com/SanyuktaNev/trading_bot",
  },
  {
    title: "Flask Practice",
    description: "Web applications built using Python Flask framework, demonstrating backend development, routing, and template rendering.",
    tech: ["Python", "Flask"],
    github: "https://github.com/SanyuktaNev/flask-practice",
  },
  {
    title: "Python Text-to-Speech",
    description: "A Python application that converts text into natural-sounding speech using text-to-speech libraries and APIs.",
    tech: ["Python"],
    github: "https://github.com/SanyuktaNev/Python-Text-to-Speech",
  },
  {
    title: "Google Clone",
    description: "A front-end clone of Google's homepage built with HTML and CSS, demonstrating responsive design and pixel-perfect UI replication.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/SanyuktaNev/HTML-CSS-Google-Clone",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-primary text-sm mb-2">&gt; cat projects.json</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Projects
        </h3>
        <p className="text-muted-foreground mb-12 font-mono text-sm">
          // More projects coming soon — tell me which ones to feature!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 card-glow-hover group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <FolderGit2 className="text-primary" size={20} />
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
