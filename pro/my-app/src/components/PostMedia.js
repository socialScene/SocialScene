import React,{Component} from 'react';
import {Media} from 'reactstrap';

class PostMedia extends Component{
    render(){
        const{post} =this.props;
        return (
          <Media>
         <Media left href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        
      </Media>
      </Media>
        )
    }
}

export default PostMedia;