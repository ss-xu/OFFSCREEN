<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~normalize.css";
    @import "common/common.scss";

    * {
        box-sizing: border-box;
        font-family: Arial, sans-serif;
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
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
