import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, Login, Register, DetailBook } from '../../pages'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/detailbook">
                        <DetailBook/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                   
                    
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
