export const state = () => ({
    sumResult: 0
})

export const mutations = {
    SET_SUM_RESULT(state, value) {
        state.sumResult = value
    }
}

export const getters = {
    getSumResult(state) {
        return state.sumResult
    }
}

export const actions = {
    calculateSum({ commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/sum', payload).then(({ data }) => {
                commit('SET_SUM_RESULT', data.sum)
                resolve(data)
            }).catch(({ response }) => {
                reject(response.message)
            })
        })
    }
}
