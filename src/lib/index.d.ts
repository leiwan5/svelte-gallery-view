import GalleryView from "./GalleryView.svelte";

export interface Photo {
	url: string;
	width: number;
	height: number;
	info?: string;
}

export default GalleryView;
