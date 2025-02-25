import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run dev',
		port: 5173,  // Default Vite dev server port
		reuseExistingServer: true
	},
	testDir: 'tests',
	testMatch: ['**/*.test.ts']
}

export default config
