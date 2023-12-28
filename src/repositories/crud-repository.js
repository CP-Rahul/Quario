const { StatusCodes } = require('http-status-codes');

const AppError = require("../utills/error/app-error");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if(!response) {
            throw new AppError('Cannot find the requested resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async update(data, id) {
        const response = await this.model.update(data,{
            where: {
                id: id
            }
        })
        if(response == 0) {
            throw new AppError('Cannot update the requested resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: {
                id: data
            }
        })
        return response;
    }
}

module.exports = CrudRepository;