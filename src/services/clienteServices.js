const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM clientes', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id_cli) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM clientes WHERE id_cli = ?', [id_cli], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO clientes (nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli) values (?, ?, ?, ?, ?, ?)',
                [nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);

            });
        });
    },

    alterar: (id_cli, nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE clientes SET nome_cli = ?, sexo_cli = ?, nasc_cli = ?, ender_cli = ?, tel_cli = ?, cpf_cli = ? WHERE id_cli = ?',
                [nome_cli, sexo_cli, nasc_cli, ender_cli, tel_cli, cpf_cli, id_cli],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results);
            });
        });
    },

    excluir: (id_cli) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM clientes WHERE id_cli = ?',[id_cli], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};