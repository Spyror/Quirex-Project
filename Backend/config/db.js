import mongoose from "mongoose"

export const DBconnect=async ()=>{
  const conn = await mongoose.connect("mongodb://localhost:27017/Quirex");
  if(conn){
    console.log("DB connected Successfully...");
  }
}
