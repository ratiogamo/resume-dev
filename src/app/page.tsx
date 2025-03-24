import { BeamsBackground } from "@/components/ui/beams-background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <BeamsBackground>
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-lg bg-white"></div>
                <span className="font-bold text-white">acme.ai</span>
              </Link>
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li><Link href="#features" className="text-sm text-white/70 hover:text-white">Features</Link></li>
                  <li><Link href="#solutions" className="text-sm text-white/70 hover:text-white">Solutions</Link></li>
                  <li><Link href="#blog" className="text-sm text-white/70 hover:text-white">Blog</Link></li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm text-white/70 hover:text-white">Login</Link>
              <Link 
                href="/signup" 
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="flex min-h-screen items-center justify-center px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  📣 Announcement: Introducing Acme.ai
                </span>
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                  Automate your workflow
                  <br />
                  with <span className="text-blue-400">AI</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
                  No matter what problem you have, our AI can help you solve it.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <Link
                    href="/signup"
                    className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Get started for free
                  </Link>
                  <span className="text-sm text-white/50">
                    7 day free trial. No credit card required.
                  </span>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </BeamsBackground>
  );
}