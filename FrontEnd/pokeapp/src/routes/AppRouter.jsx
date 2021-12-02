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


export const AppRouter = () => {

    const user = useSelector(store => store.login.id)
    let auth = false;

    user ?
        auth = true
        :
        auth = false

    return (<>

        <Router>
            <Switch>

                <PrivateRoute auth={auth} exact path="/mis-pokemones" component={MisPokemones} />

                {auth ?
                    <Route exact path="/" component={Dashboard} />
                    :
                    <Route exact path="/" component={Welcome} />
                }

            </Switch>

        </Router>



    </>)
}
