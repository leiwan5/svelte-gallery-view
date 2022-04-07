import { SvelteComponentTyped } from 'svelte';

export interface Photo {
	url: string;
	width: number;
	height: number;
	info?: string;
}

export interface GalleryViewProps {
	photos: Photo[];
	baseHeight?: number;
	gap?: number;
}

export default class Gallery extends SvelteComponentTyped<GalleryViewProps> {}
