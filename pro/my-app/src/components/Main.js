import React ,{Component} from  'react';
import {browserHistory} from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Main extends Component{

    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render(){
        return (
            <div className="container">
                <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/"></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/users">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/LogIn">SignIn</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
            {React.cloneElement(this.props.children,this.props)}
            </div>
        )
    }
}

export default Main;