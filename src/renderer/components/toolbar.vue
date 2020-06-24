<template>
    <div class="toolbar">
        <Icon class="btn" type="ios-remove" size="30" @click.native="min()"/>
        <Icon type="ios-close" size="30" @click.native="close()"/>
    </div>
</template>

<script>
    import { ipcRenderer } from 'electron'
    export default {
      name: 'toolbar',
      methods: {
        min() {
          console.log(ipcRenderer)
          ipcRenderer.send('min')
        },
        close() {
          console.log(ipcRenderer)
          ipcRenderer.send('close')
        }
      }
    }
</script>

<style scoped>
    .toolbar{
        text-align: right;
        -webkit-app-region: drag;
    }
    .btn{
        -webkit-app-region: no-drag;
    }
</style>