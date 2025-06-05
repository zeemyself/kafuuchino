<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<svelte:head>
	<title>Hueforge STL</title>
	<meta name="description" content="Convert STL and data to 3MF" />
</svelte:head>

<h1>Hueforge STL</h1>

<form method="POST" enctype="multipart/form-data" use:enhance>
	<div>
		<label>
			STL File:
			<input type="file" name="stl" accept=".stl" required />
		</label>
	</div>
	<div>
		<label>
			Data String:
			<textarea name="data" rows="5" required></textarea>
		</label>
	</div>
	<button type="submit">Generate 3MF</button>
</form>
