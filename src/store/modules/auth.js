import axios from 'axios'

const state = {
    token: localStorage.getItem('token') || null,
    authLoading: false,
    role: localStorage.getItem("role") || "user"
};

const getters = {
    isLoggedIn: state => state.token,
    authLoading: state => state.authLoading,
    role: state => state.role,
};

const actions = {
    async login({commit}, user) {
        return new Promise((resolve, reject) => {
            commit('setLoading', true);
            axios({url: '/auth/login', data: user, method: 'POST'})
                .then(resp => {
                    commit('setLoading', false);
                    const token = resp.data.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('id', resp.data.user.id);
                    localStorage.setItem('role', resp.data.role);
                    localStorage.setItem('profil', resp.data.user.cds_id);
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    commit("setRole", resp.data.role)
                    commit('login', token)
                    resolve(resp)
                })
                .catch(err => {
                    commit('setLoading', false);
                    reject(err)
                })
        })
    },
    async register({commit}, user) {
        return new Promise((resolve, reject) => {
            commit('setLoading', true);
            console.log(user)
            axios({url: 'auth/register', data: user, method: 'POST'})
                .then(resp => {
                    commit('setLoading', false);
                    resolve(resp)
                })
                .catch(err => {
                    commit('setLoading', false);
                    reject(err)
                })
        })
    },
    async logout({commit}) {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            localStorage.removeItem('role');
            commit('logout')
            delete axios.defaults.headers.common['Authorization'];
            resolve()
        })
    },

    async submitInfos({commit}) {
        return new Promise((resolve, reject) => {
            commit('setLoading', true);
            axios({url: 'auth/register', data: user, method: 'POST'})
                .then(resp => {
                    commit('setLoading', false);
                    resolve(resp)
                })
                .catch(err => {
                    commit('setLoading', false);
                    reject(err)
                })
        })
    },
};

const mutations = {
    setLoading(payload) {
        state.authLoading = payload
    },
    auth_success(state, token, user) {
        state.status = false;
        state.token = token;
        state.user = user
    },
    auth_error(state) {
        state.status = false
    },
    logout(state) {
        state.token = '';
    },
    login(state, token) {
        state.token = token;
    },
    setRole(state, r) {
        state.role = r;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
