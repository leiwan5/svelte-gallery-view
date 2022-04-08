import GalleryView from "./GalleryView.svelte";

export interface Photo {
	/**
 	* URL or unsolved URL of the photo.
    */
	url: string | Promise<string>;
	/**
 	* Width of the photo.
    */
	width: number;
	/**
 	* Height of the photo.
    */
	height: number;
	/**
 	* Extra information which shown as a tooltip text on the photo.
    */
	title?: string;
	/**
 	* Any properties could be useful in callback function onPhotoClick.
    */
	[key: string]: unknown;
}

export default GalleryView;
