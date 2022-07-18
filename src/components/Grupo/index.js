import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Grupo = () => {

    const [grupos, setGrupos] = useState([]);
    
    const obterGrupos = async () => {
        console.log("Chamou obterGrupos");
        const result = await axios.get('https://open-grupos-estudo-backend.herokuapp.com/grupo');
        if (result) {
            console.log(result);
            setGrupos(result.data);
        }
    }

    useEffect( () => {
        obterGrupos();
    }, [] );

    return (
        <div className='container'>
            <p>Tela de Grupos</p>

            <Link to='/' >Logout</Link>

            <div>
                { grupos.map( (item, key) => {
                    return (
                        <div key={key}>
                            <p> { item.nome } </p>
                        </div>
                    );
                }) }
            </div>

        </div>
    )
}

export default Grupo;