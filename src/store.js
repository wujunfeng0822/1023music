import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        // 播放页相关的state
        currentTracks: [],
        currentSong: null,
        songIndex: null,
        songStroage: [],

        // 登录的状态
        isLogin: false,
        account: "",
        profile: {}
    },
    getters: {
        userId(state) {
            return state.profile.userId || "87812367";
        }
    },
    actions: {
        // 初始、刷新获取sessionStorage
        getSessionStorage({ commit, state }) {
            const currentTracks = JSON.parse(sessionStorage.getItem('currentTracks')) || state.currentTracks;
            const currentSong = JSON.parse(sessionStorage.getItem('currentSong')) || state.currentSong;
            const songIndex = JSON.parse(sessionStorage.getItem('songIndex')) || state.songIndex;
            const songStroage = JSON.parse(sessionStorage.getItem('songStroage')) || state.songStroage;

            const isLogin = JSON.parse(sessionStorage.getItem('isLogin')) || state.isLogin;
            const account = JSON.parse(sessionStorage.getItem('account')) || state.account;
            const profile = JSON.parse(sessionStorage.getItem('profile')) || state.profile;

            commit('GET_SessionStroage', { currentTracks, currentSong, songIndex, songStroage, isLogin, account, profile });
        },
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
        changeCurrentSongByIndex({ commit, state, dispatch }, { nextSongIndex }) {
            const currentSong = state.currentTracks[nextSongIndex];

            dispatch('update_currentSong', { currentSong });
            dispatch('update_songIndex', { songIndex: nextSongIndex });
        },
        // 以下是登录相关的action
        update_login({ commit }, { isLogin, profile, account }) {
            commit('UPDATE_login', { isLogin, profile, account });
        },
        // 退出登录
        update_logout({ commit }) {
            commit('UPDATE_logout');
        }
    },
    mutations: {
        GET_SessionStroage(state, { currentTracks, currentSong, songIndex, songStroage, isLogin, account, profile }) { 
            state.currentTracks = currentTracks;
            state.currentSong = currentSong;
            state.songIndex = songIndex;
            state.songStroage = songStroage;
            state.isLogin = isLogin;
            state.account = account;
            state.profile = profile;
        },
        UPDATE_currentTracks(state, { currentTracks }) {
            console.log("UPDATE_currentTracks");
            
            state.currentTracks = currentTracks;
            sessionStorage.setItem("currentTracks", JSON.stringify(currentTracks));
        },
        UPDATE_currentSong(state, { currentSong }) {
            state.currentSong = currentSong;
            sessionStorage.setItem("currentSong", JSON.stringify(currentSong));
        },
        UPDATE_songIndex(state, { songIndex }) {
            state.songIndex = songIndex;
            sessionStorage.setItem("songIndex", JSON.stringify(songIndex));
        },
        UPDATE_songStroage(state, { currentSong }) {
            state.songStroage.push(currentSong);
        },
        UPDATE_login(state, { isLogin, profile, account }) {
            state.isLogin = isLogin;
            state.profile = profile;
            state.account = account;
            sessionStorage.setItem("isLogin", JSON.stringify(isLogin));
            sessionStorage.setItem("profile", JSON.stringify(profile));
            sessionStorage.setItem("account", JSON.stringify(account));
        },
        UPDATE_logout(state) {
            state.isLogin = false;
            state.profile = {};
            sessionStorage.setItem("isLogin", JSON.stringify(false));
        }
    }
});