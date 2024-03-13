import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECOND = 5000;

export const count_connect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection: ${numConnection}`);
}

export const check_overload = () => {
    setInterval(() => {
        const num_connection = mongoose.connections.length;
        const num_cores = os.cpus().length;
        const memory_usage = process.memoryUsage().rss;

        const max_connections = num_cores * 5;

        console.log(`Active connection: ${num_connection}`);
        console.log(`Memory usage: ${memory_usage / 1024 / 1024} MB`);

        if (num_connection > max_connections) {
            console.log(`Connection overload detected`);
        }
    }, _SECOND) // Monitor every 5s
}