<script lang="ts">
	export let alt: string | undefined = undefined;
	export let src: string | Promise<string> = undefined;
	export let presrc: string =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
	let klass: string | undefined = undefined;
	export { klass as class };
</script>

{#if src instanceof Promise}
	{#await src}
		<div />
	{:then resolvedSrc}
		<img class={klass} data-src={resolvedSrc} {alt} src={presrc} />
	{/await}
{:else}
	<img class={klass} data-src={src} {alt} src={presrc} />
{/if}
