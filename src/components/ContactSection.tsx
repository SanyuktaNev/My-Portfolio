import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-primary text-sm mb-2">&gt; contact --reach-out</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h3>
        <p className="text-secondary-foreground mb-10 leading-relaxed">
          Interested in collaborating on a project, discussing cybersecurity, or just want to say hello?
          Feel free to reach out!
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/SanyuktaNev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 font-mono text-sm text-foreground hover:text-primary hover:border-primary/50 transition-all card-glow-hover"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanyukta-nevasekar-269600335/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 font-mono text-sm text-foreground hover:text-primary hover:border-primary/50 transition-all card-glow-hover"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="mailto:sanyuktanevasekar@gmail.com"
            className="flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3 font-mono text-sm text-foreground hover:text-primary hover:border-primary/50 transition-all card-glow-hover"
          >
            <Mail size={18} />
            Email
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground flex items-center justify-center gap-2">
            <Terminal size={14} className="text-primary" />
            Built with passion &amp; code © {new Date().getFullYear()} Sanyukta Nevasekar
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
