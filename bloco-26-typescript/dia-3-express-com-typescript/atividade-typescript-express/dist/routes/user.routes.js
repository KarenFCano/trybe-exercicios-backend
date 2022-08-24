"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const router = (0, express_1.Router)();
const userController = new user_controller_1.default();
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', user_middleware_1.default, userController.create);
router.put('/users/:id', user_middleware_1.default, userController.update);
router.delete('/users/:id', userController.delete);
exports.default = router;
