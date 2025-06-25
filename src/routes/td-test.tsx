import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/td-test')({
	component: TDTest,
})

interface FilamentData {
	type: string
	color: string
	brand: string
	td: number
}

const filamentData: FilamentData[] = [
	{ type: 'PLA', color: '#FFFB00', brand: 'JamgHe', td: 9.0 },
	{ type: 'PLA', color: '#FDFFFF', brand: 'JamgHe', td: 8.0 },
	{ type: 'PLA', color: '#FF2600', brand: 'JamgHe', td: 7.6 },
	{ type: 'PLA', color: '#FFD1A3', brand: 'JamgHe', td: 3.6 },
	{ type: 'PLA', color: '#254ECA', brand: 'JamgHe', td: 2.8 },
	{ type: 'PLA', color: '#88847A', brand: 'JamgHe', td: 2.4 },
	{ type: 'PLA', color: '#635F54', brand: 'JamgHe', td: 1.8 },
	{ type: 'PLA', color: '#000000', brand: 'JamgHe', td: 0.4 },
	{ type: 'PLA', color: '#FF9300', brand: 'OKMAXWORK', td: 6.6 },
	{ type: 'PLA', color: '#67C8F6', brand: 'R3D', td: 2.4 },
]

function ColorSwatch({ color }: { color: string }) {
	return (
		<div className="flex items-center space-x-3">
			<div
				className="w-6 h-6 rounded border border-gray-300 shadow-sm"
				style={{ backgroundColor: color }}
			/>
			<span className="font-mono text-sm text-gray-700 uppercase">{color}</span>
		</div>
	)
}

function TDTest() {
	return (
		<div className="min-h-screen">
			{/* Header */}
			<div className="px-8 py-12 text-center bg-gradient-to-r from-yellow-50 to-orange-50">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
							Filament Light Transmission Distance (TD) Test
						</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Light transmission measurements for various filaments in my collection using the{' '}
						<a
							href="https://www.printables.com/model/552566-official-hueforge-td-step-test-and-light-box"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:text-orange-700 underline"
						>
							Official HueForge TD Step Test
						</a>{' '}
						methodology.
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="px-4 sm:px-6 lg:px-8 py-12">
				<div className="max-w-6xl mx-auto">
					<div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
						{/* Desktop Table */}
						<div className="hidden md:block overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-gray-200">
										<th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider w-1/6">
											Type
										</th>
										<th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider w-2/5">
											Color
										</th>
										<th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider w-1/4">
											Brand
										</th>
										<th className="px-8 py-5 text-center text-sm font-semibold text-gray-800 uppercase tracking-wider w-1/6">
											TD Value
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{filamentData.map((filament, index) => (
										<tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
											<td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
												{filament.type}
											</td>
											<td className="px-8 py-5 whitespace-nowrap">
												<ColorSwatch color={filament.color} />
											</td>
											<td className="px-8 py-5 whitespace-nowrap text-sm text-gray-700 font-medium">
												{filament.brand}
											</td>
											<td className="px-8 py-5 whitespace-nowrap text-center">
												<span className="inline-flex items-center px-4 py-2 rounded-full text-base font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 shadow-sm">
													{filament.td}
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* Mobile Cards */}
						<div className="md:hidden divide-y divide-gray-200">
							{filamentData.map((filament, index) => (
								<div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-150">
									<div className="space-y-4">
										<div className="flex justify-between items-start">
											<div>
												<h3 className="text-lg font-semibold text-gray-900">{filament.type}</h3>
												<p className="text-sm text-gray-600 font-medium">{filament.brand}</p>
											</div>
											<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 shadow-sm">
												TD: {filament.td}
											</span>
										</div>
										<ColorSwatch color={filament.color} />
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Disclaimer */}
					<div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
						<div className="flex items-start space-x-3">
							<svg
								className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
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
							<div>
								<h3 className="text-sm font-semibold text-yellow-800 mb-1">Disclaimer</h3>
								<p className="text-sm text-yellow-700">
									Light transmission properties may vary between manufacturing batches. These measurements are provided for reference only and your results may vary.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
} 