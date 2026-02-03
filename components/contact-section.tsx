import Link from "next/link";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AlgoQ",
    username: "@AlgoQ",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/AlgoQQ",
    username: "@AlgoQQ",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kobe-janssens-46a93613b/",
    username: "Kobe Janssens",
  },
  {
    label: "Email",
    href: "mailto:kobejanssens@outlook.com",
    username: "kobejanssens@outlook.com",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-8 max-w-6xl mx-auto border-t border-border"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-xs tracking-widest uppercase text-muted-foreground">
            Contact
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <p className="text-2xl lg:text-3xl font-light leading-snug max-w-xl text-balance">
              If you would like to discuss a project or just say hi, I am always
              down to chat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
              >
                <span className="text-sm text-muted-foreground">
                  {social.label}
                </span>
                <span className="text-sm group-hover:text-muted-foreground transition-colors">
                  {social.username}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
