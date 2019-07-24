const state = {
    name : window.localStorage.getItem('nowName') || '北京',
    id : window.localStorage.getItem('nowId') || '110100',
    areaid : window.localStorage.getItem('nowAreaId') || '1'
};

const actions = {

};

const mutations = {
    CITY_INFO(state , payload){
        state.name = payload.name;
        state.id = payload.id;
        state.areaid = payload.areaid;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}
