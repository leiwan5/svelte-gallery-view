<script lang="ts">
	import Image from "./Image.svelte";
	import type { Photo } from "./index.d";
	export let photos: Photo[] = [];
	export let baseHeight: number = 200;
	export let gap: number = 2;
	export let imageClass: string | undefined = undefined;
	export let imageOnClick: () => any;
</script>

<div class="gallery">
	<div class="section" style="--gap: {gap}px;">
		{#each photos as photo}
			<div
				class={`image ${imageClass}`}
				on:click={imageOnClick}
				style="
					--ratio: {(photo.height * 100.0) / photo.width}%;
					--width: {(baseHeight * photo.width) / photo.height}px;
					--flex-grow: {(baseHeight * photo.width) / photo.height};
				"
			>
				<div class="spacer" />
				<Image src={photo.url} alt={photo.info} class="img lazyload" />
			</div>
		{/each}
		{#each new Array(10) as item}
			<div class="dummy" />
		{/each}
	</div>
</div>

<style>
	.section {
		display: flex;
		flex-wrap: wrap;
	}
	.gallery::after {
		content: '';
		flex-grow: 999999999;
		min-width: 200px;
		height: 0;
	}
	.image {
		flex-grow: var(--flex-grow);
		width: var(--width);
		margin: var(--gap);
		align-self: flex-start;
		position: relative;
		border: none;
	}
	.spacer {
		content: '';
		display: block;
		padding-bottom: var(--ratio);
	}
	.image :global(.img) {
		object-fit: cover;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		vertical-align: bottom;
		border: 0;
	}
	.dummy {
		height: 0;
		flex-grow: 200;
	}
</style>
