import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>
          © {year} {siteConfig.name}. Crafted with precision.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
