import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const projects = [
  {
    title: "Hyperliquid Vault",
    description:
      "Launched a quantitative trading strategy as a public vault on Hyperliquid, managing automated trades with algorithmic precision.",
    tags: ["Python", "Trading", "Automation"],
    link: "https://app.hyperliquid.xyz/vaults/0x8653be36bd297677e6ebcc33977fb780a689ff2c",
  },
  {
    title: "Naval Almanack",
    description:
      "Recreated the website of 'The Almanack of Naval Ravikant' as a tribute to its impact. A clean, readable digital version of the book.",
    tags: ["Next.js", "React", "Design"],
    link: "https://navalmanack.vercel.app/",
  },
  {
    title: "CCXT Contributions",
    description:
      "Open-source contributions to the largest cryptocurrency trading library. Implemented exchange APIs and improved documentation.",
    tags: ["JavaScript", "Python", "Open Source"],
    link: "https://github.com/ccxt/ccxt",
  },
  {
    title: "Trading Infrastructure",
    description:
      "Built end-to-end trading infrastructure including data pipelines, backtesting frameworks, and live execution systems.",
    tags: ["Python", "AWS", "PostgreSQL"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="py-32 px-6 lg:px-8 max-w-6xl mx-auto border-t border-border"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-xs tracking-widest uppercase text-muted-foreground sticky top-24">
            Selected Work
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                className="group block p-6 -m-6 hover:bg-secondary/50 transition-colors"
              >
                <article className="space-y-3">
                  <h3 className="font-medium flex items-center gap-2">
                    {project.title}
                    <ArrowUpRightIcon className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
