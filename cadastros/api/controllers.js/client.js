import { db } from '../database.js'

export const getClients = (req, res) => {
  const searchQuery = `SELECT * FROM clientes`

  db.query(searchQuery, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}


export const addClient = (req, res) => {
  const searchQuery = "INSERT INTO clientes(`nome`, `telefone`, `gastos`) VALUES(?)";
  
  const values = [
    req.body.nome,
    req.body.telefone,
    req.body.gastos,
  ];

  db.query(searchQuery, [values], (err) => {
    if(err) return res.json(err);
    
    return res.status(200).json("Cliente cadastrado com sucesso!");
  });
};

export const updateCLient = (req, res) => {
  const searchQuery = "UPDATE clientes SET `nome` = ?, `telefone` = ?, `gastos` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.telefone,
    req.body.gastos,
  ];

  db.query(searchQuery, [...values, req.params.id], (err) => {
    if(err) return res.json(err);
    
    return res.status(200).json("Cliente atualizado com sucesso!");
  });
}


export const deleteClient = (req, res) => {
  const searchQuery = "DELETE FROM clientes WHERE `id` = ?";

  db.query(searchQuery, [req.params.id], (err) => {
    if(err) return res.json(err);
    
    return res.status(200).json("Cliente deletado com sucesso!");
  });
}

