<script>
    export default {
      computed: {
        sessions() {
          return this.$store.state.sessions.filter(session => session.user.name.includes(this.$store.state.filterKey))
        },
        currentId() {
          return this.$store.state.currentSessionId
        }
      },
      methods: {
        selectSession(id) {
          this.$store.commit('SELECT_SESSION', id)
        }
      }
    }
</script>

<template>
    <div class="list">
        <ul>
            <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
                <img class="avatar" width="30" height="30" :alt="item.user.name" :src="item.user.img">
                <p class="name">{{item.user.name}}</p>
            </li>
        </ul>
        <!--<List size="small">
            <ListItem v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
                <ListItemMeta>
                    <template slot="avatar">
                        <img class="avatar" width="30" height="30" :alt="item.user.name" :src="item.user.img">
                    </template>
                    <template slot="title">
                        <p class="name">{{item.user.name}}</p>
                    </template>
                    <template slot="description">
                        <p>消息</p>
                    </template>
                </ListItemMeta>
            </ListItem>
        </List>-->
    </div>
</template>

<style scoped lang="less">
    .list {
        li {
            padding: 12px 15px;
            border-bottom: 1px solid #292C33;
            cursor: pointer;
            transition: background-color .1s;

            &:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }

            &.active {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }

        .avatar, .name {
            vertical-align: middle;
            text-align: left;
        }

        .avatar {
            border-radius: 2px;
        }

        .name {
            display: inline-block;
            margin: 0 0 0 15px;
        }
    }
</style>