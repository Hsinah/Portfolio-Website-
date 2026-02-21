import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
            {"// 01. about"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">whoami</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-[1fr_auto] gap-12 items-start"
        >
          <div className="space-y-5 text-secondary-foreground leading-relaxed">
            <p>

              Motivated Software Developer skilled in Java, Spring Boot, and Data Structures and Algorithms.
Experienced in developing structured and efficient backend solutions through academic projects
and hands-on practice. Strong understanding of Object-Oriented Programming principles,
RESTful APIs, and database management using MySQL and Oracle. Eager to contribute to
high-quality software solutions and grow in a dynamic, technology-driven environment.

            </p>
          </div>

          <div className="glass-card rounded-lg p-6 font-mono text-xs space-y-2 min-w-[240px]">
            <div className="text-muted-foreground mb-3">$ cat stats.json</div>
            <div>
              <span className="text-accent">years_exp</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-primary">fresher</span>
            </div>
            <div>
              <span className="text-accent">projects</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-primary">2</span>
            </div>
            <div>
              <span className="text-accent">commits</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-primary">50</span>
            </div>
            <div>
              <span className="text-accent">coffee</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-primary">∞</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
