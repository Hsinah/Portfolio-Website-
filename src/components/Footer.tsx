const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hanish — Built with precision
      </div>
      <div className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">▲</span> v1.0.0
      </div>
    </div>
  </footer>
);

export default Footer;
