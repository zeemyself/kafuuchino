import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface NavLink {
	to: string
	label: string
	icon: ReactNode
	activeColorClass: string
	hoverColorClass: string
}

const links: NavLink[] = [
	{
		to: '/',
		label: 'Home',
		activeColorClass: '[&.active]:bg-blue-600 dark:[&.active]:bg-blue-500',
		hoverColorClass:
			'hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/40 dark:hover:text-blue-300',
		icon: (
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
		),
	},
	{
		to: '/hueforge',
		label: 'Hueforge',
		activeColorClass: '[&.active]:bg-orange-600 dark:[&.active]:bg-orange-500',
		hoverColorClass:
			'hover:bg-orange-100 hover:text-orange-700 dark:hover:bg-orange-900/40 dark:hover:text-orange-300',
		icon: (
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
		),
	},
	{
		to: '/td-test',
		label: 'TD Table',
		activeColorClass: '[&.active]:bg-yellow-600 dark:[&.active]:bg-yellow-500',
		hoverColorClass:
			'hover:bg-yellow-100 hover:text-yellow-700 dark:hover:bg-yellow-900/40 dark:hover:text-yellow-300',
		icon: (
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
		),
	},
	{
		to: '/about',
		label: 'About',
		activeColorClass: '[&.active]:bg-purple-600 dark:[&.active]:bg-purple-500',
		hoverColorClass:
			'hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/40 dark:hover:text-purple-300',
		icon: (
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
		),
	},
]

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const routerState = useRouterState()

	// Close mobile menu on route change
	useEffect(() => {
		setMobileMenuOpen(false)
	}, [routerState.location.pathname])

	// Close mobile menu when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				mobileMenuOpen &&
				menuRef.current &&
				buttonRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setMobileMenuOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [mobileMenuOpen])

	// Close mobile menu on Escape key
	useEffect(() => {
		function handleEscape(event: KeyboardEvent) {
			if (event.key === 'Escape' && mobileMenuOpen) {
				setMobileMenuOpen(false)
				buttonRef.current?.focus()
			}
		}
		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [mobileMenuOpen])

	return (
		<nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-white/10 transition-colors duration-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo/Brand */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Kafuuchino
						</h1>
					</div>

					{/* Desktop Navigation Links */}
					<div className="hidden md:flex space-x-4 lg:space-x-8">
						{links.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${link.hoverColorClass} ${link.activeColorClass} [&.active]:text-white [&.active]:shadow-lg dark:text-gray-300`}
							>
								{link.icon}
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Hamburger Button */}
					<button
						ref={buttonRef}
						type="button"
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-expanded={mobileMenuOpen}
						aria-controls="mobile-menu"
						aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					>
						{/* Hamburger / X icon with transition */}
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{mobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Menu Panel */}
			<div
				ref={menuRef}
				id="mobile-menu"
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-200/50 dark:border-white/10">
					{links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${link.hoverColorClass} ${link.activeColorClass} [&.active]:text-white [&.active]:shadow-lg dark:text-gray-300`}
						>
							{link.icon}
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	)
}
