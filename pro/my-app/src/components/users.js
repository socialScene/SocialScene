import React,{Component} from 'react';
import {Link} from 'react-router';
import {Form,Button,FormGroup,Label,Input,Jumbotron} from 'reactstrap';

    

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {fullName:'',Email:'',password:''};
        this.handleSubmit =this.handleSubmit.bind(this);}
        
    handleSubmit(e){
        e.preventDefault();
        this.props.users(this.state.fullName,this.state.username,this.state.password);
        this.setState({fullname:'',username:'',password:''})
    }
       


        
    
render(){
    return(
        <div className="container">
            <Jumbotron>
            <h3>Register Here....</h3>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label>Full Name:</Label>
                <Input type="text" id="fullName" name="fullName" onChange={(e) =>this.setState({fullName:e.target.value})} value={this.state.fullName} required="required" placeholder="enter your full name"/>
                </FormGroup>

                <FormGroup>
                <Label>Email Address:</Label>
                <Input type="email" id="email" name="email"onChange={(e) =>this.setState({email:e.target.value})} value={this.state.email} required="required" placeholder="enter your email address"/>
                </FormGroup>

                <FormGroup>
                <Label>Password:</Label>
                <Input type="password" id="password" name="password" onChange={(e) =>this.setState({password:e.target.value})}  value={this.state.password}  required="required" placeholder="enter password"/>
                </FormGroup>
                
                <Button color="success">Next</Button>
                
            </Form>
            </Jumbotron>
        </div>
    );
};
}
export default Users