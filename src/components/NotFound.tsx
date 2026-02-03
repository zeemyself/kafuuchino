import { Link } from '@tanstack/react-router'

export default function NotFoundPage() {
	return (
		<div className="min-h-[60vh] flex items-center justify-center px-8 py-16">
			<div className="text-center max-w-2xl mx-auto">
				{/* 404 Illustration */}
				<div className="mb-8">
					<div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mb-6">
						<svg
							className="w-16 h-16 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h1 className="text-7xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
						404
					</h1>
				</div>

				{/* Error Message */}
				<h2 className="text-3xl font-bold text-gray-800 mb-4">
					Page Not Found
				</h2>
				<p className="text-lg text-gray-600 mb-8 leading-relaxed">
					Oops! The page you're looking for doesn't exist. It might have been
					moved or deleted.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						to="/"
						className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
					>
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
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						Go Home
					</Link>
					<button
						onClick={() => window.history.back()}
						className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
					>
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
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
						Go Back
					</button>
				</div>

				{/* Quick Links */}
				<div className="mt-12 pt-8 border-t border-gray-200">
					<p className="text-sm text-gray-500 mb-4">Quick Links</p>
					<div className="flex flex-wrap justify-center gap-3">
						<Link
							to="/hueforge"
							className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
						>
							Hueforge
						</Link>
						<Link
							to="/td-test"
							className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors"
						>
							TD Table
						</Link>
						<Link
							to="/about"
							className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
