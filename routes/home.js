const express = require('express');
const router = express.Router();
const {autenticador} = require('./autenticados');
const {
    principal,
    entrar,
    sair,
    getContatos,
    inserContato,
    totalContatos,
    updateContato,
    deleteContato,
    getContatoID,
    chat
} = require('../controllers/contatos');



router.get('/',principal);
router.post('/entrar',entrar);
router.get('/sair',autenticador,sair);
router.get('/contatos',autenticador,getContatos);
router.post('/contatos',autenticador,inserContato);
router.get('/totalContatos',autenticador,totalContatos);
router.put('/contatos/:id',autenticador,updateContato);
router.get('/contatos/:id',autenticador,getContatoID);
router.delete('/contatos/:id',autenticador,deleteContato);
router.get('/chat',chat)


module.exports = router;