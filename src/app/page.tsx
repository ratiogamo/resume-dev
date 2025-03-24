// Home page component
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Build Your Professional Resume
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Features section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <span className="mr-2">✨</span>
              Modern Design Templates
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">📱</span>
              Responsive Layout
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-2">🎨</span>
              Customizable Themes
            </li>
          </ul>
        </section>

        {/* Get Started section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Started
          </h2>
          <p className="text-gray-600 mb-4">
            Create your professional resume in minutes with our easy-to-use builder.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Create Resume
          </button>
        </section>
      </div>
    </div>
  )
}