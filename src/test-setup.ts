import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Svelte's built-in transitions
vi.mock('svelte/transition', () => ({
	fade: () => ({
		duration: 0,
		css: () => '',
		tick: () => {}
	})
}))
