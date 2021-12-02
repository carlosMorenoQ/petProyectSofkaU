import React from 'react'
import { Welcome } from '../components/Welcome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Dashboard } from '../components/Dashboard'
import PrivateRoute from './PrivateRoute'
import { useSelector } from 'react-redux'
import { MisPokemones } from '../components/MisPokemones';
import { Admin } from '../components/Admin';


export const AppRouter = () => {

    const user = useSelector(store => store.login)
    let auth = false;
    let authAdmin = false;

    if (user.id) {
        auth = true
    }


    if (user && user.admin === 1) {
        authAdmin = true
    }

    return (<>

        <Router>
            <Switch>

                <PrivateRoute auth={auth} exact path="/mis-pokemones" component={MisPokemones} />

                <PrivateRoute auth={authAdmin} exact path="/admin" component={Admin} />
                {auth ?
                    <Route exact path="/" component={Dashboard} />
                    :
                    <Route exact path="/" component={Welcome} />
                }

            </Switch>

        </Router>



    </>)
}
