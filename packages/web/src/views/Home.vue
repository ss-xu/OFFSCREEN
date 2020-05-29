<template>
    <div class="home">
        <div class="header">
            <div class="nav" :class="{'temp-active': isNavTempActive}">
                <span @click="handlePageJump('about')">X<span class="tooltip">{{$t('about.author')}}</span></span>
                <span @click="handlePageJump('project')">O<span class="tooltip">{{$t('about.projectName')}}</span></span>
                <span @click="handlePageJump('curator')">D<span class="tooltip">{{$t('about.curatorAuthor')}}</span></span>
            </div>
            <div class="locale">
                <span :class="isEnActiveClass" @click="activeLocale = 'en'">En</span> | <span :class="isItActiveClass"
                                                                                              @click="activeLocale = 'it'">It</span>
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
                <iframe v-if="activeVideoId === video.id"
                        :src="video.url + videoUrlQuery"
                        width="100%"
                        height="100%"
                        id="video-frame"
                        frameborder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen/>
            </li>
        </ul>
        <div class="video-info" v-if="isShowVideoInfo">
            <div>
                <span class="title">{{activeVideoInfo.title}}</span>
                <span class="date">{{activeVideoInfo.date}}</span>
            </div>
            <span class="desc">{{activeVideoInfo.desc}}</span>
        </div>
        <span class="video-close" v-if="activeVideoId !== -1" @click="handleVideoClose">< Back</span>
    </div>
</template>

<script lang="ts">
    /// <reference types="youtube"/>
    import { Vue, Component, Watch } from 'vue-property-decorator';
    import { getOrigin } from '@/common/utils';
    import { ROUTER_ABOUT, ROUTER_CURATOR, ROUTER_PROJECT } from '@/router';

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
        private isNavTempActive: boolean = false;
        private navTempActiveInterval: ReturnType<typeof setTimeout> | undefined;
        private activeVideoId: number = -1;
        private videoList: VideoItem[] = [
            {
                id: 1,
                url: '//www.youtube.com/embed/LiXMfZS32WI',
                preview: require('@/assets/video_1@2x.webp'),
                style: {
                    width: '100%',
                }
            },
            {
                id: 2,
                url: '//www.youtube.com/embed/6LlividaBcE',
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
                url: '//www.youtube.com/embed/HUcgrxHeWBQ',
                preview: require('@/assets/video_5@2x.webp'),
                style: {
                    width: '34%',
                }
            },
            {
                id: 6,
                url: '//www.youtube.com/embed/xgLA03Yo-WE',
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
            return `?autoplay=1&fs=1&modestbranding=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(getOrigin())}`
        }

        private get activeVideoInfo() {
            if (this.activeVideoId === -1) {
                return;
            }
            return {
                title: this.$t(`home.video_${this.activeVideoId}.title`),
                date: this.$t(`home.video_${this.activeVideoId}.date`),
                desc: this.$t(`home.video_${this.activeVideoId}.desc`),
            }
        }

        private get isShowVideoInfo() {
            return !!this.activeVideoInfo;
        }

        @Watch('activeLocale')
        private watchActiveLocale(n: string, o: string) {
            if (n !== o && o) {
                this.$i18n.locale = n;
            }
        }

        private handleViewShow(videoItem: VideoItem) {
            if (this.activeVideoId !== -1) {
                return;
            }
            if (videoItem.id === 7) {
                this.isNavTempActive = true;
                if (this.navTempActiveInterval) {
                    clearInterval(this.navTempActiveInterval);
                }
                this.navTempActiveInterval = setTimeout(() => {
                    this.isNavTempActive = false
                }, 2000);
                return;
            }
            this.activeVideoId = videoItem.id;
            this.$nextTick(() => {
                if (window.YT) {
                    this.ytPlayer = new window.YT.Player('video-frame', {
                        events: {
                            onReady: this.onPlayerReady,
                            onStateChange: this.onPlayerStateChange
                        }
                    });
                }
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

        private handlePageJump(name: string) {
            let routerName = '';
            switch (name) {
                case 'about':
                    routerName = ROUTER_ABOUT;
                    break;
                case 'project':
                    routerName = ROUTER_PROJECT;
                    break;
                case 'curator':
                    routerName = ROUTER_CURATOR;
                    break;
            }
            if (routerName) {
                this.$router.push({
                    name: routerName,
                });
            }
        }

        private created() {
            document.body.className = 'home';
        }

        private beforeDestroy() {
            document.body.className = '';
            this.resetYtStatus();
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

        & > span {
            position: relative;
            margin-right: 11px;
            cursor: pointer;

            &:hover {
                color: #fff;
                .tooltip {
                    display: inline-block;
                }
            }

            &:last-child {
                margin-right: 0;
            }

            .tooltip {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, calc(-100% - 8px));
                color: #fff;
                white-space: nowrap;
                display: none;
                font-size: 16px;
            }

        }
        &.temp-active {
            color: #fff;
        }
    }

    .locale {
        text-align: right;
        font-size: 15px;
        font-family: Times New Roman, sans-serif;
        font-weight: bold;
        color: rgba(87, 87, 87, 1);

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
        margin-top: 7px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        z-index: 10;

        & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .title {
            height: 18px;
            font-size: 18px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
        }

        .date {
            height: 13px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
        }

        .desc {
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 18px;
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
