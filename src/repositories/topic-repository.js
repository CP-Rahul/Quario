const CrudRepository = require('./crud-repository');
const { Topic } = require('../models');

class TopicRepository extends CrudRepository {
    constructor() {
        super(Topic);
    }
}

module.exports = TopicRepository;