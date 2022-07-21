import React from 'react';
import './styles.css';
import { TextField, Button } from '@mui/material';

const Login = () => {

    return(
        <div className='container--login'>
            <h4>Entrar no sistema</h4>
            <TextField placeholder='Email' className='input--form'/>
            <TextField placeholder='Senha' className='input--form'/>
            <Button variant='contained' href='/grupo' className='input--form'> Grupo </Button>
            <div className='login--links'>
                <a href='/grupo'>Cadastro</a>
                <a href='localhost:3000/grupo'>Esquecia a senha</a>
            </div>
        </div>
    )
}

export default Login;