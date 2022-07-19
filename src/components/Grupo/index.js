import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Grupo = () => {

    const [grupos, setGrupos] = useState([]);
    
    const obterGrupos = async () => {
        const result = await axios.get('https://open-grupos-estudo-backend.herokuapp.com/grupo');
        if (result) {
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
                        <div key={key} className='card--grupo'>
                            <p> Grupo </p>
                            <p> { item.nome } </p>
                            <p> { item.descricao } </p>
                        </div>
                    );
                }) }
            </div>

        </div>
    )
}

export default Grupo;