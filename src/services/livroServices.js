const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM livros', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id_livro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM livros WHERE id_livro = ?', [id_livro], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_livro, autor_livro, genero_livro, editora_livro, data_lancamento_livro, desc_livro, obs_livro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO livros (nome_livro, autor_livro, genero_livro, editora_livro,  data_lancamento_livro, desc_livro, obs_livro) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [nome_livro, autor_livro, genero_livro, editora_livro,  data_lancamento_livro, desc_livro, obs_livro],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    },

    alterar: (id_livro, nome_livro, autor_livro, genero_livro, editora_livro, data_lancamento_livro, desc_livro, obs_livro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE livros SET nome_livro = ?, autor_livro = ?, genero_livro = ?, editora_livro = ?, data_lancamento_livro = ? , desc_livro = ?, obs_livro = ? WHERE id_livro = ?',
                [nome_livro, autor_livro, genero_livro, editora_livro,  data_lancamento_livro, desc_livro, obs_livro, id_livro],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results);
            });
        });
    },

    excluir: (id_livro) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM livros WHERE id_livro = ?',[id_livro], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};