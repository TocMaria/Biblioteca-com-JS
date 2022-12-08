const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM lojas', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id_loja) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM lojas WHERE id_loja = ?', [id_loja], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_loja, tele_loja, cnpj_loja, ender_loja) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO lojas (nome_loja, tele_loja, cnpj_loja, ender_loja) VALUES (?, ?, ?, ?)',
                [nome_loja, tele_loja, cnpj_loja, ender_loja],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    },

    alterar: (id_loja, nome_loja, tele_loja, cnpj_loja, ender_loja) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE lojas SET nome_loja = ?, tele_loja = ?, cnpj_loja = ?, ender_loja = ? WHERE id_loja = ?',
                [nome_loja, tele_loja, cnpj_loja, ender_loja, id_loja],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    }, 

    excluir: (id_loja) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM lojas WHERE id_loja = ?',[id_loja], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};