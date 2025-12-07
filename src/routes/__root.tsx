import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NotFoundPage from '../components/NotFound'
import ErrorPage from '../components/Error'

export const Route = createRootRoute({
	notFoundComponent: NotFoundPage,
	errorComponent: ErrorPage,
	component: () => (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			{/* Navigation Header */}
			<Navbar />

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
