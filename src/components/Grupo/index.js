import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card, Button } from '@mui/material';
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
            <p style={{fontSize: 28}} >Tela de Grupos</p>

            <Button href='/' variant='contained' color='secondary' >Logout</Button>

            <div>
                { grupos.map( (item, key) => {
                    return (
                        <Card variant='outlined' style={{backgroundColor: 'silver', margin: 20, width: 300}}>
                            <div key={key}>
                                <p style={{fontSize: 22}}> Grupo </p>
                                <p> Nome: { item.nome } </p>
                                <p> Descrição: { item.descricao } </p>
                            </div>
                            
                        </Card>
                    );
                }) }
            </div>

        </div>
    )
}

export default Grupo;