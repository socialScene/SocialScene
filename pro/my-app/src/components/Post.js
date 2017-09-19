import React,{Component} from 'react';
import {} from 'reactstrap';

class Post extends Component{
    constructor(props){
        super(props);

        this.state = {message:''};
        this.handleSubmit =this.handleSubmit.bind(this);
        
    }

    handleImageChange(e){
        e.preventDefault();

        let reader = new FileReader();
        let file =e.target.file[0];

        reader.onloadend =()=>{
            this.setState({
                file:file,
                imagePreviewUrl:reader.result,
                audioPreviewUrl:reader.result,
                videoPreviewUrl:reader.result

            });
        }
        reader.readAsDataURL(file);
    }
    handleSubmit(e){
        this.props.Post(
            this.state.message,
            this.state.imagePreviewUrl,
            this.state.audioPreviewUrl,
            this.state.videoPreviewUrl
        );
    }
    render(){
    return(
        <div className="container">
                
        </div>
    );

};
};

export default Post;