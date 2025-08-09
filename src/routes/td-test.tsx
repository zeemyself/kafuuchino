import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

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

function ColorSwatch({ color, onCopy, copied }: { color: string; onCopy?: (hex: string) => void; copied?: boolean }) {
    return (
        <button
            type="button"
            onClick={() => onCopy?.(color)}
            className="flex items-center space-x-3 group"
            title="Click to copy hex"
        >
            <div
                className="w-6 h-6 rounded border border-gray-300 shadow-sm"
                style={{ backgroundColor: color }}
            />
            <span className="font-mono text-sm text-gray-700 uppercase group-hover:underline">
                {copied ? 'copied' : color}
            </span>
        </button>
    )
}

function TDGauge({ value }: { value: number }) {
    const percentage = ((value - TD_MIN) / (TD_MAX - TD_MIN)) * 100
    return (
        <div className="flex items-center justify-center space-x-3">
            <div className="w-36 h-2 rounded bg-gray-200 overflow-hidden">
                <div
                    className="h-2 rounded bg-gradient-to-r from-yellow-400 to-orange-500"
                    style={{ width: `${Math.max(0, Math.min(100, percentage))}%` }}
                />
            </div>
            <span className="text-sm font-semibold text-gray-800 tabular-nums">{value.toFixed(1)}</span>
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

    const types = useMemo(() => ['All', ...Array.from(new Set(filamentData.map((f) => f.type)))], [])
    const brands = useMemo(() => ['All', ...Array.from(new Set(filamentData.map((f) => f.brand)))], [])

    const filteredAndSorted = useMemo(() => {
        const [min, max] = tdRange
        const lower = search.trim().toLowerCase()
        const result = filamentData
            .filter((f) => (filterType === 'All' ? true : f.type === filterType))
            .filter((f) => (filterBrand === 'All' ? true : f.brand === filterBrand))
            .filter((f) => f.td >= min && f.td <= max)
            .filter((f) =>
                lower === '' ? true : f.brand.toLowerCase().includes(lower) || f.color.toLowerCase().includes(lower),
            )
            .slice()
            .sort((a, b) => {
                const dir = sortDir === 'asc' ? 1 : -1
                if (sortKey === 'td') return (a.td - b.td) * dir
                if (sortKey === 'brand') return a.brand.localeCompare(b.brand) * dir
                return a.type.localeCompare(b.type) * dir
            })
        return result
    }, [filterType, filterBrand, search, tdRange, sortKey, sortDir])

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
            setSortDir(key === 'td' ? 'desc' : 'asc')
        }
    }

    // Removed CSV export functionality per request

    function handleCopyHex(hex: string) {
        navigator.clipboard?.writeText(hex).then(() => {
            setCopiedHex(hex)
            setTimeout(() => setCopiedHex(null), 1200)
        })
    }

    return (
        <div className="min-h-screen">
			{/* Header */}
			<div className="px-8 py-12 text-center bg-gradient-to-r from-yellow-50 to-orange-50">
				<div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Filament TD Table</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Light transmission measurements for filaments using the{' '}
						<a
							href="https://www.printables.com/model/552566-official-hueforge-td-step-test-and-light-box"
							target="_blank"
							rel="noopener noreferrer"
							className="text-orange-600 hover:text-orange-700 underline"
						>
							Official HueForge TD Step Test
						</a>{' '}
                        method.
					</p>
				</div>
			</div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-12">
				<div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        {/* Toolbar */}
                        <div className="p-4 bg-gray-50 border-b border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                                <div className="md:col-span-3">
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
                                    <select
                                        className="w-full rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
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
                                <div className="md:col-span-3">
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Brand</label>
                                    <select
                                        className="w-full rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
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
                                <div className="md:col-span-3">
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">TD range</label>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="number"
                                            step="0.1"
                                            min={TD_MIN}
                                            max={tdRange[1]}
                                            value={tdRange[0]}
                                            onChange={(e) =>
                                                setTdRange([Math.min(Number(e.target.value), tdRange[1]), tdRange[1]])
                                            }
                                            className="w-full rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                                        />
                                        <span className="text-gray-400">–</span>
                                        <input
                                            type="number"
                                            step="0.1"
                                            min={tdRange[0]}
                                            max={TD_MAX}
                                            value={tdRange[1]}
                                            onChange={(e) =>
                                                setTdRange([tdRange[0], Math.max(Number(e.target.value), tdRange[0])])
                                            }
                                            className="w-full rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-3">
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">Search</label>
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Brand or hex"
                                        className="w-full rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    />
                                </div>

                                <div className="md:col-span-6 flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <label className="text-xs font-semibold text-gray-700">Sort</label>
                                        <select
                                            className="rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                                            value={sortKey}
                                            onChange={(e) => setSortKey(e.target.value as SortKey)}
                                        >
                                            <option value="td">TD</option>
                                            <option value="brand">Brand</option>
                                            <option value="type">Type</option>
                                        </select>
                                        <select
                                            className="rounded-md border-gray-300 text-sm focus:ring-yellow-500 focus:border-yellow-500"
                                            value={sortDir}
                                            onChange={(e) => setSortDir(e.target.value as SortDir)}
                                        >
                                            <option value="asc">Asc</option>
                                            <option value="desc">Desc</option>
                                        </select>
                                    </div>
                                    <div className="ml-auto flex items-center gap-2">
                                        <button
                                            onClick={resetFilters}
                                            className="inline-flex items-center px-3 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                <div className="md:col-span-6 text-sm text-gray-600 md:text-right">
                                    Showing {filteredAndSorted.length} of {filamentData.length} • Avg TD {avgTd.toFixed(1)}
                                </div>
                            </div>
                        </div>
						{/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full">
                                <thead className="sticky top-0 z-10">
                                    <tr className="bg-gradient-to-r from-yellow-50 to-orange-50/90 backdrop-blur border-b border-gray-200">
                                        <th
                                            className="px-8 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider w-1/6 cursor-pointer select-none"
                                            onClick={() => toggleSort('type')}
                                        >
                                            Type {sortKey === 'type' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                                        </th>
                                        <th className="px-8 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider w-2/5">
                                            Color
                                        </th>
                                        <th
                                            className="px-8 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider w-1/4 cursor-pointer select-none"
                                            onClick={() => toggleSort('brand')}
                                        >
                                            Brand {sortKey === 'brand' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                                        </th>
                                        <th
                                            className="px-8 py-4 text-center text-xs font-semibold text-gray-800 uppercase tracking-wider w-1/6 cursor-pointer select-none"
                                            onClick={() => toggleSort('td')}
                                        >
                                            TD {sortKey === 'td' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredAndSorted.map((filament, index) => (
                                        <tr key={`${filament.brand}-${filament.color}-${index}`} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {filament.type}
                                            </td>
                                            <td className="px-8 py-5 whitespace-nowrap">
                                                <ColorSwatch color={filament.color} onCopy={handleCopyHex} copied={copiedHex === filament.color} />
                                            </td>
                                            <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-700 font-medium">
                                                {filament.brand}
                                            </td>
                                            <td className="px-8 py-5 whitespace-nowrap text-center">
                                                <TDGauge value={filament.td} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

						{/* Mobile Cards */}
                        <div className="md:hidden divide-y divide-gray-200">
                            {filteredAndSorted.map((filament, index) => (
                                <div key={`${filament.brand}-${filament.color}-${index}`} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{filament.type}</h3>
                                                <p className="text-sm text-gray-600 font-medium">{filament.brand}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 shadow-sm">
                                                    TD: {filament.td}
                                                </span>
                                                <div>
                                                    <TDGauge value={filament.td} />
                                                </div>
                                            </div>
                                        </div>
                                        <ColorSwatch color={filament.color} onCopy={handleCopyHex} copied={copiedHex === filament.color} />
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