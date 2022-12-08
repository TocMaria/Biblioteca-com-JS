const livroServices = require('../services/livroServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let livros = await livroServices.buscarTodos();

        for(let i in livros) {
            json.result.push({
                id_livro: livros[i].id_livro,
                nome_livro: livros[i].nome_livro,
                autor_livro: livros[i].autor_livro,
                genero_livro: livros[i].genero_livro,
                editora_livro: livros[i].editora_livro,
                data_lancamento_livro: livros[i].data_lancamento_livro,
                desc_livro: livros[i].desc_livro,
                obs_livro: livros[i].obs_livro,
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let id_livro = req.params.id_livro;
        let livro = await livroServices.buscarUm(id_livro);

        if(livro) {
            json.result = livro;
        }
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let nome_livro = req.body.nome_livro;
        let autor_livro = req.body.autor_livro;
        let genero_livro = req.body.genero_livro;
        let editora_livro = req.body.editora_livro;
        let data_lancamento_livro = req.body.data_lancamento_livro;
        let desc_livro = req.body.desc_livro;
        let obs_livro = req.body.obs_livro;


        if(nome_livro && autor_livro && genero_livro && editora_livro && data_lancamento_livro && desc_livro && obs_livro) {
            let livroCodigo = await livroServices.inserir(nome_livro, autor_livro, genero_livro, editora_livro, data_lancamento_livro, desc_livro, obs_livro);
            json.result = {
                id_livro: livroCodigo,
                nome_livro,
                autor_livro,
                genero_livro,
                editora_livro,
                data_lancamento_livro,
                desc_livro,
                obs_livro
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let id_livro = req.params.id_livro;
        let nome_livro = req.body.nome_livro;
        let autor_livro = req.body.autor_livro;
        let genero_livro = req.body.genero_livro;
        let editora_livro = req.body.editora_livro;
        let data_lancamento_livro = req.body.data_lancamento_livro;
        let desc_livro = req.body.desc_livro;
        let obs_livro = req.body.obs_livro;



        if(nome_livro && autor_livro && genero_livro && editora_livro && data_lancamento_livro && desc_livro && obs_livro) {
            await livroServices.alterar(nome_livro, autor_livro, genero_livro, editora_livro, data_lancamento_livro, desc_livro, obs_livro);
            json.result = {
                id_livro: livroCodigo,
                nome_livro,
                autor_livro,
                genero_livro,
                editora_livro,
                data_lancamento_livro,
                desc_livro,
                obs_livro
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {erros: '', result: {}};

        await livroServices.excluir(req.params.id_livro);

        res.json(json);
    }

}