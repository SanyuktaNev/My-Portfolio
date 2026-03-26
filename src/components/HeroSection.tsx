import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";


const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-primary text-sm mb-4 animate-fade-in-up opacity-0 animate-delay-100">
          &gt; initializing portfolio...
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 animate-delay-200">
          <span className="text-foreground">Sanyukta </span>
          <span className="text-primary text-glow">Nevasekar</span>
        </h1>
        <p className="font-mono text-muted-foreground text-lg sm:text-xl mb-8 animate-fade-in-up opacity-0 animate-delay-300">
          Software Developer &amp; Cybersecurity Enthusiast
        </p>
        <div className="flex items-center justify-center gap-6 animate-fade-in-up opacity-0 animate-delay-400">
          <a
            href="https://github.com/SanyuktaNev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanyukta-nevasekar-269600335/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:sanyuktanevasekar@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>
        <a
          href="#about"
          className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-fade-in-up opacity-0 animate-delay-500"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
