export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 max-w-6xl mx-auto border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Kobe Janssens
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
