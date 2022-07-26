import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card, Button, TextField, Hidden } from '@mui/material';
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
    const [openDialogInsert, setDialogInsert] = useState(false);
    const [openDialogEdit, setDialogEdit] = useState(false);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [meta, setMeta] = useState('');
    const [imagem, setImagem] = useState('');

    
    const obterGrupos = async () => {
        const result = await axios.get('https://open-grupos-estudo-backend.herokuapp.com/grupo');
        if (result) {
            setGrupos(result.data);
        }
    }

    useEffect( () => {
        obterGrupos();
    }, [] );

    const handleSetNome = (e) => {
        setNome(e.target.value);
    }

    const handleSetDescricao = (e) => {
        setDescricao(e.target.value);
    }

    const handleInsert = async () => {
        try {
            const urlPost = 'https://open-grupos-estudo-backend.herokuapp.com/grupo';
            await axios.post(urlPost, {
                nome,
                descricao,
                meta,
                imagem
            });
            setDialogInsert(false);
            await obterGrupos();
        } catch (error) {
            console.log('Inserir alert');
        }
    }

    const handleEdit = (e) => {
        console.log(e.target.id);
        setDialogEdit(false);
    }

    return (
        <div className='container'>
            <p style={{fontSize: 28}} >Tela de Grupos</p>

            <Button href='/' variant='contained' color='secondary' > <LogoutIcon /> Logout</Button>
            
            <p> <AddCircleOutlineIcon onClick={ () => {setDialogInsert(true)} }/> </p>

            <Dialog open={openDialogInsert} onClose={ () => {setDialogInsert(false)} }>
                <DialogTitle> <AddCircleOutlineIcon /> Novo grupo:</DialogTitle>
                <DialogContent>
                    <TextField id="name" label="Nome:" type="text" fullWidth variant='filled' style={{marginBottom: 10}} onChange={handleSetNome} />
                    <TextField id="descricao" label="Descrição:" type="text" fullWidth variant='filled' style={{marginBottom: 10}} onChange={handleSetDescricao} />
                    <TextField id="meta" label="Meta:" type="text" fullWidth variant='filled' style={{marginBottom: 10}} />
                    <TextField id="imagem" type="file" fullWidth variant='filled' style={{marginBottom: 10}} />
                </DialogContent>
                <DialogActions>
                <Button onClick={ () => {setDialogInsert(false)} } variant='contained' color='error' > Cancelar </Button>
                <Button onClick={ handleInsert } variant='contained' color='primary'> Cadastrar </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDialogEdit} onClose={() => {setDialogEdit(false)}}>
                <DialogTitle> <EditIcon /> Editar grupo:</DialogTitle>
                <DialogContent>
                    <TextField id="name" label="Nome:" type="text" fullWidth variant='filled' style={{marginBottom: 10}} onChange={handleSetNome} />
                    <TextField id="descricao" label="Descrição:" type="text" fullWidth variant='filled' style={{marginBottom: 10}} onChange={handleSetDescricao} />
                    <TextField id="meta" label="Meta:" type="text" fullWidth variant='filled' style={{marginBottom: 10}} />
                    <TextField id="imagem" type="file" fullWidth variant='filled' style={{marginBottom: 10}} />
                </DialogContent>
                <DialogActions>
                <Button onClick={ () => {setDialogEdit(false)} } variant='contained' color='error' > Cancelar </Button>
                <Button onClick={ handleEdit } variant='contained' color='primary'> Atualizar </Button>
                </DialogActions>
            </Dialog>

            <div className="div--cards">
                { grupos.map( (item, key) => {
                    return (
                        <Card variant='outlined' style={{backgroundColor: 'silver', margin: 20, width: 300}}>
                            <div key={key}>
                                <p style={{fontSize: 22}}> Grupo </p>
                                <p> Nome: { item.nome } </p>
                                <p> Descrição: { item.descricao } </p>
                                <hidden id={ item._id } value={ item._id } />
                                <p> <TextSnippetIcon /> <EditIcon onClick={ () => {setDialogEdit(true)} } id={ item._id } /> <RemoveCircleOutlineIcon /> </p>

                            </div>
                            
                        </Card>
                    );
                }) }
            </div>

        </div>
    )
}

export default Grupo;