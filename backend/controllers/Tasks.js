import Task from "../models/TaskModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getTasks = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Task.findAll({
                attributes: ['uuid', 'name', 'description', 'status', 'priority', 'dueDate'],
                include: [{
                    model: User,
                    attributes: ['imie', 'nazwisko', 'email']
                }]
            });
        } else {
            response = await Task.findAll({
                attributes: ['uuid', 'name', 'description', 'status', 'priority', 'dueDate'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['imie', 'nazwisko', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!task) return res.status(404).json({ msg: "Brak danych w bazie" });
        let response;
        if (req.role === "admin") {
            response = await Task.findOne({
                attributes: ['uuid', 'name', 'description', 'status', 'priority', 'dueDate'],
                where: {
                    id: task.id
                },
                include: [{
                    model: User,
                    attributes: ['imie', 'nazwisko', 'email']
                }]
            });
        } else {
            response = await Task.findOne({
                attributes: ['uuid', 'name', 'description', 'status', 'priority', 'dueDate'],
                where: {
                    [Op.and]: [{ id: task.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['imie', 'nazwisko', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createTask = async (req, res) => {
    const { name, description, status, priority, dueDate } = req.body;
    try {
        await Task.create({
            name: name,
            description: description,
            status: status,
            priority: priority,
            dueDate: dueDate,
            userId: req.userId
        });
        res.status(201).json({ msg: "Zadanie zostało stworzone poprawnie" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!task) return res.status(404).json({ msg: "Brak danych w bazie" });
        const { name, description, status, priority, dueDate } = req.body;
        if (req.role === "admin") {
            await Task.update({ name, description, status, priority, dueDate }, {
                where: {
                    id: task.id
                }
            });
        } else {
            if (req.userId !== task.userId) return res.status(403).json({ msg: "Brak dostępu" });
            await Task.update({ name, description, status, priority, dueDate }, {
                where: {
                    [Op.and]: [{ id: task.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Zadanie zaktualizowane poprawnie" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!task) return res.status(404).json({ msg: "Brak danych w bazie" });
        const { name, description, status, priority, dueDate } = req.body;
        if (req.role === "admin") {
            await Task.destroy({
                where: {
                    id: task.id
                }
            });
        } else {
            if (req.userId !== task.userId) return res.status(403).json({ msg: "Brak dostępu" });
            await Task.destroy({
                where: {
                    [Op.and]: [{ id: task.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Zadanie zostało poprawnie usunięte" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}