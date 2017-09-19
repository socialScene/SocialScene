import React,{Component} from 'react';
import {Button,Form,FormGroup,Label,
Input,Jumbotron} from 'reactstrap';
import {Link} from 'react-router';

class Profile extends Component{
    constructor(props){
        super(props);

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
                

            });
        }
        reader.readAsDataURL(file);
    }
    ;render(){
        return(
        <div className="container">
            <Jumbotron>
            <h3>Add your profile Info...</h3>
            
            <Form>
                <FormGroup>
                    <Label>Profile Image:</Label>
                    <Input type="file" name="avatar" id="avatar"/>
                </FormGroup>
                <FormGroup>
                    <Label>Background Image:</Label>
                    <Input type="file" name="backgroundphoto" id="backgroundphoto"/>
                </FormGroup>
                <FormGroup>
                    <Label>Description :</Label>
                    <Input type="textarea" name="description" id="description" placeholder="tell us about you.." required="required"/>
                </FormGroup>
                <Link to="/viewProfile">
                <Button color="info">Submit</Button>
                </Link>
            </Form>
            </Jumbotron>
        </div>)
    }

}

export default Profile;