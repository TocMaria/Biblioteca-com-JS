const express = require('express');
const router = express.Router();


const lojas = require('./controllers/lojas');
const livros = require('./controllers/livros');
const clientes = require('./controllers/clientes');

router.get('/clientes', clientes.buscarTodos);
router.get('/cliente/:id_cli', clientes.buscarUm);
router.post('/cliente', clientes.inserir);
router.put('/cliente/:id_cli', clientes.alterar);
router.delete('/cliente/:id_cli', clientes.excluir);


router.get('/livros', livros.buscarTodos);
router.get('/livro/:id_livro', livros.buscarUm);
router.post('/livro', livros.inserir);
router.put('/livro/:id_livro', livros.alterar);
router.delete('/livro/:id_livro', livros.excluir);

router.get('/lojas', lojas.buscarTodos);
router.get('/loja/:id_loja', lojas.buscarUm);
router.post('/loja', lojas.inserir);
router.put('/loja/:id_loja', lojas.alterar);
router.delete('/loja/:id_loja', lojas.excluir);

router.get('/front', (req, res) => {
    return res.render('index');
})
router.get('/natty', (req, res) => {
    return res.render('indexNatty');
})

router.get('/documentacao', (req, res) => {
    return res.render('api-uso');
})

module.exports = router;