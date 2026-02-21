import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  
  {
    period: "2009 — 2023",
    role: "THE VIKASA SCHOOL",
    company: "ICSE / ISC",
    description: "Completed my primary and secondary education at The Vikasa School, following the ICSE curriculum for grades 1-10 and the ISC curriculum for grades 11-12. Developed a strong foundation in core subjects and cultivated essential learning skills.",
  },
  {
    period: "2023 — Present",
    role: "Panimalar Engineering College",
    company: "B.Tech Information Technology",
    description: "Pursuing B.Tech Information Technology at Panimalar Engineering College, Chennai. Currently in the 3rd year of my undergraduate studies, maintaining a strong academic record while actively engaged in various technical projects and hackathons.",
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
            {"// 04. experience"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="text-gradient">git.log</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-border bg-background group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                </div>

                <div className="font-mono text-xs text-primary/70 mb-1">{exp.period}</div>
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <div className="font-mono text-sm text-muted-foreground mb-2">@ {exp.company}</div>
                <p className="text-secondary-foreground text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
