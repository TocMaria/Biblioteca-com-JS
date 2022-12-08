const clienteServices = require('../services/clienteServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let clientes = await clienteServices.buscarTodos();

        for(let i in clientes) {
            json.result.push({
                id_cli: clientes[i].id_cli,
                nome_cli: clientes[i].nome_cli,
                sexo_cli: clientes[i].sexo_cli,
                nasc_cli: clientes[i].nasc_cli,
                ender_cli: clientes[i].nome_cli,
                tel_cli: clientes[i].tel_cli,
                cpf_cli: clientes[i].cpf_cli
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let id_cli = req.params.id_cli;
        let cliente = await clienteServices.buscarUm(id_cli);

        if(cliente) {
            json.result = cliente;
        }
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let nome_cli = req.body.nome_cli;
        let sexo_cli = req.body.sexo_cli;
        let nasc_cli = req.body.nasc_cli;
        let ender_cli = req.body.ender_cli;
        let tel_cli = req.body.tel_cli;
        let cpf_cli = req.body.cpf_cli;

        if(nome_cli && sexo_cli && nasc_cli && ender_cli && tel_cli && cpf_cli) {
            let clienteCodigo = await clienteServices.inserir(nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli);
            json.result = {
                id_cli: clienteCodigo,
                nome_cli,
                sexo_cli,
                nasc_cli,
                ender_cli,
                tel_cli,
                cpf_cli
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let id_cli = req.params.id_cli;
        let nome_cli = req.body.nome_cli;
        let sexo_cli = req.body.sexo_cli;
        let nasc_cli = req.body.nasc_cli;
        let ender_cli = req.body.ender_cli;
        let tel_cli = req.body.tel_cli;
        let cpf_cli = req.body.cpf_cli;

        if(id_cli && nome_cli && sexo_cli && nasc_cli && ender_cli && tel_cli && cpf_cli) {
            await clienteServices.alterar(id_cli, nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli);
            json.result = {
                id_cli,
                sexo_cli,
                nasc_cli,
                ender_cli,
                tel_cli,
                cpf_cli
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {erros: '', result: {}};

        await clienteServices.excluir(req.params.id_cli);

        res.json(json);
    }
}