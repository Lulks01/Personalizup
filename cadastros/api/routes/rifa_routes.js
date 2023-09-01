import express from "express";
import { getRifas, addRifa, changeRifa, deleteRifa } from '../controllers.js/rifa_controller.js';

const router = express.Router();

router.get('/', getRifas);

router.post('/', addRifa);

router.put('/:id_cliente', changeRifa);

router.delete('/:rifa_numero', deleteRifa);

export default router;