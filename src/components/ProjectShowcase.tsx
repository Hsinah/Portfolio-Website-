import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "College ERP System",
    description: "Built a role-based College ERP system with separate authentication and dashboard access for students and professors using React JS, Spring Boot, and MySQL",
    tags: ["React", "Spring Boot", "MySQL"],
    metrics: "50K+ DAGs processed/day",
    link: "https://github.com/Hsinah/College-ERP-System-React-JS-Spring-Boot.git",
  },
  {
    title: "Metro Maintance Automation System",
    description: "Developed a full-stack Metro Maintenance System with predictive analytics using React JS, Flask, Scikit-learn, and MongoDB. Portfolio Websit",
    tags: ["React JS", "Flask", "Scikit-learn", "MongoDB"],
    metrics: "< 2ms avg latency",
    link: "https://github.com/Hsinah/Kochi-Metro-automation-.git",
  },
  {
    title: "Portfolio Website",
    description: "Built a personal portfolio website using React.tsx to showcase skills, projects, education, and contact information. Includes smooth navigation, reusable components, and responsive layout for mobile and desktop views. ",
    tags: ["React TSX","Typescript", "Tailwind CSS"],
    metrics: "2K+ GitHub stars",
    link: "#",
  },
];

const ProjectShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
            {"// 03. projects"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="text-gradient">featured.work</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="block glass-card rounded-lg p-6 md:p-8 group hover:neon-border transition-all duration-500 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary font-mono text-xs">0{idx + 1}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <motion.span
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                  <p className="text-secondary-foreground text-sm md:text-base mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-secondary font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="font-mono text-xs text-primary/70 md:text-right whitespace-nowrap">
                  {project.metrics}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
