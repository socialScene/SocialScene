export function getRecentPosts(app){
    const posts=app.service('posts');
    return posts.get().then((data,err)=>data.data);
}

export function users(app,name,email,password){
    const users =app.service('users');
    return users.create({
        name,
        email,
        password
    }).then((data,err)=> data);

}

export function Profile(app,avatar,backgroundphoto,description){
    const Profile =app.service('Profile');
    return Profile.create({
        avatar,
        backgroundphoto,
        description
    }).then((data,err)=> data);
}

export function Post(app,message,video,audio,image){
    const Posts =app.service('Posts');
    return Posts.create({
        message,
        video,
        audio,
        image
    }).then((data,err)=> data);
}