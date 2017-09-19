import React,{Component} from 'react';
import {Media} from 'reactstrap';
import PostMedia from './PostMedia';

class PostCard extends Component{
    constructor(props){
        super(props);
        this.props.recentPosts();
    }
    render(){
        return (
            <Media>
                
                {(this.props.post.map((post,i)=> <PostMedia){..this.props} key={i} post={post}/>)}

            </Media>
        )
    }
}

export default PostCard;