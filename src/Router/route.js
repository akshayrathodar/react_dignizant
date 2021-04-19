import React from 'react';

import {
    BrowserRouter,
    Switch,
    Router,
    Route,
} from "react-router-dom";

import Login from '../Components/login';
import Signup from '../Components/signup';
import Products from '../Components/products';
import Addproduct from '../Components/addproduct';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


class Routers extends React.Component{
    render(){
        return(
            <>
                <BrowserRouter basename="/">
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Login}></Route>
                            <Route exact path="/signup" component={Signup}></Route>
                            <Route exact path="/product" component={Products}></Route>
                            <Route exact path="/addprod" component={Addproduct}></Route>
                        </Switch>
                    </Router>
                </BrowserRouter>
            </>
        );
    }
}

export default Routers;
