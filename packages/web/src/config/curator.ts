import { CommonPreviewItem, PreviewType } from '@/utils';
import { nanoid } from 'nanoid';

export const CuratorConfig: CommonPreviewItem[] = [
    {
        title: 'Quaderno del progetto',
        modalName: nanoid(),
        previewUrl: '1N3T_VNxm83cilUaW6lq-oDeCvo5NeSCS',
        previewConfig: {
            type: PreviewType.image,
            config: {
                urls: [
                    '19eBMlQqbkvIxiJcyHn-nU8XUgGKkDndd',
                    '1pws189c16ApbBTpVeFZ5981jwherzs5E',
                    '1BcY7NMlzj4lRrZcdAiIZ0uOwHrGQ9LWR',
                    '1qUoTktpMouByZSk1UiJMM_3M0aqAzvOb',
                    '1rSgtz4ZSRSNEffTvR6VeC6tQnV7g3JuX',
                    '13rumr6sJ0SkG8m6uKj1EjJTQ8wcj1AZo'
                ]
            }
        }
    },
    {
        title: 'Prima email',
        modalName: nanoid(),
        previewUrl: '1jBSO-6eUxxjFPoM6arIghqi9dpjT_4_6',
        previewConfig: {
            type: PreviewType.image,
            config: {
                urls: ['1jBSO-6eUxxjFPoM6arIghqi9dpjT_4_6']
            }
        }
    },
    {
        title: 'Flash da 1° visione',
        modalName: nanoid(),
        previewUrl: '1QPg5E5XWysjcshuvoAKQ-4IUxDMxHrl5',
        previewConfig: {
            type: PreviewType.iframe,
            config: {
                url: '//drive.google.com/file/d/1cOT42FU8y8V42dML-OxEY5QukEymxT5p/preview',
            }
        }
    },
    {
        title: 'Q&A definitivo',
        modalName: nanoid(),
        previewUrl: '1UzT-GQKPfVWeYJkNhEV7R-j7qSiLU-No',
        previewConfig: {
            type: PreviewType.iframe,
            config: {
                url: '//drive.google.com/file/d/1LA5mEcffbzh3gPLsZx8f6p_KTJW0dHkU/preview',
            }
        }
    },
];
