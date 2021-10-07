import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Appbar from "./components/Appbar.js"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"

const AllRoute = () => {
    return (
        <>
            <Router>
                <Appbar></Appbar>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
    
                    <Route exact path="/login">
                       <Login></Login>
                    </Route>

                    <Route exact path="/signup">
                        <Signup></Signup>
                    </Route>
                </Switch>
            </Router>
            
        </>
    )
}

export default AllRoute
