import mongoose from "mongoose";

const connectString = "mongodb://localhost:27017/shop_dev";

mongoose
    .connect(connectString)
    .then((_) => console.log("Connected Mongodb Success"))
    .catch((err) => console.log("Error Connect!"));

if (0 === 0) {
    mongoose.set("debug", true);
    mongoose.set("debug", { color: true })
}

export default mongoose;