import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const experiences = [
  {
    period: "2024 - Present",
    title: "Independent Contractor",
    company: "Self-employed",
    description:
      "Building custom solutions for clients. Developing quantitative trading strategies and maintaining trading systems.",
    tags: ["Python", "TypeScript", "React", "Trading"],
    link: "#",
  },
  {
    period: "2023 - 2024",
    title: "Full Stack Developer",
    company: "Elysian Fund",
    description:
      "Developed AI models and trading algorithms for a hedge fund startup. Built data pipelines and backtesting infrastructure.",
    tags: ["Python", "Machine Learning", "AWS", "PostgreSQL"],
    link: "https://theelysian.fund/",
  },
  {
    period: "2022 - 2023",
    title: "Open Source Contributor",
    company: "CCXT",
    description:
      "Contributed to the largest cryptocurrency trading library. Implemented exchange APIs and fixed bugs.",
    tags: ["JavaScript", "Python", "API Design", "Open Source"],
    link: "https://github.com/ccxt/ccxt",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 lg:px-8 max-w-6xl mx-auto border-t border-border"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-xs tracking-widest uppercase text-muted-foreground sticky top-24">
            Experience
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <Link
                key={index}
                href={exp.link}
                target={exp.link !== "#" ? "_blank" : undefined}
                className="group block"
              >
                <article className="grid sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-3">
                    <p className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </p>
                  </div>
                  <div className="sm:col-span-9 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium group-hover:text-muted-foreground transition-colors flex items-center gap-2">
                          {exp.title}
                          <ArrowUpRightIcon className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
