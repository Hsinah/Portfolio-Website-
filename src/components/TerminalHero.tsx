import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { prefix: "const", name: "developer", operator: "=", value: "{" },
  { indent: true, key: "name", val: '"Hanish T"' },
  { indent: true, key: "role", val: '"Software Engineer"' },
  { indent: true, key: "focus", val: '"Scalable Systems & Clean Architectures"' },
  { indent: true, key: "status", val: '"Building the future, one commit at a time"' },
  { close: true, value: "};" },
];

const TerminalHero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-px bg-primary/10 animate-scan-line" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-lg overflow-hidden neon-border"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio/intro.ts</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
            {lines.map((line, i) => {
              if (i >= visibleLines) return null;

              if (line.close) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-foreground"
                  >
                    <span className="text-muted-foreground mr-4 select-none">{i + 1}</span>
                    {line.value}
                  </motion.div>
                );
              }

              if (line.indent) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="pl-8"
                  >
                    <span className="text-muted-foreground mr-4 select-none">{i + 1}</span>
                    <span className="text-accent">{line.key}</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-primary">{line.val}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-foreground"
                >
                  <span className="text-muted-foreground mr-4 select-none">{i + 1}</span>
                  <span className="text-accent">{line.prefix}</span>{" "}
                  <span className="text-foreground">{line.name}</span>{" "}
                  <span className="text-muted-foreground">{line.operator}</span>{" "}
                  <span className="text-foreground">{line.value}</span>
                </motion.div>
              );
            })}

            {visibleLines >= lines.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <span className="text-muted-foreground mr-4 select-none">{lines.length + 1}</span>
                <span className="text-primary">{">"}</span>
                <span className="inline-block w-2 h-4 bg-primary ml-1 animate-blink" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 text-center"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            scroll.down()
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-2 text-primary text-lg"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalHero;
