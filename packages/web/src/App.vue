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
        #app {
            height: 100%;
        }
    }

    /*
 * For modern browsers
 * 1. The space content is one way to avoid an Opera bug when the
 *  contenteditable attribute is included anywhere else in the document.
 *  Otherwise it causes space to appear at the top and bottom of elements
 *  that are clearfixed.
 * 2. The use of `table` rather than `block` is only necessary if using
 * `:before` to contain the top-margins of child elements.
 */
    .cf:before,
    .cf:after {
        content: " "; /* 1 */
        display: table; /* 2 */
    }

    .cf:after {
        clear: both;
    }

    /*
     * For IE 6/7 only
     * Include this rule to trigger hasLayout and contain floats.
     */
    .cf {
        zoom: 1;
    }

</style>
