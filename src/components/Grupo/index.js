import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Grupo = () => {

    const [grupos, setGrupos] = useState([{"nome": "nome1"}, {"nome": "nome2"}]);
    
    const obterGrupos = async () => {
        const result = await fetch('https://open-grupos-de-estudo-backend.herokuapp.com/grupo');
        console.log("Chamou obterGrupos");
        setGrupos(...grupos, result);
    }

    useEffect( () => {
        obterGrupos();
    }, [grupos] );

    return (
        <div className='container'>
            <p>Tela de Grupos</p>

            <Link to='/' >Logout</Link>

            {/* <div>
                { grupos.map( (value, index) => {
                    return (
                        <div>
                            <p>Item atual</p>
                            <p> { value } </p>
                        </div>
                    );
                }) }
            </div> */}

        </div>
    )
}

export default Grupo;