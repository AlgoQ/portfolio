import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-8">
        <p className="text-sm text-muted-foreground tracking-wide uppercase">
          Full Stack Developer / Quant
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-balance max-w-4xl">
          I build accessible, pixel-perfect digital experiences for the web.
          Currently crafting custom solutions and exploring quantitative
          trading.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            View Work
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-border hover:bg-secondary transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDownIcon className="w-4 h-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
