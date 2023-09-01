import express from "express";

import { getClients, addClient, deleteClient, updateCLient } from '../controllers.js/client.js';

const router = express.Router();

router.get('/', getClients);

router.post("/", addClient)

router.put("/:id", updateCLient)

router.delete("/:id", deleteClient)

export default router