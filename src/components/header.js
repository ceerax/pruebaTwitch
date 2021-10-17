import React from 'react'
import { Link } from 'react-router-dom';

function header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <a class="navbar-brand" href="/home">CEERAX</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="mr-2 txt" to="/home"> <strong>Login</strong> </Link>
                            <Link className="mr-2 txt" to="/formulario"> <strong>Registro</strong> </Link>
                         
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default header
