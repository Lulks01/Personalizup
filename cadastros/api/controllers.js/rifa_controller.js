import { db } from '../database.js';

export const getRifas = (req, res) => {
  const searchQuery = `SELECT id, nome, telefone, rifas.rifa_numero
                        FROM clientes
                        JOIN rifas
                        ON rifas.id_cliente = clientes.id
                        ORDER BY cast(rifa_numero as unsigned) ASC;`
  
  db.query(searchQuery, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}

export const addRifa = (req, res) => {
  const searchQuery = "INSERT INTO rifas(`id_cliente`, `rifa_numero`) VALUES(?)";

  const values = [
    req.body.id_cliente,
    req.body.rifa_numero,
  ];

  db.query(searchQuery, [values], (err) => {
    if(err) return res.json(err);
    
    return res.status(200).json("Número de rifa cadastrado com sucesso!");
  });
};

export const changeRifa = (req, res) => {
  const searchQuery = "UPDATE rifas SET `rifa_numero` = ? WHERE `id_cliente` = ?";

  const values = [
    req.body.rifa_numero,
  ];

  db.query(searchQuery, [values, req.params.id_cliente], (err) => {
    if(err) return res.json(err);
    
    return res.status(200).json("Número de Rifa atualizada com sucesso!");
  });
}

export const deleteRifa = (req, res) => {
  const searchQuery = "DELETE FROM rifas WHERE `rifa_numero` = ?";

  db.query(searchQuery, [req.params.rifa_numero], (err) => {
    if(err) return res.json(err);
    
    return res.status(200).json("Número de Rifa excluida com sucesso!");
  });
}

