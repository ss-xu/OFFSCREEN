<template>
    <div class="home">
        <div class="header">
            <div class="nav">
                <span>X</span>
                <span>O</span>
                <span>D</span>
            </div>
            <div class="locale">
                <span :class="isEnActiveClass" @click="activeLocale = 'en'">En</span> | <span :class="isItActiveClass" @click="activeLocale = 'it'">It</span>
            </div>
        </div>
        <ul class="video-list">
            <li v-for="video in videoList"
                :key="video.id" class="video-item"
                :class="{
                    active: activeVideoId === video.id,
                    ready: isActiveYTReady,
                }"
                :style="video.style"
            >
                <img :src="video.preview" alt="preview" @click="handleViewShow(video)"/>
                <iframe v-if="activeVideoId === video.id" :src="video.url + videoUrlQuery" width="100%" height="100%"
                        id="video-frame" frameborder="0"/>
            </li>
        </ul>
        <div class="video-info" v-if="isShowVideoInfo">
            <span class="title">{{activeVideoInfo.title}}</span>
            <span class="date">{{activeVideoInfo.date}}</span>
            <span class="desc">{{activeVideoInfo.desc}}</span>
        </div>
        <span class="video-close" v-if="activeVideoId !== -1" @click="handleVideoClose">< Back</span>
    </div>
</template>

<script lang="ts">
    /// <reference types="youtube"/>
    import { Vue, Component, Watch } from 'vue-property-decorator';
    import { getOrigin } from '@/common/utils';

    interface VideoItem {
        id: number;
        url: string;
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
        private ytPlayer: YT.Player | null = null;
        private isActiveYTReady: boolean = false;
        private activeYTState: YT.PlayerState = -1;
        private activeLocale: 'en' | 'it' = 'en';
        private activeVideoId: number = -1;
        private videoList: VideoItem[] = [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/6LlividaBcE',
                preview: require('@/assets/video_1@2x.webp'),
                style: {
                    width: '100%',
                }
            },
            {
                id: 2,
                url: 'https://www.youtube.com/embed/6LlividaBcE',
                preview: require('@/assets/video_2@2x.webp'),
                style: {
                    width: '77%',
                }
            },
            {
                id: 3,
                url: 'https://www.youtube.com/embed/6LlividaBcE',
                preview: require('@/assets/video_3@2x.webp'),
                style: {
                    width: '59%',
                }
            },
            {
                id: 4,
                url: 'https://www.youtube.com/embed/6LlividaBcE',
                preview: require('@/assets/video_4@2x.webp'),
                style: {
                    width: '45%',
                }
            },
            {
                id: 5,
                url: 'https://www.youtube.com/embed/6LlividaBcE',
                preview: require('@/assets/video_5@2x.webp'),
                style: {
                    width: '34%',
                }
            },
            {
                id: 6,
                url: 'https://www.youtube.com/embed/6LlividaBcE',
                preview: require('@/assets/video_6@2x.webp'),
                style: {
                    width: '25%',
                }
            },
            {
                id: 7,
                url: '',
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

        private get videoUrlQuery() {
            return `?rel=0&enablejsapi=1&origin=${getOrigin()}`;
        }

        private get activeVideoInfo() {
            if (this.activeVideoId === -1) {
                return;
            }
            return {
                title: this.$t(`home_video_${this.activeVideoId}.title`),
                date: this.$t(`home_video_${this.activeVideoId}.date`),
                desc: this.$t(`home_video_${this.activeVideoId}.desc`),
            }
        }

        private get isShowVideoInfo() {
            const isPlaying = this.activeYTState === 1;
            const isPaused = this.activeYTState === 2;
            const isEnded = this.activeYTState === 0;
            return (!!this.activeVideoInfo && !isPlaying) || (isPaused || isEnded);
        }

        @Watch('activeLocale')
        private watchActiveLocale(n: string, o: string) {
            if (n !== o && o) {
                this.$i18n.locale = n;
            }
        }

        private handleViewShow(videoItem: VideoItem) {
            if (videoItem.id === 7 || this.activeVideoId !== -1) {
                return;
            }
            this.activeVideoId = videoItem.id;
            this.$nextTick(() => {
                this.ytPlayer = new window.YT.Player('video-frame', {
                    events: {
                        onReady: this.onPlayerReady,
                        onStateChange: this.onPlayerStateChange
                    }
                });
            });
        }

        private onPlayerReady(event: YT.PlayerEvent) {
            this.isActiveYTReady = true;
        }

        private onPlayerStateChange(event: YT.OnStateChangeEvent) {
            const { data } = event;
            this.activeYTState = data;
        }

        private resetYtStatus() {
            this.ytPlayer = null;
            this.isActiveYTReady = false;
            this.activeYTState = -1;
        }

        private handleVideoClose() {
            this.activeVideoId = -1;
            this.resetYtStatus();
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
        width: 70%;
        position: relative;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        height: 15px;
    }

    .nav {
        font-size: 15px;
        font-weight: bold;
        color: rgba(94, 93, 93, 1);
        line-height: 74px;

        span {
            margin-right: 11px;
            cursor: pointer;

            &:hover {
                color: #fff;
            }

            &:last-child {
                margin-right: 0;
            }

        }
    }

    .locale {
        text-align: right;
        font-size: 15px;
        font-family: Times New Roman, sans-serif;
        font-weight: bold;
        color: rgba(87, 87, 87, 1);
        line-height: 74px;

        span {
            cursor: pointer;

            &.active {
                color: #fff;
            }

            &:hover {
                color: #fff;
            }
        }
    }

    .video-list {
        position: relative;
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

        &:first-child {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
        }

        &:last-child {
            img {
                cursor: default;
            }
        }

        &.active {
        }

        &.active.ready {
            z-index: 10;

            img {
                visibility: hidden;
            }
        }

        iframe {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
        }
    }

    .video-info {
        width: 52%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-30px, -50%);
        z-index: 10;

        .title {
            font-size: 18px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 23px;
            margin-bottom: 3px;
        }

        .date {
            font-size: 14px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 23px;
            margin-bottom: 30px;
        }

        .desc {
            font-size: 14px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 24px;
        }
    }

    .video-close {
        position: absolute;
        right: -8px;
        top: 50%;
        transform: translate(100%, -50%);
        cursor: pointer;
        font-size: 19px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
    }
</style>
