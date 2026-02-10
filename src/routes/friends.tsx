import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/friends')({
	component: Friends,
})

interface Friend {
	name: string
	role: string
	description: string
	color: string
	icon: string
}

const friends: Friend[] = [
	{
		name: 'Cocoa Hoto',
		role: 'Employee at Rabbit House',
		description:
			'A positive and energetic girl who moved into the Rabbit House. She treats Chino like a little sister and loves anything cute.',
		color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-200',
		icon: '🍞',
	},
	{
		name: 'Rize Tedeza',
		role: 'Employee at Rabbit House',
		description:
			'A part-timer with a military background. She is physically strong and disciplined but has a hidden lonely side.',
		color:
			'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200',
		icon: '🔫',
	},
	{
		name: 'Chiya Ujimatsu',
		role: 'Classmate / Ama Usa An',
		description:
			"Chino's classmate and waitress at Ama Usa An. She is gentle and harmonious but often gives her menu items eccentric names.",
		color:
			'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200',
		icon: '🍵',
	},
	{
		name: 'Syaro Kirima',
		role: 'Fleur de Lapin',
		description:
			'A sophisticated but easily flustered girl who worries about her image. She is friends with Rize and Chiya.',
		color:
			'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200',
		icon: '☕',
	},
	{
		name: 'Maya Jouga',
		role: 'Classmate',
		description:
			"One of Chino's best friends from middle school. She is energetic, mischievous, and looks up to Rize.",
		color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
		icon: '🧢',
	},
	{
		name: 'Megumi Natsu',
		role: 'Classmate',
		description:
			"Chino's other best friend from middle school. She is soft-spoken, kind-hearted, and skilled at ballet.",
		color: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
		icon: '🩰',
	},
]

function Friends() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
			{/* Header */}
			<div className="px-8 py-16 text-center bg-white dark:bg-slate-800 shadow-sm">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
						Chino's Friends
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
						The wonderful people who make every day at the Rabbit House lively
						and special.
					</p>
				</div>
			</div>

			{/* Friends Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{friends.map((friend) => (
						<div
							key={friend.name}
							className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
						>
							<div className="p-8">
								<div
									className={`w-16 h-16 ${friend.color} rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner`}
								>
									{friend.icon}
								</div>

								<h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
									{friend.name}
								</h2>
								<div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mb-4">
									{friend.role}
								</div>

								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
									{friend.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
