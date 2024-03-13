import mongoose from 'mongoose';
import { count_connect } from "../helpers/check_connect"
import { config } from '../configs/config.mongodb';

const { host, name, port } = config.db;
const connectString: string = `mongodb://${host}:${port}/${name}`;

export default class Database {
    private static instance: Database;

    constructor() {
        this.connect();
    }

    connect(type: string = "mongodb") {
        console.log("Connecting to MongoDB...");

        mongoose
            .connect(connectString)
            .then((_) => console.log("Connected Mongodb Success, ", () => count_connect()))
            .catch((err) => console.log("Error Connect!"));
    }

    public static get_instance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance
    }
}