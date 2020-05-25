<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~normalize.css";

    * {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body.home {
        height: 100vh;
        background: #000;

        #app {
            height: 100%;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
