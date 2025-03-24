import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-lg bg-black"></div>
              <span className="font-bold">acme.ai</span>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link href="#features" className="text-sm hover:text-gray-600">Features</Link></li>
                <li><Link href="#pricing" className="text-sm hover:text-gray-600">Pricing</Link></li>
                <li><Link href="#faq" className="text-sm hover:text-gray-600">FAQ</Link></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm hover:text-gray-600">Sign in</Link>
            <Link href="/signup" className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Automate your workflow with{' '}
            <span className="text-blue-600">AI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            No matter what problem you have, our AI can help you solve it.
            Get started today and see the power of AI in action.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/signup" className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/80">
              Get Started
            </Link>
            <Link href="#demo" className="rounded-lg border px-6 py-3 text-sm font-medium hover:bg-gray-50">
              Watch Demo
            </Link>
          </div>
          <div className="mt-24">
            <div className="relative mx-auto max-w-5xl rounded-xl bg-gray-900 p-2 shadow-2xl">
              <div className="flex items-center space-x-2 rounded-lg bg-gray-800 p-2">
                <div className="flex space-x-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-4 w-80 rounded-md bg-gray-700"></div>
              </div>
              <div className="mt-4 aspect-video rounded-lg bg-gray-700"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Features</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Everything you need to automate your workflow and boost productivity.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'AI-Powered Automation',
                  description: 'Let AI handle your repetitive tasks and focus on what matters.',
                },
                {
                  title: 'Smart Workflows',
                  description: 'Create custom workflows that adapt to your needs.',
                },
                {
                  title: 'Real-time Analytics',
                  description: 'Get insights into your automation performance.',
                },
                {
                  title: 'Team Collaboration',
                  description: 'Work together seamlessly with your team.',
                },
                {
                  title: 'Custom Integration',
                  description: 'Connect with your favorite tools and services.',
                },
                {
                  title: '24/7 Support',
                  description: 'Get help whenever you need it from our expert team.',
                },
              ].map((feature, i) => (
                <div key={i} className="rounded-xl bg-white p-8 shadow-sm">
                  <div className="mb-4 h-12 w-12 rounded-lg bg-blue-600"></div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Pricing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Starter',
                  price: '$29',
                  description: 'Perfect for individuals and small teams.',
                  features: [
                    '5 automation workflows',
                    '1,000 tasks per month',
                    'Basic analytics',
                    'Email support',
                  ],
                },
                {
                  name: 'Pro',
                  price: '$99',
                  description: 'Best for growing businesses.',
                  features: [
                    'Unlimited workflows',
                    '10,000 tasks per month',
                    'Advanced analytics',
                    'Priority support',
                  ],
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  description: 'For large organizations.',
                  features: [
                    'Custom workflows',
                    'Unlimited tasks',
                    'Custom analytics',
                    '24/7 phone support',
                  ],
                },
              ].map((plan, i) => (
                <div key={i} className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-4 text-3xl font-bold">{plan.price}</p>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">FAQ</h2>
            <div className="mx-auto mt-16 max-w-3xl divide-y">
              {[
                {
                  question: 'What is acme.ai?',
                  answer: 'Acme.ai is an AI-powered automation platform that helps you streamline your workflows and boost productivity.',
                },
                {
                  question: 'How does the free trial work?',
                  answer: 'You can try any plan free for 14 days. No credit card required.',
                },
                {
                  question: 'Can I change plans later?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time.',
                },
                {
                  question: 'What kind of support do you offer?',
                  answer: 'We offer email support for all plans, and priority support for Pro plans. Enterprise plans include 24/7 phone support.',
                },
              ].map((faq, i) => (
                <div key={i} className="py-6">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <p className="text-center text-gray-600">
              © 2024 Acme.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}