import mongoose from "mongoose";

export const Connection= async (username, password)=>{

const URL =`mongodb+srv://${username}:${password}@atlascluster.q4fqqjb.mongodb.net/Article?retryWrites=true&w=majority`;

    try{
 await  mongoose.connect(URL,{ useUnifiedTopology: true,useNewUrlParser: true });
 console.log("database connected");
} catch(error)
    {
console.log("error while connecting with the database",error);
    }

}