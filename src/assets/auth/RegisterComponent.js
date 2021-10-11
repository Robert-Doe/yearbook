import React from 'react';
function RegisterComponent(){
    return(
        <div className="row my-2">
            <div className="col-md-6 offset-md-3">
                <figure className={'card py-4 px-3'}>
                    <label className={'fw-bold display-5 text-center'}>Register With Us</label>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                            <input type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Department:&nbsp;</label>
                            <select>
                                <option>Computer Science</option>
                                <option>Supply Chain</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </figure>
            </div>
        </div>
    )
}
export default RegisterComponent;