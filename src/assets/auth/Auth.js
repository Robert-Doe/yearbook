import React from 'react';
import RegisterComponent from "./RegisterComponent";
import Login from "./Login";

function Auth() {
    return (
        <section className={'container py-5'}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">Login
                    </button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sign Up/ Register
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active py-5" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <Login/>
                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                     aria-labelledby="nav-profile-tab">
                 <RegisterComponent/>
                </div>
            </div>
        </section>
    )
}

export default Auth;