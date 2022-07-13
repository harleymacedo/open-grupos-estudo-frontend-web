import React, { useState, useEffect } from 'react';
import './styles.css';

export default () => {

    const [grupos, setGrupos] = useState([{"nome": "nome1"}, {"nome": "nome2"}]);

    useEffect( () => {
         obterGrupos();
    }, [] )
    
    const obterGrupos = async () => {
        const result = await fetch('https://open-grupos-de-estudo-backend.herokuapp.com/grupo');
        console.log("Chamou obterGrupos");
        setGrupos(...grupos, result);
    }

    return (
        <div className='container'>
            <p>Tela de Grupos</p>

            <div>
                { grupos.map( (value, index) => {
                    return (
                        <div>
                            <p>Item atual</p>
                            <p> { value } </p>
                        </div>
                    );
                }) }
            </div>

        </div>
    )
}