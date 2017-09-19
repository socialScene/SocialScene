import React,{Component} from 'react';
import {Form,Button,Label,Input,FormGroup,Jumbotron} from 'reactstrap';

class LogIn extends Component{
   constructor(props){
    super(props);
    this.state={Username:'',password:''};
    this.handleSubmit=this.handleSubmit.bind(this);
} 
    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.Username,this.state.password,this.props.location.query.next || '');
        this.setState({username:'',password:''})
    }
    render(){
        return(
            <div className="container" onSubmit={this.handleSubmit}>
                <Jumbotron>
                <h3>SingIn Here...</h3>
                <Form>
                    <FormGroup>
                        <Label>Username:</Label>
                        <Input type="email" name="email" onChange={(e) =>this.setState({username:e.target.value})} value={this.state.username} id="email" placeholder="enter your email"/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password:</Label>
                        <Input type="password" name="password" onChange={(e) =>this.setState({password:e.target.value})}  value={this.state.username}  id="password" placeholder="enter your password"/>
                    </FormGroup>
                    <div className="clear-fix">
                    <Button color="success">SingIn</Button>|<p>Register here</p></div>
                </Form>
                </Jumbotron>
            </div>
        )
    }
        
}

export default LogIn