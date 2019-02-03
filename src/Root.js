import React from "react";
import { Provider } from 'react-redux';
import store, { history } from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TreeContainer from './containers/TreeContainer'
import Socket from './components/Socket'
import { ConnectedRouter } from 'connected-react-router';
import './Root.css';


const Root = () => {
    return (<Provider store={store}>
        <Socket port={3001}>
            <ConnectedRouter history={history}>
                <>
                    <Switch>
                        <Route path="/" component={TreeContainer}></Route>
                    </Switch>
                </>
            </ConnectedRouter>
        </Socket>
    </Provider>);
};

export default Root;