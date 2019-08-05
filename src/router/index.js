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

// route of FoundMusic
import FoundMusicSuggest from '@/pages/home/components/FoundMusic_Pages/FoundMusicSuggest'
import FoundMusicHot from '@/pages/home/components/FoundMusic_Pages/FoundMusicHot'
import FoundMusicNew from '@/pages/home/components/FoundMusic_Pages/FoundMusicNew'
import FoundMusicRadio from '@/pages/home/components/FoundMusic_Pages/FoundMusicRadio'
import FoundMusicHotSinger from '@/pages/home/components/FoundMusic_Pages/FoundMusicHotSinger'
import FoundMusicNewMV from '@/pages/home/components/FoundMusic_Pages/FoundMusicNewMV'
import FoundMusicHotMV from '@/pages/home/components/FoundMusic_Pages/FoundMusicHotMV'
import FoundMusicMvRank from '@/pages/home/components/FoundMusic_Pages/FoundMusicMvRank'
import FoundMusicRank from '@/pages/home/components/FoundMusic_Pages/FoundMusicRank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      props: true
    }, {
      path: '/home',
      component: Home,
      redirect:{
        path: '/my-music'
      },
      children: [{
        path: '/my-music',
        name: 'MyMusic',
        component: MyMusic,
        meta: {
          keepAlive: true,
          isUseCache:false,
          useCacheOnly: ['/music-list']
        }
      }, {
        path: '/music-list',
        name: 'MusicList',
        component: MusicList,
        meta: {
          keepAlive: true,
          isUseCache: false,
          useCacheOnly: ['/music-playback'],
          cacheLastFullPath:''
        },
        props: (route) => ({ query: route.query })
      }, {
        path: '/music-playback',
        name: 'MusicPlayback',
        component: MusicPlayback,
        meta: {
          keepAlive: true
        }
      }, {
        path: '/music-search',
        name: 'MusicSearch',
        component: MusicSearch,
        props: (route) => ({ query: route.query })
      }, {
        path: '/music-share',
        name: 'MusicShare',
        component: MusicShare
      }, {
        path: '/found-music',
        name: 'FoundMusic',
        component: FoundMusic,
        meta: {
        },
        redirect: {
          path: '/found-music/'
        },
        children: [{
          path: '/found-music/',
          name: 'FoundMusicSuggest',
          component: FoundMusicSuggest
        }, {
          path: '/found-music/hot',
          name: 'FoundMusicHot',
          component: FoundMusicHot
        }, {
          path: '/found-music/new',
          name: 'FoundMusicNew',
          component: FoundMusicNew
        }, {
          path: '/found-music/radio',
          name: 'FoundMusicRadio',
          component: FoundMusicRadio
        }, {
          path: '/found-music/hot-singger',
          name: 'FoundMusicHotSinger',
          component: FoundMusicHotSinger
        }, {
          path: '/found-music/rank',
          name: 'FoundMusicRank',
          component: FoundMusicRank
        }, {
          path: '/found-music/newmv',
          name: 'FoundMusicNewMV',
          component: FoundMusicNewMV
        }, {
          path: '/found-music/hotmv',
          name: 'FoundMusicHotMV',
          component: FoundMusicHotMV
        }, {
          path: '/found-music/mvRank',
          name: 'FoundMusicMvRank',
          component: FoundMusicMvRank
        }
        ]
      }, {
        path: '/my-account',
        name: 'MyAccount',
        component: MyAccount,
        meta: {
          requireAuth: false
        }
      }]
    }
  ]
})
