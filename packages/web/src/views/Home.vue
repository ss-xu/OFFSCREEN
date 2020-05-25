<template>
    <div class="home">
        <div class="locale">
            <span :class="isEnActiveClass" @click="activeLocale = 'en'">En</span> | <span :class="isItActiveClass"
                                                                                          @click="activeLocale = 'it'">It</span>
        </div>
        <div class="home-content">
            <ul class="video-list">
                <li v-for="video in videoList" :key="video.id" class="video-item"
                    :class="activeVideoId === video.id ? 'active' : ''" :style="video.style">
                    <img :src="video.preview" alt="preview" @click="handleViewShow(video)"/>
                    <div class="video-frame" v-if="activeVideoId === video.id" v-html="video.iframe"/>
                </li>
            </ul>
            <span class="video-close" v-if="activeVideoId !== -1" @click="activeVideoId = -1">< Back</span>
            <div class="home-info" v-show="activeVideoId === -1">
                <span class="author" @click="handleAuthorPage">{{ $t('home.author')}}</span>
                <span class="projectName" @click="handleCuratorPage">{{ $t('home.projectName')}}</span>
                <span class="curator">{{ $t('home.curator')}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    interface VideoItem {
        id: number;
        iframe: string;
        preview: any;
        style: object;
        videoInfo?: {
            title: string;
            author: string;
            desc: string;
        }
    }

    @Component({})
    export default class Home extends Vue {
        private activeLocale: 'en' | 'it' = 'en';
        private activeVideoId: number = -1;
        private videoList: VideoItem[] = [
            {
                id: 1,
                iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LlividaBcE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                preview: require('@/assets/video_1@2x.webp'),
                style: {
                    width: '100%',
                }
            },
            {
                id: 2,
                iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LlividaBcE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                preview: require('@/assets/video_2@2x.webp'),
                style: {
                    width: '77%',
                }
            },
            {
                id: 3,
                iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LlividaBcE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                preview: require('@/assets/video_3@2x.webp'),
                style: {
                    width: '59%',
                }
            },
            {
                id: 4,
                iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LlividaBcE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                preview: require('@/assets/video_4@2x.webp'),
                style: {
                    width: '46%',
                }
            },
            {
                id: 5,
                iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LlividaBcE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                preview: require('@/assets/video_5@2x.webp'),
                style: {
                    width: '36%',
                }
            },
            {
                id: 6,
                iframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LlividaBcE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                preview: require('@/assets/video_6@2x.webp'),
                style: {
                    width: '22%',
                }
            },
            {
                id: 7,
                iframe: '',
                preview: require('@/assets/home-animate.gif'),
                style: {
                    width: '8%',
                }
            }
        ];

        private get isEnActiveClass() {
            return this.activeLocale === 'en' ? 'active' : '';
        }

        private get isItActiveClass() {
            return this.activeLocale === 'it' ? 'active' : '';
        }

        private handleViewShow(videoItem: VideoItem) {
            if (videoItem.id === 7) {
                return;
            }
            this.activeVideoId = videoItem.id;
        }

        private handleAuthorPage() {
            this.$router.push({});
        }

        private handleCuratorPage() {
            this.$router.push({});
        }

        private created() {
            document.body.className = 'home';
        }

        private beforeDestroy() {
            document.body.className = '';
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        height: 100%;
        background: #000;
        padding: 30px 96px 0 96px;
        display: flex;
        flex-direction: column;

        .home-content {
            flex: 1;
        }
    }

    .locale {
        margin-bottom: 12px;
        text-align: right;
        font-size: 18px;
        font-family: TimesNewRomanPSMT, sans-serif;
        font-weight: bold;
        color: rgba(87, 87, 87, 1);
        line-height: 18px;

        span.active {
            color: #fff;
        }
    }

    .home-content {
        position: relative;
    }

    .video-list {
        position: relative;
        height: 100%;
    }

    .video-item {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 100%;
            max-width: 100%;
            cursor: pointer;
        }

        &:last-child {
            img {
                cursor: default;
            }
        }

        &.active {
            z-index: 10;
        }
    }

    .video-frame {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }

    .video-close {
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translate(100%, -50%);
        font-size: 24px;
        font-family: TimesNewRomanPSMT, sans-serif;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    }

    .home-info {
        position: absolute;
        right: -26px;
        top: 50%;
        transform: translate(0, -50%);
        text-align: right;
        display: flex;
        flex-direction: column;

        span {
            margin-bottom: 25px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        .author {
            font-size: 40px;
            font-family: TimesNewRomanPSMT, sans-serif;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 53px;
            cursor: pointer;
        }

        .projectName {
            font-size: 50px;
            font-family: TimesNewRomanPS-ItalicMT, sans-serif;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 69px;
            font-style: italic;
            cursor: pointer;
        }

        .curator {
            font-size: 35px;
            font-family: TimesNewRomanPSMT, sans-serif;;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 46px;
        }
    }

</style>
