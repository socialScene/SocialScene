import React,{Component} from 'react';
import {Connect} from 'react-redux';
import {browserHistory} from 'react-router';

export function requireAuthentication(Component){
    class authenticate extends Component{
        componentWillMount(){
            this.checkAuth();
        }
        componentWillReceiveProps(nextProps){
            this.checkAuth();
        }

        checkAuth(){
            if (!this.props.user.hasOwnProperty('data')){
                const redirextAfterLogIn =this.props.location.pathname;
                browserHistory.push('/login?next=$(redirextAfterLogIn)')
            }

            }
        }

        render(){
            return(
                <div>
                   {this.props.user.hasOwnProperty('data'===true)
                   ?<Component {...this.props}/>

                    }
                </div>
            );
        };
        
    }
      const mapStateToProps = (state) => ({ });

      return connect(mapStateToProps)(authenticate);
