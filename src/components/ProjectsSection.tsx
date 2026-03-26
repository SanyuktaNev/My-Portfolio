import { Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Flask Blog",
    description: "A fully authenticated and robust backend blog application built with Flask, featuring user registration, login, CRUD operations, and secure session management.",
    tech: ["Python", "Flask"],
    github: "https://github.com/SanyuktaNev/FLASK",
  },
  {
    title: "Trading Bot",
    description: "A Binance testnet trading bot built in Python for executing automated trading strategies with real-time market data analysis.",
    tech: ["Python"],
    github: "https://github.com/SanyuktaNev/trading_bot",
  },
  {
    title: "Task Manager API",
    description: "A RESTful task manager API built with Flask featuring full CRUD operations, role-based access control (RBAC), and database integration.",
    tech: ["Python", "Flask"],
    github: "https://github.com/SanyuktaNev/task_manager_api",
  },
  {
    title: "Field-Based CRM Management App",
    description: "A comprehensive field-based CRM management application built with Flutter for managing customer relationships, field operations, and business workflows on mobile.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/SanyuktaNev",
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
          // More projects coming soon!
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
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
