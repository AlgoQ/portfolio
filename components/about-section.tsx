import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-xs tracking-widest uppercase text-muted-foreground">
            About
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            From humble beginnings with HTML & CSS, where I recreated designs of
            popular websites like Netflix, my journey as a software developer
            started. This path led me to remarkable projects, including
            developing AI models for a{" "}
            <Link
              href="https://theelysian.fund/"
              target="_blank"
              className="text-foreground link-underline"
            >
              hedge fund startup
            </Link>{" "}
            and contributing as an open-source developer to the biggest{" "}
            <Link
              href="https://github.com/ccxt/ccxt"
              target="_blank"
              className="text-foreground link-underline"
            >
              crypto software project
            </Link>
            .
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Today, I work as an independent contractor, crafting custom
            solutions for clients. Outside, my passion lies in quantitative
            trading - from researching and backtesting strategies to
            implementing and fine-tuning trading systems. Recently, I
            successfully launched one of my trading strategies as a{" "}
            <Link
              href="https://app.hyperliquid.xyz/vaults/0x8653be36bd297677e6ebcc33977fb780a689ff2c"
              target="_blank"
              className="text-foreground link-underline"
            >
              vault
            </Link>{" "}
            on Hyperliquid.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When I step away from the screen, you'll find me walking my dog,
            enjoying a refreshing yerba mate, or immersed in a good book.
          </p>
        </div>
      </div>
    </section>
  );
}
