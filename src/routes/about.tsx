import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: About,
})

function About() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="px-8 py-16 text-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Kafuuchino</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Your companion for 3D printing color blending and filament management.
					</p>
				</div>
			</div>

			{/* Mission Section */}
			<div className="px-8 py-16 dark:bg-slate-900 transition-colors duration-200">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 md:p-12 transition-colors duration-200">
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
							<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">What is it?</h2>
						</div>

						<div className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300 text-center">
							<p className="mb-6">
								Kafuuchino helps you manage your 3D printing filaments and calculate transmission distances (TD) for Hueforge projects.
							</p>
							<p>
								Whether you're blending colors or organizing your collection, we provide the tools you need to get the perfect print.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="px-8 py-16 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-200">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Features</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400">Tools to enhance your printing workflow</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">📏</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">TD Calculator</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm">Calculate light transmission distance for accurate color blending.</p>
						</div>

						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🎨</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Filament Library</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm">Browse and filter a database of filament brands and colors.</p>
						</div>

						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🖼️</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Hueforge Helper</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm">Optimize your Hueforge prints with precise data.</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div className="px-8 py-16 dark:bg-slate-900 transition-colors duration-200">
				<div className="max-w-4xl mx-auto">
					<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl text-white p-8 md:p-12">
						<div className="text-center mb-8">
							<h2 className="text-3xl font-bold mb-4">Community Driven</h2>
							<p className="text-blue-100">Built for makers, by makers</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 text-center">
							<div>
								<div className="text-4xl font-bold mb-2">15+</div>
								<div className="text-blue-100">Filaments Tracked</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">100%</div>
								<div className="text-blue-100">Open Source</div>
							</div>
							<div>
								<div className="text-4xl font-bold mb-2">Free</div>
								<div className="text-blue-100">Forever</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="px-8 py-16 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-200">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
						Contribute
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
						Want to add a filament to the database or suggest a feature?
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						<button className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200">
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
