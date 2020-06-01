export interface VideoItem {
    id: number;
    url: string;
    previewUrl: any;
    style: object;
    videoInfo?: {
        title: string;
        author: string;
        desc: string;
    }
}

export const HomeConfig: VideoItem[] = [
    {
        id: 1,
        url: '//www.youtube.com/embed/LiXMfZS32WI',
        previewUrl: '1-SRBcLtEQgbIJtvb_MzdGVWog4SWtUAT',
        style: {
            width: '100%',
        }
    },
    {
        id: 2,
        url: '//www.youtube.com/embed/6LlividaBcE',
        previewUrl: '1OfkE6ea7I11ODIKmDHXHH9IfXNQNw-IG',
        style: {
            width: '77%',
        }
    },
    {
        id: 3,
        url: '//www.youtube.com/embed/_6UMkSV0V_4',
        previewUrl: '1OqtQSxZFsJ1dmlBGtHE4YjJX6X3c4l5S',
        style: {
            width: '59%',
        }
    },
    {
        id: 4,
        url: '//www.youtube.com/embed/3UXWN95nqwc',
        previewUrl: '1n9IKe-zwOxv4mT2i8ZSEuJsip8-qAuDw',
        style: {
            width: '45%',
        }
    },
    {
        id: 5,
        url: '//www.youtube.com/embed/HUcgrxHeWBQ',
        previewUrl: '1P-9cFDYgfsihBQD1GSMNn2pAwRq0QWQM',
        style: {
            width: '34%',
        }
    },
    {
        id: 6,
        url: '//www.youtube.com/embed/xgLA03Yo-WE',
        previewUrl: '1PxWGmvF8HdnM6aVtoY4flazrt30LIVAb',
        style: {
            width: '25%',
        }
    },
    {
        id: 7,
        url: '',
        previewUrl: '1r78HZqcDb6iWMq0hEh0wjg3bvC908ahK',
        style: {
            width: '8%',
        }
    }
];
