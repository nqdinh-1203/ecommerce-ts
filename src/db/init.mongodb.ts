import mongoose from 'mongoose';
import { count_connect } from "../helpers/check_connect"

const connectString: string = "mongodb://127.0.0.1:27017/shopdev";

export default class Database {
    private static instance: Database;

    constructor() {
        this.connect();
    }

    connect(type: string = "mongodb") {
        console.log("Connecting to MongoDB...");

        mongoose
            .connect(connectString)
            .then((_) => console.log("Connected Mongodb Success, ", count_connect()))
            .catch((err) => console.log("Error Connect!"));
    }

    public static get_instance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance
    }
}