import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NotFoundPage from '../components/NotFound'
import ErrorPage from '../components/Error'

export const Route = createRootRoute({
	notFoundComponent: NotFoundPage,
	errorComponent: ErrorPage,
	component: () => (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			{/* Navigation Header */}
			<nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo/Brand */}
						<div className="flex-shrink-0">
							<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Kafuuchino
							</h1>
						</div>

                        {/* Navigation Links */}
						<div className="flex space-x-8">
							<Link
								to="/"
								className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-700 [&.active]:bg-blue-600 [&.active]:text-white [&.active]:shadow-lg"
							>
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								Home
							</Link>
							<Link
								to="/hueforge"
								className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-orange-100 hover:text-orange-700 [&.active]:bg-orange-600 [&.active]:text-white [&.active]:shadow-lg"
							>
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
									/>
								</svg>
                                Hueforge
							</Link>
							<Link
								to="/td-test"
								className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-yellow-100 hover:text-yellow-700 [&.active]:bg-yellow-600 [&.active]:text-white [&.active]:shadow-lg"
							>
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
                                TD Table
							</Link>
							<Link
								to="/about"
								className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-purple-100 hover:text-purple-700 [&.active]:bg-purple-600 [&.active]:text-white [&.active]:shadow-lg"
							>
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								About
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
					<Outlet />
				</div>
			</main>

            {/* Footer */}
			<footer className="mt-16 py-8 text-center text-gray-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm">© {new Date().getFullYear()} Kafuuchino</p>
				</div>
			</footer>

            {import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
		</div>
	),
})
