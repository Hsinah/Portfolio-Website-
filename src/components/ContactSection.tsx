import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/hanish_t_cv.pdf";
    link.download = "hanish_t_cv.pdf";
    link.click();
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-muted-foreground mb-2 tracking-wider">
            {"// 05. contact"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="text-gradient">send.request</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-lg overflow-hidden neon-border"
        >
          {/* Request header */}
          <div className="px-6 py-3 border-b border-border flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-mono text-xs font-semibold">
              POST
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              /api/contact
            </span>
          </div>

          {/* Request body */}
          <div className="p-6 md:p-8 font-mono text-sm">
            <div className="text-muted-foreground mb-1">{"{"}</div>
            
            <div className="pl-6 space-y-3">
              <div>
                <span className="text-accent">"to"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary">"hanishthiyagarajan5@gmail.com"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div>
                <span className="text-accent">"github"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary">"github.com/Hsinah"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div>
                <span className="text-accent">"linkedin"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary">"linkedin.com/in/hanish-t-198a352a9"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div>
                <span className="text-accent">"message"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary">"Let's build something great together"</span>
              </div>
            </div>

            <div className="text-muted-foreground mt-1">{"}"}</div>

            {/* Response */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-4 border-t border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-semibold">200</span>
                  <span className="text-muted-foreground text-xs">OK</span>
                </div>
                <div className="text-primary text-xs">
                  {"{ \"status\": \"Message received! I'll get back to you soon.\" }"}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => setSent(true)}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold 
              hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 hover:scale-105"
          >
            execute()
          </button>

          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-mono text-sm font-semibold
              hover:bg-primary/10 hover:neon-border transition-all duration-300 hover:scale-105"
          >
            download.cv()
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
