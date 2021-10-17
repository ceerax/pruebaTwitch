import React from 'react'
import { Link } from 'react-router-dom';
import  './formulario.css'

function formulario() {
    return (
        <>
           <form >
                <div className="col-12 p-3  mt-5 d-flex justify-content-center">
                    <div className="col-6 inter ">
                        <div className="form-group ">
                            <h2 className="mb-3"> <strong>Registro</strong></h2>
                            <label for="exampleInputEmail1">NAME</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="form-group ">
                            <label for="exampleInputPassword1">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <div class="form-group ">
                            <label for="exampleInputPassword1">User Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="form-group ">
                            <label for="exampleInputPassword1">password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                      
                        <div className="col-12 d-flex justify-content-center">
                            <button  type="submit" class="btn btn-warning">Registrar</button>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <Link to="/buscar"> Inisiar seccion</Link>  
                        </div>
                    </div>
                </div>
            </form>
        </>
        
    )
   
}

export default formulario
