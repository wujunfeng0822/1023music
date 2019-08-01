import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        // 播放页相关的state
        currentTracks: [],
        currentSong: null,
        songIndex: null,
        songStroage:[],

        // 登录的状态
        isLogin:false
    },
    getters: {
        
    },
    actions: {
        // <点击歌曲时，获取当前播放列表，当前点击的歌曲，当前歌曲在列表中的索引，存入state>
        update_currentTracks({ commit }, { currentTracks }) {
            commit('UPDATE_currentTracks', { currentTracks });
        },
        update_currentSong({ commit }, { currentSong }) {
            commit('UPDATE_currentSong', { currentSong });
            commit('UPDATE_songStroage', { currentSong });
        },
        update_songIndex({ commit }, { songIndex }) {
            commit('UPDATE_songIndex', { songIndex });
        },
        changeCurrentSongByIndex({ commit, state, dispatch }, { nextSongIndex }){            
            const currentSong = state.currentTracks[ nextSongIndex ];
            
            dispatch('update_currentSong',{ currentSong });
            dispatch('update_songIndex', { songIndex: nextSongIndex });
        },
        // 以下是登录相关的action
        update_login({ commit }, { isLogin }){
            commit('Update_login',{ isLogin });
        }
    },
    mutations: {
        UPDATE_currentTracks(state, { currentTracks }) {
            state.currentTracks = currentTracks;
        },
        UPDATE_currentSong(state, { currentSong }) {
            state.currentSong = currentSong;
        },
        UPDATE_songIndex(state, { songIndex }) {            
            state.songIndex = songIndex;
        },
        UPDATE_songStroage(state ,{currentSong}){
            state.songStroage.push(currentSong);
        },
        UPDATE_login(state, { isLogin }){
            state.isLogin = isLogin;
        }
    }
});