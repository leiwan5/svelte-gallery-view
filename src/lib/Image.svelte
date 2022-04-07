<script lang="ts">
	import blankImage from '../assets/blank.gif';
	export let alt: string | undefined = undefined;
	export let src: string | Promise<string> = undefined;
	let klass: string | undefined = undefined;
	export { klass as class };
</script>

{#if src instanceof Promise}
	{#await src}
		<div />
	{:then resolvedSrc}
		<img class={klass} data-src={resolvedSrc} {alt} src={blankImage} />
	{/await}
{:else}
	<img class={klass} data-src={src} {alt} src={blankImage} />
{/if}
