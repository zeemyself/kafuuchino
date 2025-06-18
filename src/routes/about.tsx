import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: About,
})

function About() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="px-8 py-16 text-center bg-gradient-to-r from-purple-50 to-blue-50">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
							About Kafuuchino
						</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Kafuuchino is more than just a web application—it's a showcase of
						modern web development practices, beautiful design, and cutting-edge
						technology stack.
					</p>
				</div>
			</div>

			{/* Mission Section */}
			<div className="px-8 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
						<div className="text-center mb-8">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h2 className="text-3xl font-bold text-gray-800 mb-4">
								Our Mission
							</h2>
						</div>

						<div className="prose prose-lg mx-auto text-gray-600">
							<p className="mb-6">
								We believe in creating web experiences that are not only
								functional but also delightful. Kafuuchino demonstrates how
								modern tools can come together to create something beautiful and
								performant.
							</p>
							<p>
								Every line of code is written with care, every component is
								crafted with attention to detail, and every interaction is
								designed to provide the best possible user experience.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Technology Stack */}
			<div className="px-8 py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">
							Technology Stack
						</h2>
						<p className="text-xl text-gray-600">
							Built with the best tools in the ecosystem
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">⚛️</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								React 19
							</h3>
							<p className="text-gray-600 text-sm">
								The latest version of React with improved performance and new
								features
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🚀</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								TanStack Router
							</h3>
							<p className="text-gray-600 text-sm">
								Type-safe router with powerful features for modern React
								applications
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🔄</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								React Query
							</h3>
							<p className="text-gray-600 text-sm">
								Powerful data synchronization for React applications
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🎨</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Tailwind CSS
							</h3>
							<p className="text-gray-600 text-sm">
								Utility-first CSS framework for rapid UI development
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">📘</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								TypeScript
							</h3>
							<p className="text-gray-600 text-sm">
								Type safety and excellent developer experience
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">⚡</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">Vite</h3>
							<p className="text-gray-600 text-sm">
								Lightning fast build tool and development server
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🔍</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								ESLint
							</h3>
							<p className="text-gray-600 text-sm">
								Code quality and consistency with modern linting rules
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🛠️</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 mb-2">
								Modern Tooling
							</h3>
							<p className="text-gray-600 text-sm">
								Latest development tools for the best developer experience
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className="px-8 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl text-white p-8 md:p-12">
						<div className="text-center mb-8">
							<h2 className="text-3xl font-bold mb-4">Project Highlights</h2>
							<p className="text-blue-100">
								Some impressive numbers about our project
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div>
								<div className="text-4xl font-bold mb-2">100%</div>
								<div className="text-blue-100">Type Safe</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">⚡</div>
								<div className="text-blue-100">Lightning Fast</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">♥️</div>
								<div className="text-blue-100">Made with Love</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="px-8 py-16 bg-gray-50">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">
						Get In Touch
					</h2>
					<p className="text-xl text-gray-600 mb-8">
						Have questions about the project or want to collaborate? We'd love
						to hear from you!
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						<button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							Email Us
						</button>

						<button className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-colors duration-200">
							<svg
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							GitHub
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
