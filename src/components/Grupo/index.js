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

    const handleDelete = async (e) => {
        try {
            const urlDelete = 'https://open-grupos-estudo-backend.herokuapp.com/grupo';
            const _idDelete = e.target.id;
            console.log('Deletando o grupo: ' + _idDelete);
            await axios.delete(urlDelete, {
                data: {
                    _id: _idDelete
                }
            });
            await obterGrupos();
        } catch (error) {
            console.log('Inserir alert');
        }
    }

    return (
        <div className='container'>
            <p style={{fontSize: 28}} >Tela de Grupos</p>

            <p style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 20 }}><Button href='/' variant='contained' color='secondary' style={{ width: 100 }} > <LogoutIcon /> Logout</Button></p>
            
            <p> <Button variant='contained' color='primary' onClick={ () => {setDialogInsert(true)} } > <AddCircleOutlineIcon /> Novo </Button> </p>

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
                                <p> <span style={{fontWeight: 'bold'}}> Nome: </span> { item.nome } </p>
                                <p> <span style={{fontWeight: 'bold'}}> Descrição: </span> { item.descricao } </p>
                                <hidden id={ item._id } value={ item._id } />
                                <p> <TextSnippetIcon /> <EditIcon onClick={ () => {setDialogEdit(true)} } id={ item._id } /> <RemoveCircleOutlineIcon onClick={ handleDelete } id={item._id} /> </p>

                            </div>
                            
                        </Card>
                    );
                }) }
            </div>

        </div>
    )
}

export default Grupo;