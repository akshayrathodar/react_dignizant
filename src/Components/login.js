import React from 'react';

import {Heading1} from '../Elements/heading1';
import {Buttons} from '../Elements/button';
import { Textinput } from '../Elements/textinput';

import Grid from '@material-ui/core/Grid';
import { LoginCheck } from '../Apis/callApis';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { loginState } from '../actions/index';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        
    }

    componentDidMount() {

    }

    onTextChange = (evt) => {
        
        let value = evt.target.value;
        
        this.setState({[evt.target.name]:value});
        
    }

    onButtonClick = (evt) => {
        let FD = new FormData();
        FD.append('username',this.state.username);
        FD.append('password',this.state.password);
        LoginCheck(FD).then((resp) => {
            if(resp.data.status) {
                this.props.loginState("true");
                this.props.history.push('/product');   
            } else {
                console.log(resp.data.message);
                alert(resp.data.message);
            }
        }).catch((err) => {
            console.log(err);
        });
        
    }

    render(){
        if(this.props.login) {
            this.props.history.push('/product');   
        }
        return(
            <>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Heading1 title="Login" />
                </Grid>
                <Grid item xs={12}>
                    <Textinput name="username" label="User Name" value={this.state.username} textEvt={this.onTextChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Textinput name="password" label="Pass Word" value={this.state.password} type="password" textEvt={this.onTextChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Buttons size="large" title="Login" color="primary" clickEvt={this.onButtonClick} />
                </Grid>
                <Grid item xs={12}><Link to="/signup"><Heading1 title="Register ?"></Heading1></Link></Grid>
            </Grid>
                

            </>
        );
    }
}

const mapStateToProps = state => {
    return { login: state.login };
};

function mapDispatchToProps(dispatch) {
    return {
        loginState: stat => dispatch(loginState(stat))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);