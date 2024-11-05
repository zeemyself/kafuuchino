<!--<script>-->
<!--	import { browser } from '$app/environment'-->
<!--	const canvas = document.querySelector("canvas")-->
<!--</script>-->

<script>
	import { onMount } from 'svelte'
	import to from 'await-to-js'

	let device = $state('Loading')

	onMount(() => {
		const canvas = document.querySelector('canvas')
		if (!canvas) return
		const ctx = canvas.getContext('2d')

		async function getGPUStatus() {
			if (!navigator.gpu) {
				device = 'WebGPU not supported.'
				return
			}
			const [err, adapter] = await to(navigator.gpu.requestAdapter())
			if (err) {
				device = 'WebGPU requesting adapter. \n' + err.message
				return
			}
			await adapter.requestDevice()
			device = 'Device requested'
			// console.log(adapter, device)
			// const gl = canvas.getContext('webgl')
			// const context = canvas.getContext('gpupresent')
			// const gpu = navigator.gpu
			// const gpuStatus = {
			// 	adapter,
			// 	device,
			// 	gl,
			// 	context,
			// 	gpu
			// }
			// return gpuStatus
		}

		getGPUStatus()

		// Function to generate a random number
		function random(min, max) {
			return Math.random() * (max - min) + min
		}

		// Dot object
		const dot = {
			x: random(0, canvas.width),
			y: random(0, canvas.height),
			vx: random(-5, 5),
			vy: random(-5, 5),
			radius: 10
		}

		// Function to update dot's position
		function updateDot() {
			dot.x += dot.vx
			dot.y += dot.vy

			// Check for boundary collision
			if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx
			if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy
		}

		// Function to draw dot
		function drawDot() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.beginPath()
			ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false)
			ctx.fillStyle = 'red'
			ctx.fill()
		}

		// Main loop
		function loop() {
			updateDot()
			drawDot()
			requestAnimationFrame(loop)
		}

		loop()
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<div id="canvas-container">
		<canvas></canvas>
	</div>
	<p>
		GPU Status: {device}
	</p>
</div>

<!--<svelte:head>-->
<!--  <title>Home</title>-->
<!--  <meta name="description" content="Svelte demo app" />-->
<!--</svelte:head>-->

<!--<div>-->
<!--  <canvas width="512" height="512"></canvas>-->
<!--</div>-->

<style>
	canvas {
		width: 70vw;
		border: 1px solid black;
	}

	#canvas-container {
		/*display: flex;*/
		justify-content: center;
		/*align-items: center;*/
		/*height: 100vh; !* Adjust as needed *!*/
	}

	/*  #canvas-container {*/
	/*      position: absolute;*/
	/*      top: 50%;*/
	/*      left: 50%;*/
	/*      transform: translate(-50%, -50%);*/
	/*  }*/

	/*div {*/
	/*    !*display: flex;*!*/
	/*    !*justify-content: center;*!*/
	/*    !*align-items: center;*!*/
	/*}*/
</style>
