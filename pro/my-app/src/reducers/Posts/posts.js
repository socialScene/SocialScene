function posts(state =[],action){
    switch (action.type){
        case 'RECENT_POST_SUCCEEDED':
        return action.posts;
    default:
    return state;
    }
    
}
