import React from 'react';
import './styles.css';
import { TextField, Button } from '@mui/material';

const Login = () => {

    return(
        <div className='container--login'>
            <h4>Entrar no sistema</h4>
            <TextField label='Email' style={{margin: 20}} type='text' />
            <TextField label='Senha' style={{margin: 20}} type='password' />
            <Button variant='contained' href='/grupo' style={{margin: 20}}> Entrar </Button>
            <div className='login--links'>
                <a href='/grupo'>Cadastro</a>
                <a href='localhost:3000/grupo'>Esquecia a senha</a>
            </div>
        </div>
    )
}

export default Login;