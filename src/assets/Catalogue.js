import React from 'react';
import students,{departments} from '../data/raw'
function Catalogue(){
    return(
            <main className={'container'}>
                <h2 className={'my-4 component-header'}>Year: 2020/2021</h2>
                <nav className={'card my-3 bg-theme bg-opacity-25'}>
                    <form className={'card-body d-flex flex-md-wrap'}>
                        <label htmlFor="{'departments'}">Filter by Department&nbsp;</label>
                        <select id={'departments'}>
                            <option value="cs">Computer Science</option>
                            <option value="es">Environmental Science</option>
                            <option value="bio">Biological Science</option>
                            <option value="phy">Physics</option>
                            <option value="chem">Chemistry</option>
                        </select>
                        {/*<input type={'search'} className={'ms-auto'}/>*/}
                    </form>
                </nav>
                <section className={'row'}>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning  read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning  read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'} >Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning  read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 my-1">
                        <div className={'card student-card'} style={{width:'100%'}}>
                            <img src="http://lorempixel.com/200/200/" alt="The Card Image"/>
                            <div className={'card-body'}>
                                <h6 className={'student-name'}>Bob Cumulus - Sugar Daddy</h6>
                                <p className={'card-text department-name'}>Supply Chain</p>
                                <a className={'btn btn-warning  read-more'}>Read more</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}
export default Catalogue;