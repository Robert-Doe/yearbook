import './App.css';
import Navbar from "./assets/Navbar";
import Catalogue from "./assets/Catalogue";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AdminPage from "./assets/AdminPage";
import Auth from "./assets/auth/Auth";

function App() {
    return (
        <Router className="App bg-theme-body bg-opacity-25">
            <Navbar/>
            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <Switch>
                <Route exact path="/">
                    <Catalogue/>
                </Route>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route path="/admin">
                    <AdminPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
