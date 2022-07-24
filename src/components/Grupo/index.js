import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card, Button, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';

const Grupo = () => {

    const [grupos, setGrupos] = useState([]);
    const [open, setOpen] = useState(false);
    
    const obterGrupos = async () => {
        const result = await axios.get('https://open-grupos-estudo-backend.herokuapp.com/grupo');
        if (result) {
            setGrupos(result.data);
        }
    }

    useEffect( () => {
        obterGrupos();
    }, [] );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='container'>
            <p style={{fontSize: 28}} >Tela de Grupos</p>

            <Button href='/' variant='contained' color='secondary' > <LogoutIcon /> Logout</Button>
            
            <p> <AddCircleOutlineIcon onClick={handleClickOpen}/> </p>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Novo grupo:</DialogTitle>
                <DialogContent>
                    <TextField id="name" label="Nome:" type="text" fullWidth variant='filled' />
                    <TextField id="descricao" label="Descrição:" type="text" fullWidth variant='filled' />
                    <TextField id="meta" label="Meta:" type="text" fullWidth variant='filled' />
                    <TextField id="imagem" label='Imagem:' type="file" fullWidth variant='filled' />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}> Cancelar </Button>
                <Button onClick={handleClose}> Cadastrar </Button>
                </DialogActions>
            </Dialog>

            <div>
                { grupos.map( (item, key) => {
                    return (
                        <Card variant='outlined' style={{backgroundColor: 'silver', margin: 20, width: 300}}>
                            <div key={key}>
                                <p style={{fontSize: 22}}> Grupo </p>
                                <p> Nome: { item.nome } </p>
                                <p> Descrição: { item.descricao } </p>
                                <p> <TextSnippetIcon /> <EditIcon /> <RemoveCircleOutlineIcon /> </p>

                            </div>
                            
                        </Card>
                    );
                }) }
            </div>

        </div>
    )
}

export default Grupo;