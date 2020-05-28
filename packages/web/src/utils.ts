export enum PreviewType {
    iframe = 'iframe',
    image = 'image',
}

export interface PreviewIframeConfig {
    url: string;
}

export interface PreviewImageConfig {
    urls: string[];
}

export interface PreView {
    type: PreviewType;
    config: PreviewIframeConfig | PreviewImageConfig;
}


export interface CommonPreviewItem {
    title: string;
    modalName: string;
    previewUrl: string;
    previewConfig: PreView;
}
