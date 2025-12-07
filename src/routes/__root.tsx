import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NotFoundPage from '../components/NotFound'
import ErrorPage from '../components/Error'

export const Route = createRootRoute({
	notFoundComponent: NotFoundPage,
	errorComponent: ErrorPage,
	component: () => (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-zinc-900 dark:text-gray-100 transition-colors duration-200">
			{/* Navigation Header */}
			<Navbar />

			{/* Main Content */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-white/5 overflow-hidden transition-colors duration-200">
					<Outlet />
				</div>
			</main>

			{/* Footer */}
			<footer className="mt-16 py-8 text-center text-gray-600 dark:text-gray-400">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-sm">© {new Date().getFullYear()} Kafuuchino</p>
				</div>
			</footer>

			{import.meta.env.DEV ? <TanStackRouterDevtools /> : null}
		</div>
	),
})
