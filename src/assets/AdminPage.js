import React from 'react';

function AdminPage() {
    return (
        <section className={'container py-5 bg-body'}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">Departments
                    </button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Approve Registration
                    </button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                            type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Censorship
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active py-5" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">

                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CS</td>
                                <td>Computer Science</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Profile
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Contact
                </div>
            </div>
        </section>
    )
}

export default AdminPage;