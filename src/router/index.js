import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/home/Home'
import MusicList from '@/pages/home/components/MusicList'
import MusicShare from '@/pages/home/components/MusicShare'
import FoundMusic from '@/pages/home/components/FoundMusic'
import MusicSearch from '@/pages/home/components/MusicSearch'
import MusicAccount from '@/pages/home/components/MusicAccount'
import MusicPlayback from '@/pages/home/components/MusicPlayback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/',
        component: MyMusic
      }, {
        path: '/music-list',
        name: 'MusicList',
        component: MusicList
      }, {
        path: '/music-playback',
        name: 'MusicPlayback',
        component: MusicPlayback
      }, {
        path: '/music-search',
        name: 'MusicSearch',
        component: MusicSearch
      }, {
        path: '/music-share',
        name: 'MusicShare',
        component: MusicShare
      }, {
        path: '/music-account',
        name: 'MusicAccount',
        component: MusicAccount
      }]
    }
  ]
})