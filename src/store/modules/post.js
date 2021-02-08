export default {
    actions: {
        async fetchPosts(cxt, cntPosts) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${cntPosts}`)
            const posts = await response.json()
            cxt.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        addedPost(state, post) {
            state.posts.unshift(post)
        }
    },
    state: {
        posts: []
    },
    getters:{
        allPosts(state) {
            return state.posts
        },
        cntPosts(state) {
            return state.posts.length
        }
    }
}