const CrudRepository = require('./crud-repository');
const { Like } = require('../models');

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async isLiked(data) {
        console.log(data)
        try {
            const response = await Like.findOne({
                where: {
                    userId: data.userId,
                    likableId: data.likableId,
                    likableType: data.likableType
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LikeRepository;