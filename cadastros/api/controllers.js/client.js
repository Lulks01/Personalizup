import { db } from '../database.js'

export const getClients = (req, res) => {
  const searchQuery = 'SELECT * FROM clientes'

  db.query(searchQuery, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
}