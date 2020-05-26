import {connect} from "react-redux";
import Page1 from './Page1';
import {setCurrentPageAC, setPostsAC} from '../redux/post-reducers'
import {findInfoAC} from '../redux/filterPosts'


let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts.filter(posts=>posts.Title.includes(state.filterPage) || posts.desc.includes(state.filterPage)),
        pageSize:state.postsPage.pageSize,
        totalUsersCount:state.postsPage.totalUsersCount,
        currentPage:state.postsPage.currentPage
    }
}


let MapDispatchToProps = (dispatch) => {
    return {
        setPosts: (posts) => {
            dispatch(setPostsAC(posts))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        onFindInfo: (name)=>{
            dispatch(findInfoAC(name))
        }
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(Page1);
