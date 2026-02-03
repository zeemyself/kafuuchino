import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState, useEffect } from 'react'

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
	{ brand: 'R3D', color: '#ffd5bd', type: 'PLA', td: 3.9 }, // Almond
	{ brand: 'JamgHe', color: '#ffd1a3', type: 'PLA', td: 3.6 }, // Almond
	{ brand: 'R3D', color: '#070707', type: 'PLA', td: 5.0 }, // Black
	{ brand: 'JamgHe', color: '#000000', type: 'PLA', td: 0.4 }, // Black
	{ brand: 'JamgHe', color: '#254eca', type: 'PLA', td: 2.8 }, // Blue
	{ brand: 'CNC', color: '#5088ff', type: 'PLA', td: 2.1 }, // Blue
	{ brand: 'R3D', color: '#3a66ee', type: 'PLA', td: 1.5 }, // Blue
	{ brand: 'JamgHe', color: '#3a8c66', type: 'PLA', td: 2.1 }, // Green
	{ brand: 'JamgHe', color: '#727a8d', type: 'PLA', td: 1.4 }, // Grey
	{ brand: 'R3D', color: '#cfffff', type: 'PLA', td: 1.8 }, // Light Blue
	{ brand: 'R3D', color: '#41c8bd', type: 'PLA', td: 2.4 }, // Light Blue
	{ brand: 'R3D', color: '#313e5d', type: 'PLA', td: 0.1 }, // Navy Blue
	{ brand: 'CNC', color: '#b74ba0', type: 'PLA', td: 4.4 }, // Pink
	{ brand: 'JamgHe', color: '#8785cf', type: 'PLA', td: 8.5 }, // Purple
	{ brand: 'JamgHe', color: '#922a30', type: 'PLA', td: 4.5 }, // Red
	{ brand: 'JamgHe', color: '#fdffff', type: 'PLA', td: 8.0 }, // White
	{ brand: 'CNC', color: '#d6e1ff', type: 'PLA', td: 11.3 }, // White
]

const TD_MIN = Math.min(...filamentData.map((f) => f.td))
const TD_MAX = Math.max(...filamentData.map((f) => f.td))

type SortKey = 'td' | 'brand' | 'type'
type SortDir = 'asc' | 'desc'

function ColorSwatch({
	color,
	onCopy,
	copied,
}: {
	color: string
	onCopy?: (hex: string) => void
	copied?: boolean
}) {
	return (
		<button
			type="button"
			onClick={() => onCopy?.(color)}
			className="flex items-center gap-3 group transition-all hover:scale-105"
			title="Click to copy hex"
		>
			<div
				className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700 shadow-md ring-1 ring-gray-100 dark:ring-gray-600"
				style={{ backgroundColor: color }}
			/>
			<span className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
				{copied ? 'copied!' : color}
			</span>
		</button>
	)
}

function TDGauge({ value }: { value: number }) {
	const percentage = ((value - TD_MIN) / (TD_MAX - TD_MIN)) * 100
	return (
		<div className="flex items-center gap-3 w-full max-w-[200px]">
			<div className="flex-1 h-2.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden shadow-inner">
				<div
					className="h-full rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500 transition-all duration-500 ease-out"
					style={{ width: `${Math.max(5, Math.min(100, percentage))}%` }}
				/>
			</div>
			<span className="text-sm font-bold text-gray-700 dark:text-gray-300 tabular-nums w-10 text-right">
				{value.toFixed(1)}
			</span>
		</div>
	)
}

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
	if (!active)
		return (
			<div className="w-4 h-4 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-50 transition-opacity">
				↕
			</div>
		)
	return (
		<div className="w-4 h-4 text-orange-500 transition-transform duration-200">
			{dir === 'asc' ? '↑' : '↓'}
		</div>
	)
}

function TDTest() {
	const [filterType, setFilterType] = useState<string>('All')
	const [filterBrand, setFilterBrand] = useState<string>('All')
	const [search, setSearch] = useState('')
	const [tdRange, setTdRange] = useState<[number, number]>([TD_MIN, TD_MAX])
	const [sortKey, setSortKey] = useState<SortKey>('td')
	const [sortDir, setSortDir] = useState<SortDir>('desc')
	const [copiedHex, setCopiedHex] = useState<string | null>(null)

	const [debouncedSearch, setDebouncedSearch] = useState(search)

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300)
		return () => clearTimeout(timer)
	}, [search])

	const types = useMemo(
		() => ['All', ...Array.from(new Set(filamentData.map((f) => f.type)))],
		[],
	)
	const brands = useMemo(
		() => ['All', ...Array.from(new Set(filamentData.map((f) => f.brand)))],
		[],
	)

	const filteredAndSorted = useMemo(() => {
		const [min, max] = tdRange
		const searchTerms = debouncedSearch
			.trim()
			.toLowerCase()
			.split(/\s+/)
			.filter(Boolean)

		const result = filamentData
			.filter((f) => (filterType === 'All' ? true : f.type === filterType))
			.filter((f) => (filterBrand === 'All' ? true : f.brand === filterBrand))
			.filter((f) => f.td >= min && f.td <= max)
			.filter((f) => {
				if (searchTerms.length === 0) return true
				const searchString = `${f.brand} ${f.type} ${f.color}`.toLowerCase()
				return searchTerms.every((term) => searchString.includes(term))
			})
			.slice()
			.sort((a, b) => {
				const dir = sortDir === 'asc' ? 1 : -1
				if (sortKey === 'td') return (a.td - b.td) * dir
				if (sortKey === 'brand') return a.brand.localeCompare(b.brand) * dir
				return a.type.localeCompare(b.type) * dir
			})
		return result
	}, [filterType, filterBrand, debouncedSearch, tdRange, sortKey, sortDir])

	const avgTd = useMemo(() => {
		if (filteredAndSorted.length === 0) return 0
		const sum = filteredAndSorted.reduce((acc, f) => acc + f.td, 0)
		return sum / filteredAndSorted.length
	}, [filteredAndSorted])

	function resetFilters() {
		setFilterType('All')
		setFilterBrand('All')
		setSearch('')
		setTdRange([TD_MIN, TD_MAX])
		setSortKey('td')
		setSortDir('desc')
	}

	function toggleSort(key: SortKey) {
		if (key === sortKey) {
			setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
		} else {
			setSortKey(key)
			setSortDir(key === 'td' ? 'desc' : 'asc') // Default TD to desc (high transmission first usually interesting)
		}
	}

	function handleCopyHex(hex: string) {
		navigator.clipboard?.writeText(hex).then(() => {
			setCopiedHex(hex)
			setTimeout(() => setCopiedHex(null), 1200)
		})
	}

	return (
		<div className="min-h-screen bg-gray-50/50 dark:bg-slate-900/50 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-200">
			{/* Hero Header */}
			<div className="relative bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
				<div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 opacity-60" />
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
							Filament TD
						</span>{' '}
						Library
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
						Precise light transmission data for your 3D printing projects. Based
						on the{' '}
						<a
							href="https://www.printables.com/model/552566-official-hueforge-td-step-test-and-light-box"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-orange-600 hover:text-orange-700 underline decoration-2 decoration-orange-200 hover:decoration-orange-600 transition-all"
						>
							HueForge Step Test
						</a>
						.
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8">
				{/* Controls Card */}
				<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 p-6 mb-8 backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 relative z-10 transition-colors duration-200">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
						{/* Search */}
						<div className="md:col-span-4">
							<label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
								Search
							</label>
							<div className="relative group">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</div>
								<input
									type="text"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									placeholder="Search brand, type, or color..."
									className="block w-full pl-10 pr-10 py-2.5 border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-gray-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 dark:text-gray-100 dark:placeholder-gray-400"
								/>
								{search && (
									<button
										onClick={() => setSearch('')}
										className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								)}
							</div>
						</div>

						{/* Filters */}
						<div className="md:col-span-2">
							<label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
								Type
							</label>
							<select
								className="block w-full py-2.5 pl-3 pr-10 border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-gray-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 dark:text-gray-100 transition-all"
								value={filterType}
								onChange={(e) => setFilterType(e.target.value)}
							>
								{types.map((t) => (
									<option key={t} value={t}>
										{t}
									</option>
								))}
							</select>
						</div>
						<div className="md:col-span-2">
							<label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
								Brand
							</label>
							<select
								className="block w-full py-2.5 pl-3 pr-10 border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-gray-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 dark:text-gray-100 transition-all"
								value={filterBrand}
								onChange={(e) => setFilterBrand(e.target.value)}
							>
								{brands.map((b) => (
									<option key={b} value={b}>
										{b}
									</option>
								))}
							</select>
						</div>

						{/* Range */}
						<div className="md:col-span-4">
							<label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
								TD Range{' '}
								<span className="text-gray-400 ml-1">
									({tdRange[0]} - {tdRange[1]})
								</span>
							</label>
							<div className="flex items-center gap-3">
								<input
									type="range"
									min={TD_MIN}
									max={TD_MAX}
									step={0.1}
									value={tdRange[0]}
									onChange={(e) => {
										const val = Number(e.target.value)
										if (val <= tdRange[1]) setTdRange([val, tdRange[1]])
									}}
									className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
								/>
								<input
									type="range"
									min={TD_MIN}
									max={TD_MAX}
									step={0.1}
									value={tdRange[1]}
									onChange={(e) => {
										const val = Number(e.target.value)
										if (val >= tdRange[0]) setTdRange([tdRange[0], val])
									}}
									className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
								/>
							</div>
						</div>
					</div>

					{/* Active Filters & Stats */}
					<div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2">
							<span className="text-sm font-medium text-gray-500 dark:text-gray-400">
								{filteredAndSorted.length} results
							</span>
							<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
							<span className="text-sm font-medium text-gray-500 dark:text-gray-400">
								Avg TD:{' '}
								<span className="text-gray-900 dark:text-gray-100">
									{avgTd.toFixed(1)}
								</span>
							</span>
						</div>

						{(filterType !== 'All' ||
							filterBrand !== 'All' ||
							search ||
							tdRange[0] !== TD_MIN ||
							tdRange[1] !== TD_MAX) && (
							<button
								onClick={resetFilters}
								className="text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
								Clear Filters
							</button>
						)}
					</div>
				</div>

				{/* Content */}
				<div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
					{/* Desktop Table */}
					<div className="hidden md:block overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="bg-gray-50/50 dark:bg-slate-900/50 border-b border-gray-200 dark:border-gray-700">
									{[
										{ key: 'type', label: 'Material', width: 'w-1/6' },
										{
											key: 'color',
											label: 'Color',
											width: 'w-1/4',
											noSort: true,
										},
										{ key: 'brand', label: 'Brand', width: 'w-1/4' },
										{
											key: 'td',
											label: 'Transmission Distance',
											width: 'w-1/3',
										},
									].map((col) => (
										<th
											key={col.key}
											className={`px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${col.width} ${!col.noSort ? 'cursor-pointer hover:bg-gray-100/50 dark:hover:bg-slate-700/50 hover:text-orange-600 dark:hover:text-orange-400' : ''} transition-colors group select-none`}
											onClick={() =>
												!col.noSort && toggleSort(col.key as SortKey)
											}
										>
											<div className="flex items-center gap-2">
												{col.label}
												{!col.noSort && (
													<SortIcon
														active={sortKey === col.key}
														dir={sortDir}
													/>
												)}
											</div>
										</th>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{filteredAndSorted.map((filament, index) => (
									<tr
										key={`${filament.brand}-${filament.color}-${index}`}
										className="hover:bg-orange-50/30 dark:hover:bg-orange-900/20 transition-colors group"
									>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 group-hover:bg-white dark:group-hover:bg-slate-600 group-hover:shadow-sm transition-all">
												{filament.type}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center gap-3">
												<ColorSwatch
													color={filament.color}
													onCopy={handleCopyHex}
													copied={copiedHex === filament.color}
												/>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="text-sm font-medium text-gray-900 dark:text-gray-100">
												{filament.brand}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<TDGauge value={filament.td} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{filteredAndSorted.length === 0 && (
							<div className="p-12 text-center text-gray-500 dark:text-gray-400">
								No filaments found matching your criteria.
							</div>
						)}
					</div>

					{/* Mobile Cards */}
					<div className="md:hidden divide-y divide-gray-100 dark:divide-gray-700">
						{/* Mobile Sort Control */}
						<div className="p-4 bg-gray-50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
							<span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">
								Sort By
							</span>
							<select
								className="text-sm border-none bg-transparent font-medium text-gray-900 dark:text-gray-100 focus:ring-0 cursor-pointer"
								value={`${sortKey}-${sortDir}`}
								onChange={(e) => {
									const [key, dir] = e.target.value.split('-') as [
										SortKey,
										SortDir,
									]
									setSortKey(key)
									setSortDir(dir)
								}}
							>
								<option value="td-desc">Highest TD</option>
								<option value="td-asc">Lowest TD</option>
								<option value="brand-asc">Brand (A-Z)</option>
								<option value="type-asc">Type (A-Z)</option>
							</select>
						</div>

						{filteredAndSorted.map((filament, index) => (
							<div
								key={`${filament.brand}-${filament.color}-${index}`}
								className="p-5 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
							>
								<div className="flex items-start justify-between mb-4">
									<div>
										<div className="flex items-center gap-2 mb-1">
											<h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
												{filament.brand}
											</h3>
											<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
												{filament.type}
											</span>
										</div>
										<ColorSwatch
											color={filament.color}
											onCopy={handleCopyHex}
											copied={copiedHex === filament.color}
										/>
									</div>
									<div className="text-right">
										<div className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
											{filament.td}
										</div>
										<div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
											TD Value
										</div>
									</div>
								</div>
								<div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
									<div
										className="h-full rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500"
										style={{
											width: `${((filament.td - TD_MIN) / (TD_MAX - TD_MIN)) * 100}%`,
										}}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Footer Disclaimer */}
				<div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-yellow-50/50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm">
					<svg
						className="w-5 h-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p>
						Light transmission properties may vary between manufacturing
						batches. These measurements are provided for reference only.
					</p>
				</div>
			</div>
		</div>
	)
}
