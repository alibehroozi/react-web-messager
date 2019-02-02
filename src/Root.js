import React from "react";
import { Provider } from 'react-redux';
import store, { history } from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer'
import { ConnectedRouter } from 'connected-react-router';

const Root = () => {
    return (<Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <HeaderContainer />
                <Switch>
                    <Route path="/" component={(props) => { console.log(props); return 'hello' }}></Route>
                </Switch>
            </>
        </ConnectedRouter>
    </Provider>);
};

export default Root;