import React from 'react';
function Login(){
    return (<div className="row my-2">
        <div className="col-md-6 offset-md-3">
            <figure className={'card py-4 px-3'}>
                <label className={'fw-bold display-5 text-center'}>Login Page</label>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text text-secondary">We'll never share your
                            email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </figure>
        </div>
    </div>)
}

export default Login;