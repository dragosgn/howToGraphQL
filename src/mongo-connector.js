const {MongoClient} = require('mongodb');

// 1
const MONGO_URL = 'mongodb://127.0.0.1:27017/hackernews';

// 2
module.exports = async () => {
    const db = await MongoClient.connect(MONGO_URL);
    return {
        Links: db.collection('links'),
        Users: db.collection('users'),
    };
}
