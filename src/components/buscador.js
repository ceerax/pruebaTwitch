
import React, { useState, useEffect } from 'react'
import  './styles.scss'

function Buscador() {

    /* ============ CONSTANTES ============== */
    const [games, setgames] = useState([]);
    const [gameUser, setGameUser] = useState([]);
    const [busqueda, setBusqueda] = useState("");



    /* ======= CAPTURARA LA INFORMACIÓN DEL INPUT ====== */
    const handlechange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    /* ========================== FILO DE BUSQUEDA ============================= */
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = gameUser.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        });
        setgames(resultadosBusqueda)
    }

    /* =========================================================================== */
    useEffect(() => {
        setapp()
    }, []);

    return (
        <>

            <h1 class="ui center aligned icon header container-header">
                <i class="circular react icon circulo"></i>
                <h2>GAMERS</h2>
            </h1>

            

            <div class="ui grid">
                <div class="four column row">
                    <div class="right floated column">
                        <div class="ui icon input  ">
                            <i className="search icon" ></i>
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" placeholder="busqueda" name="busqueda" value={busqueda} onChange={handlechange} />
                        </div>
                    </div>
                </div>
            </div>

            {/* ==============MAPEO DE LA INFORMACIÓN DE LA API REST DE TWITCH ===================== */}

            <div className="content ui grid center aligned">
                {
                    games.map((item, index) => {
                        return (
                            <div key={index} className="ui link cards">
                                <div className="card hov">
                                    <div className="image">
                                        <img src={item.box_art_url} />
                                    </div>
                                    <div class="content">
                                        <div class="header item">{item.name}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div>.</div>
            

        </>
    );

    /* ======================== SET DE INFORMACIÓN DE LA API DE TWITCH ============================= */
    function setapp() {
        getApp().then((value) => {
            if (value.hasOwnProperty("data") == true) {
                let dataArray = value.data
                let finalArray = dataArray.map(game => {
                    let newURL = game.box_art_url.replace('{width}', '160').replace('{height}', '200');
                    game.box_art_url = newURL
                });
                setgames(value.data);
                setGameUser(value.data);
            }
        })
    };

    /* =========================== GET INFORMACIÓN DE LA API TWITCH ================================== */

    async function getApp() {
        const response = await fetch('https://api.twitch.tv/helix/games/top', {
            method: 'GET',
            headers: {
                'Client-ID': 'ehdhxhl0ar9anlt4j252t90b91dlzv',
                'Authorization': 'Bearer ecyx39yico6pd1lcsfb92o33ov96dm'
            },
        })
        const json = await response.json();
        return json
    };
}

export default Buscador
