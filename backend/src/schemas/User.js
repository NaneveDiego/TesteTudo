import {  Schema, model  } from 'mongoose';


const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true , required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    role: { type: String, required: true },
    features: [String]
});

export default model('users', UserSchema);