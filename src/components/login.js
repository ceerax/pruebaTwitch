import React from 'react'
import { Link } from 'react-router-dom';
import './formulario.css'

function Login() {
    return (
        <>
            <form>
                <div className="col-12 p-5 mt-5 d-flex justify-content-center">
                    <div className="col-6 inter ">
                        <div className="form-group ">
                            <h2 className="mb-3"> <strong>Iniciar seción</strong></h2>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group mb-5">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <Link to="/buscar"> <button type="submit" class="btn btn-dark">Submit</button></Link>
                           
                        </div>
                        <div className=" btn col-12 d-flex justify-content-center">
                            <Link to="/formulario">Registrate</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login
