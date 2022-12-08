const lojaServices = require('../services/lojaServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let lojas = await lojaServices.buscarTodos();

        for(let i in lojas) {
            json.result.push({
                id_loja: lojas[i].id_loja,
                nome_loja: lojas[i].nome_loja,
                tele_loja: lojas[i].tele_loja,
                cnpj_loja: lojas[i].cnpj_loja,
                ender_loja: lojas[i].ender_loja
            });
        }
        res.json(json);
    },
    
    buscarUm: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let id_loja = req.params.id_loja;
        let loja = await lojaServices.buscarUm(id_loja);

        if(loja) {
            json.result = loja;
        }
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let nome_loja = req.body.nome_loja;
        let tele_loja = req.body.tele_loja;
        let cnpj_loja = req.body.cnpj_loja;
        let ender_loja = req.body.ender_loja;


        if(nome_loja && tele_loja && cnpj_loja && ender_loja) {
            let lojaCodigo = await lojaServices.inserir(nome_loja, tele_loja, cnpj_loja, ender_loja);
            json.result = {
                id_livro: lojaCodigo,
                nome_loja,
                tele_loja,
                cnpj_loja,
                ender_loja
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },
    
    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let id_loja = req.params.id_loja;
        let nome_loja = req.body.nome_loja;
        let tele_loja = req.body.tele_loja;
        let cnpj_loja = req.body.cnpj_loja;
        let ender_loja = req.body.ender_loja;


        if(id_loja && nome_loja && tele_loja && cnpj_loja && ender_loja) {
            await lojaServices.alterar(id_loja, nome_loja, tele_loja, cnpj_loja, ender_loja);
            json.result = {
                id_loja,
                nome_loja,
                tele_loja,
                cnpj_loja,
                ender_loja
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {erros: '', result: {}};

        await lojaServices.excluir(req.params.id_loja);

        res.json(json);
    }
}
