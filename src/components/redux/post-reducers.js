const SET_POSTS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    posts: [
        {id:1, Title:"AAAA", desc:"In the above example the styled component", link:"Description"  },
        {id:2, Title:"BBBB", desc:"Contrary to popular belie", link:"Description" },
        {id:3, Title:"CCCCC", desc:"It is a long established", link:"Description" },
        {id:4, Title:"DDDDD", desc:"ns of passages of Lorem Ipsum available, but the majority have suffered alteration in some f", link:"Description" },
        {id:5, Title:"EEEE", desc:"It uses a dictionary of ov", link:"Description" },
        {id:5, Title:"FFFF", desc:"In the above example the styled component", link:"Description" },
        {id:6, Title:"QQQ", desc:"In the above example the styled component", link:"Description" },
        {id:7, Title:"WWWWWW", desc:"In the above example the styled component", link:"Description" },
        {id:8, Title:"KKKK", desc:"In the above example the styled component", link:"Description" },
        {id:9, Title:"PPPPP", desc:"by Cicero are also reproduced in their exact original form", link:"Description" }
    ],
    pageSize:5,
    totalUsersCount:20,
    currentPage:1
}

let postsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        default:
            return state;
    }
}
export const setPostsAC = (posts) => ({type: SET_POSTS, posts})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default postsReducer;