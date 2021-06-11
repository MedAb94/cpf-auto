import axios from 'axios'

const state = {
    models: [],
    modelCategories: [],
    makes: [],
    searchResult: [],
    makeModels: [],
    parts: [],
    deliveryCheck: null,
};

const getters = {
    allMakes: state => state.makes,
    allMakeModels: state => state.makeModels,
    allModels: state => state.models,
    allModelCategories: state => state.modelCategories,
    allParts: state => state.parts,
    allSearchResults: state => state.searchResult,
    deliveryCheck: state => state.deliveryCheck,
};

const actions = {
    async fetchMakes({commit}) {
        axios.get('/v1/makes?all=true&sort=name')
            .then(resp => {
                state.makes = []
                resp.data.data.marks.map(e => state.makes.push(e))
                return
                commit('setMakes', resp.data.data.marks);
                console.log(resp.data.data)
            })
            .catch(err => {
                commit('setLoading', false);
            })
    },
    async search({commit}, ref) {
        axios.get('/v1/produits?filter[ref]=' + ref + '&include=models.carModel.mark')
            .then(resp => {
                state.searchResult = []
                resp.data.data.products.map(e => state.searchResult.push(e))
            })
            .catch(err => {
                commit('setLoading', false);
            })
    },
    async checkArea({commit}, zipcode) {
        axios.post('/v1/check-area', zipcode)
            .then(resp => {
                state.searchResult = []
                console.log(resp.data)
            })
            .catch(err => {
                commit('setLoading', false);
            })
    },
    async fetchMakeModels({commit}, payload) {
        axios.get('v1/car-models?filter[mark_id]=' + payload.make_id + '&filter[year_from]=' + payload.year + '&sort=name')
            .then(resp => {
                state.makeModels = []
                resp.data.data.car_models.map(e => state.makeModels.push(e))
                return
                commit('setMakeModels', resp.data.car_models);
                console.log(resp.data)
            })
            .catch(err => {
                commit('setLoading', false);
            })
    },
    async fetchModelCategories({commit}, model_id) {
        axios.get('/v1/model-categories/' + model_id)
            .then(resp => {
                state.modelCategories = []
                console.log(resp.data)
                resp.data.map(e => state.modelCategories.push(e))
                return
                commit('setModelCategories', resp.data.models);
                console.log(resp.data)
            })
            .catch(err => {
                commit('setLoading', false);
            })
    },
    async fetchByModelAndCategory({commit}, payload) {
        axios.get('/v1/produits/' + payload.model_d + '/' + payload.categ_id)
            .then(resp => {
                state.parts = []
                console.log(resp.data)
                resp.data.map(e => state.parts.push(e))
            })
            .catch(err => {
                commit('setLoading', false);
            })
    },
};

const mutations = {
    setMakes(payload) {
        state.makes = payload
    },
    setMakeModels(payload) {
        state.makeModels = payload
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
