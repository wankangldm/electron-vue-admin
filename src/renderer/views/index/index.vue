<script>
    import Card from '@/components/card'
    import List from '@/components/list'
    import SendText from '@/components/text'
    import Message from '@/components/message'
    import Toolbar from '@/components/toolbar'
    import { remote } from 'electron'

    export default {
      components: { Card, List, SendText, Message, Toolbar },
      created() {
        remote.getCurrentWindow().setSize(800, 563)
        this.$store.commit('INIT_DATA')
      }
    }
</script>

<template>
    <div id="app">
        <div class="sidebar">
            <card></card>
            <list></list>
        </div>
        <div class="main">
            <toolbar></toolbar>
            <message></message>
            <send-text></send-text>
        </div>
    </div>
</template>

<style lang="less" scoped>
    #app {
        /*margin: 20px auto;*/
        width: 100%;
        /*width: 800px;*/
        height: 560px;

        overflow: hidden;
        border-radius: 3px;

        .sidebar, .main {
            height: 100%;
        }

        .sidebar {
            float: left;
            width: 200px;
            color: #f4f4f4;
            background-color: #2e3238;
        }

        .main {
            position: relative;
            overflow: hidden;
            background-color: #eee;
        }

        .text {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
        }

        .message {
            height: ~'calc(100% - 160px)';
        }
    }
</style>

