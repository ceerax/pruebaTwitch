
import React, { useState, useEffect } from 'react'


function Buscador() {

    const [games, setgames] = useState([])
    const [gameUser, setGameUser] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const handlechange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda = gameUser.filter((elemento)=>{
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {       
                return elemento         
            }
        })
        setgames(resultadosBusqueda)
    }


    useEffect(() => {
        console.log(busqueda);
        setapp()
    },[])

    return (
        <>
                <div class="input-group mb-3 col-4">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" placeholder="busqueda" name="busqueda" value={busqueda} onChange={handlechange} />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                </div>
               


                <div className="row">
                    {
                        games.map((item, index) => {
                            return (
                                <div key={index} className="col-4">
                                    <div className="card">
                                        <img src={item.box_art_url} class="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </>
            )

                

            function setapp() {
                getApp().then((value) => {
                     let dataArray = value.data.data
                    let finalArray = dataArray.map(game => {
                        let newURL = game.box_art_url.replace('width', '160').replace('height', '160');
                        game.box_art_url = newURL
                    });

                    setgames(value.data);
                    setGameUser(value.data);

                   



                })
            };

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
