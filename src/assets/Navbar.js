import React from "react";
import { useCookies } from "react-cookie";
import {Link} from "react-router-dom";

function Navbar(){
    const [cookies, setCookie,removeCookie] = useCookies(["user"]);
    function handleCookie() {
        setCookie("user", "gowtham", {
            path: "/"
        });
        console.log(cookies)
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-theme py-3">
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder" href="#">KSB Year Book</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-warning" to={'/auth'}>Join</Link>
                            {/*<button className="nav-link btn btn-warning" onClick={handleCookie}>Join</button>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;