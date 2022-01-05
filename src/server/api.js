// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
const { MongoClient } = require("mongodb"); 

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3002;
const DIST_DIR = './dist';

const URI = process.env.MONGODB_URI || 'mongodb+srv://userdb:SdQ7nnT0HjNekQ30@japao.3di3f.mongodb.net/japao?retryWrites=true&w=majority';

app.use(express.static(DIST_DIR));

app.use(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

/* app.get('/api/v1/user', async function (req, res) {
    return res.json('{"teste":"123"}');
}); */

app.get('/api/v1/user/:username&:password', async function (req, res) {
    var userParam = req.params.username;
    var passParam = req.params.password;

    try {
        const filter = { username: userParam, password: passParam };
        /* const data = await query('user', filter, 1); */
        const data = await getUser(filter, 1);
        return res.json(data);
    } catch(err) {
        console.log(err);
    }

    /* res.json({ success: true }); */
});

async function query(table, filter, size){
    const client = new MongoClient(URI, { useUnifiedTopology: true });
    try {
        await client.connect();

        const database = client.db('japao');
        const collection = database.collection(table);

        /* const query = { username: "lucas", password: "123" }; */
        const cursor = collection.aggregate([
            { $match: filter },
            { $sample: { size: size } }
        ]);

        const user = await cursor.next();
        return user;
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

async function getUser(filter, size){
    const client = new MongoClient(URI, { useUnifiedTopology: true });
    try {
        await client.connect();

        const database = client.db('japao');
        const user = database.collection('user');
        const address = database.collection('address');

        /* const query = { username: "lucas", password: "123" }; */
        const userCursor = user.aggregate([
            { $match: filter },
            { $sample: { size: size } }
        ]);

        const userCollection = await userCursor.next();

        const addressCursor = address.aggregate([
            { $match: { _id: userCollection.address } },
            { $sample: { size: 1 } }
        ]);

        const addressCollection = await addressCursor.next();
        userCollection.address = addressCollection;

        return userCollection;
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
