import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/home/Home'
import MyMusic from '@/pages/home/components/MyMusic'
import MusicList from '@/pages/home/components/MusicList'
import MusicShare from '@/pages/home/components/MusicShare'
import FoundMusic from '@/pages/home/components/FoundMusic'
import MusicSearch from '@/pages/home/components/MusicSearch'
import MyAccount from '@/pages/home/components/MyAccount'
import MusicPlayback from '@/pages/home/components/MusicPlayback'
import Play from '@/pages/home/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login      
    }, {
      path: '/home',
      component: Home,
      children: [{
        path: '/',
        name: 'MyMusic',
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
        path: '/found-music',
        name: 'FoundMusic',
        component: FoundMusic
      }, {
        path: '/my-account',
        name: 'MyAccount',
        component: MyAccount
      },{
        path: '/play/:id',
        name: 'Play',
        component: Play
      }]
    }
  ]
})
