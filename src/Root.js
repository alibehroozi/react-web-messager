import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer'

const Root = () => {
    return (<Provider store={store}>
        <HeaderContainer />
        <BrowserRouter>
            <Switch>
                <Route path="/" component={() => 'hello'}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>);
};

export default Root;