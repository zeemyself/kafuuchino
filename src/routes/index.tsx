import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden transition-colors duration-200">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="sm:text-center lg:text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
									<span className="block xl:inline">Welcome to</span>{' '}
									<span className="block text-blue-600 dark:text-blue-400 xl:inline">
										Rabbit House
									</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									"Is the Order a Rabbit?"
								</p>
								<p className="mt-2 text-sm text-gray-400 dark:text-gray-500 sm:mt-3 sm:text-base sm:max-w-xl sm:mx-auto md:mt-3 md:text-lg lg:mx-0">
									Meet Kafuu Chino, the adorable granddaughter of the Rabbit
									House cafe's master.
								</p>
							</div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
						src="/chino-hero.png"
						alt="Kafuu Chino"
					/>
				</div>
			</div>

			{/* About Section */}
			<div className="py-12 bg-white dark:bg-slate-800 transition-colors duration-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
							Character Profile
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
							Kafuu Chino
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
							Chino is a cool and reserved middle school student with a soft
							spot for cute things. She works at the Rabbit House cafe and is
							known for her dedication and barista skills.
						</p>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
										{/* Coffee Icon */}
										<svg
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
										Barista Expert
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
									Master of latte art and various coffee blends. She takes her
									job very seriously.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
										{/* Rabbit Icon (using a simple shape for now) */}
										<svg
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
										Tippy's Guardian
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
									Always seen with Tippy, the fluffy Angora rabbit who is
									actually her grandfather.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
										{/* Sun Icon */}
										<svg
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
										School Swimsuit
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
									Chino looks adorable in her school swimsuit, perfect for a
									summer day at the pool.
								</dd>
							</div>

							<div className="relative">
								<dt>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
										{/* Moon Icon */}
										<svg
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
											/>
										</svg>
									</div>
									<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
										Camisole
									</p>
								</dt>
								<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
									Chino wears a cute camisole for sleeping, looking relaxed and
									comfortable.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>

			{/* Gallery Section */}
			<div className="py-12 bg-blue-50 dark:bg-slate-900 transition-colors duration-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
							Gallery
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
							Chino's Daily Life
						</p>
					</div>
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-coffee.png"
									alt="Chino making coffee"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Coffee Time
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Making the perfect blend
									</p>
								</div>
							</div>
						</div>
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-reading.png"
									alt="Chino reading"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Relaxing
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Enjoying a good book
									</p>
								</div>
							</div>
						</div>
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-smile.png"
									alt="Chino smiling"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Gentle Smile
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										A rare moment of joy
									</p>
								</div>
							</div>
						</div>
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-swimsuit.png"
									alt="Chino in school swimsuit"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Summer Fun
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Cooling off at the pool
									</p>
								</div>
							</div>
						</div>
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-swimsuit-sitting.png"
									alt="Chino sitting by the pool"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Poolside Relaxing
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Dipping feet in the cool water
									</p>
								</div>
							</div>
						</div>
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-swimsuit-floatie.png"
									alt="Chino with swim ring"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Pool Playtime
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Having fun with a swim ring
									</p>
								</div>
							</div>
						</div>
						<div className="group relative">
							<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
								<img
									src="/chino-camisole.png"
									alt="Chino in camisole"
									className="w-full h-full object-center object-cover lg:w-full lg:h-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700 dark:text-gray-200">
										<span aria-hidden="true" className="absolute inset-0" />
										Relaxing Night
									</h3>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Ready for a good night's sleep
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
