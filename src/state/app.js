const initialState = {
    currentPage: 'about'
};

//action creator
const SHOW_CURRENT_PAGE = 'SHOW_CURRENT_PAGE';

export const showCurrentPage = currentPage => ({
    type: SHOW_CURRENT_PAGE, currentPage
});

//reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CURRENT_PAGE: 
            return { ...state, currentPage: action.currentPage};
        default: 
            return state;    
    }
};
