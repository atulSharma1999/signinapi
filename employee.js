const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true } , { useUnifiedTopology: true } , (error, client) => {
if (error) {
    return console.log('Unable to connect to databse!')
}    
const db = client.db(databaseName)

db.collection('users').insertOne({
    firstname: 'Atul',
    lastname: 'Sharma',
    Occupation: 'job',
    email: 'atul.sharma@technocodz'
}, (error, result) => {
    if (error) {
        return console.log('Unable to insert user')
    }

    console.log(result.ops)

})
})