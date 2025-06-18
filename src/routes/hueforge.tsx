import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/hueforge')({
	component: Hueforge,
})

function Hueforge() {
	const [textInput, setTextInput] = useState('')
	const [stlFile, setStlFile] = useState<File | null>(null)
	const [isGenerating, setIsGenerating] = useState(false)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file && file.name.endsWith('.stl')) {
			setStlFile(file)
		} else {
			alert('Please select a valid .stl file')
			event.target.value = ''
		}
	}

	const handleGenerate = async () => {
		if (!textInput.trim()) {
			alert('Please enter some text')
			return
		}
		if (!stlFile) {
			alert('Please select an STL file')
			return
		}

		setIsGenerating(true)

		try {
			// Simulate processing time
			await new Promise((resolve) => setTimeout(resolve, 2000))

			// Create a dummy .3mf file for demonstration
			const blob = new Blob(
				[
					'<?xml version="1.0" encoding="UTF-8"?>\n<model xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">\n  <!-- Generated Hueforge 3MF file -->\n  <!-- Text: ' +
						textInput.substring(0, 100) +
						'... -->\n  <!-- Source STL: ' +
						stlFile.name +
						' -->\n</model>',
				],
				{ type: 'application/vnd.ms-package.3dmanufacturing-3dmodel+xml' },
			)

			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = `hueforge_${stlFile.name.replace('.stl', '.3mf')}`
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)
			URL.revokeObjectURL(url)
		} catch (error) {
			alert('Error generating 3MF file')
			console.error(error)
		} finally {
			setIsGenerating(false)
		}
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="px-8 py-12 text-center bg-gradient-to-r from-orange-50 to-red-50">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
							Hueforge Generator
						</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Transform your STL files into multi-color 3MF prints with custom
						text embedding
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="px-8 py-12">
				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
						<div className="space-y-8">
							{/* Text Input */}
							<div>
								<label
									htmlFor="text-input"
									className="block text-lg font-semibold text-gray-800 mb-3"
								>
									Text Content
								</label>
								<textarea
									id="text-input"
									value={textInput}
									onChange={(e) => setTextInput(e.target.value)}
									placeholder="Enter your text content here. This text will be embedded into the Hueforge processing..."
									className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
									rows={6}
								/>
								<p className="text-sm text-gray-500 mt-2">
									{textInput.length} characters
								</p>
							</div>

							{/* STL File Input */}
							<div>
								<label
									htmlFor="stl-file"
									className="block text-lg font-semibold text-gray-800 mb-3"
								>
									STL File
								</label>
								<div className="relative">
									<input
										id="stl-file"
										type="file"
										accept=".stl"
										onChange={handleFileChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
									/>
								</div>
								{stlFile && (
									<p className="text-sm text-green-600 mt-2 flex items-center">
										<svg
											className="w-4 h-4 mr-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										{stlFile.name} ({(stlFile.size / 1024 / 1024).toFixed(2)}{' '}
										MB)
									</p>
								)}
							</div>

							{/* Generate Button */}
							<div className="pt-4">
								<button
									onClick={handleGenerate}
									disabled={isGenerating || !textInput.trim() || !stlFile}
									className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
								>
									{isGenerating ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											<span>Generating 3MF File...</span>
										</>
									) : (
										<>
											<svg
												className="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												/>
											</svg>
											<span>Generate 3MF File</span>
										</>
									)}
								</button>
							</div>

							{/* Info Section */}
							<div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
								<div className="flex items-start space-x-3">
									<svg
										className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5"
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
										<h3 className="font-semibold text-orange-800 mb-1">
											How it works
										</h3>
										<p className="text-orange-700 text-sm">
											Upload your STL file and enter text content. The generator
											will process your inputs and create a 3MF file optimized
											for Hueforge multi-color printing with embedded text data.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
