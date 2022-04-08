<script>
	import GalleryView from '$lib';
	import photos from './photos.json';
</script>

<GalleryView
	photos={photos}
	baseHeight={120}
	gutter={4}
	photoClass="photo"
	onPhotoClick={console.log}
/>
