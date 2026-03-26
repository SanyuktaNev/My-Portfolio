import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "July 2025",
    description: "Completed Cisco's foundational cybersecurity course covering threat landscapes, security principles, and network protection strategies.",
    pdf: "/certificates/cisco-cybersecurity.pdf",
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy — Abdul Bari",
    date: "September 2025",
    description: "Comprehensive 76-hour course mastering arrays, linked lists, trees, graphs, sorting, searching, and advanced algorithmic techniques in C/C++.",
    pdf: "/certificates/udemy-dsa.pdf",
  },
  {
    title: "Python and Django Full Stack Web Developer Bootcamp",
    issuer: "Udemy — Jose Portilla",
    date: "September 2025",
    description: "32-hour bootcamp covering Python, HTML, CSS, JavaScript, Django framework, and full-stack web application development.",
    pdf: "/certificates/udemy-django.pdf",
  },
  {
    title: "Python Full Stack Developer Virtual Internship",
    issuer: "AICTE & EduSkills Academy",
    date: "Oct – Dec 2024",
    description: "10-week virtual internship program focusing on Python full-stack development with Flask, supported by the National Internship Portal.",
    pdf: "/certificates/python-fullstack-internship.pdf",
  },
  {
    title: "Finlatics Equity Markets Analyst",
    issuer: "Finlatics / Fincrux Technologies",
    date: "Oct 2024 – Feb 2025",
    description: "Financial markets experience program covering equity research, stock analysis, and real-time trading strategy implementation.",
    pdf: "/certificates/finlatics-certificate.pdf",
    lorPdf: "/certificates/finlatics-lor.pdf",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-primary text-sm mb-2">&gt; ls certificates/</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Certifications
        </h3>

        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 card-glow-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-sm text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-secondary-foreground text-sm mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                    {cert.lorPdf && (
                      <a
                        href={cert.lorPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={14} />
                        Letter of Recommendation
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
