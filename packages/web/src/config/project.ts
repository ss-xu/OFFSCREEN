export interface DetailItem {
    imgUrls: string[];
    iframeUrl: string;
}

export const ProjectConfig: DetailItem[] = [
    {
        // 项目页左侧图片，内容：图片ID，多个逗号隔开
        imgUrls: ['1mWX-DIBgHeUGXFtmQEHwJKK67mvDt1GA', '1PTshF1tLI3xFY41WsOu1S3bzNh_KLGWI'],
        // 项目右侧内容， Word转HTML本地地址
        iframeUrl: 'project_1.html'
    },
    {
        imgUrls: ['1DdxpO4qrKQ_Lr-ewtHUBUx_HA7KGdGpm', '11oa8P5aUlsWvyxyDS0MZ1-2p3z_q67Bj', '1H1EYE2VbyifKBl6g4JrAIV2OPpRzPjs9'],
        iframeUrl: 'project_2.html'
    }
];
