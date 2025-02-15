import { MongoClient } from "mongodb"

const URI =
"mongodb+srv://Vnvinih:@Vnvinih1@cluster0.2pkhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

const db = client.db("spotifyAula")
const songCollection = db.collection('songs').find({}).toArray()

console.log(songCollection)