import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  
  {
    title: "Programming Language",
    icon: "◇",
    skills: ["C", "Java", "Python", "lua"],
  },
  {
    title: "Frontend",
    icon: "◆",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "◈",
    skills: ["REST APIs","Spring Boot"],
  },
  {
    title: "Data & Tools",
    icon: "○",
    skills: ["MySQL","MongoDB","Git"],
  }
];

const SkillsGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
            {"// 02. skills"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="text-gradient">tech.stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card rounded-lg p-6 group hover:neon-border transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary text-lg">{cat.icon}</span>
                <h3 className="font-mono text-sm text-foreground tracking-wider uppercase">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.15 + skillIdx * 0.05 + 0.3 }}
                    className="px-3 py-1.5 rounded-md bg-secondary font-mono text-xs text-secondary-foreground
                      hover:bg-primary/10 hover:text-primary hover:neon-border transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
