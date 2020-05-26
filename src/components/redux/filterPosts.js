const FIND_INFO = "FIND_INFO"

const initialState = "";

let  filterPosts=(state = initialState, action)=> {
    switch (action.type) {
        case FIND_INFO: {
            return action.payload;
        }
        default:
            return state;

    }
}


export const findInfoAC = (name) => ({type: FIND_INFO, payload: name})

export default filterPosts;