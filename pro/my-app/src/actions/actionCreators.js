export function recentPost() {
    return  {
        type: 'RECENT_POST_REQUESTED'
    }
}

export function Post(message,video,audio,image){
    return {
        type:'ADD_POST_REQUESTED',
        message,
        video,
        audio,
        image,
    }
}
export function fetchPost(id){
    return{
        type:'POST_FETCH_REQUIRED',
        id
    }
}

export function users(fullname,username,password)
{
    return {
        type:'SIGNUP_REQUESTED',
        fullname,
        username,
        password
    }

}

export function login(username,password,next){
    return{
        type:'LOGIN_REQUIRED',
        username,
        password,
        next 
    }
}

export function profile(profileImage,backgroundImage,description){
    return{
        type:'PROFILE_REQUIRED',
        profileImage,
        backgroundImage,
        description
    }
}

export function LogOut(){
    return{
        type:'LOGOUT_REQUESTED'
    }
}

export function authGood(user){
    return{
        type:'AUTH_GOOD',
        user
    }
}
        
        
        