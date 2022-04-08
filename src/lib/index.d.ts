import GalleryView from "./GalleryView.svelte";

export interface Photo {
	url: string;
	width: number;
	height: number;
	title?: string;
	metadata?: {[key:string]: string | number};
}

export default GalleryView;
