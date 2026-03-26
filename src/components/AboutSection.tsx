import { Shield, Code, Database, Terminal } from "lucide-react";

const skills = [
  { icon: Code, label: "Python, C, C++, JavaScript" },
  { icon: Shield, label: "Cybersecurity Fundamentals" },
  { icon: Database, label: "Django, Flask, Full Stack" },
  { icon: Terminal, label: "DSA & Problem Solving" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-primary text-sm mb-2">&gt; about_me</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Who I Am
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-secondary-foreground leading-relaxed mb-6">
              I'm Sanyukta Nevasekar, a passionate software developer and cybersecurity enthusiast
              currently pursuing my education at Pimpri Chinchwad College of Engineering & Research.
              I specialize in Python full-stack development with expertise in Django and Flask frameworks.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              With a strong foundation in data structures & algorithms and a keen interest in
              cybersecurity, I build secure, efficient, and scalable applications. I'm constantly
              exploring new technologies and security paradigms to stay ahead in the ever-evolving
              tech landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="bg-card border border-border rounded-lg p-4 card-glow-hover"
              >
                <skill.icon className="text-primary mb-3" size={24} />
                <p className="font-mono text-sm text-card-foreground">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
