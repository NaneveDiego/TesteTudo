import { postSchema } from '../../../frontend/src/schemas/PostSchema.js';
import PostSchema from '../schemas/Post.js';

async function create(data){
    return await PostSchema.create(data);
}

async function findAllByUser(id){
    return await PostSchema.find({ userId: id });
}

async function findAll(){
    return await PostSchema.find().populate('userId','name')
}

async function findPostById(id){
   return await PostSchema.findById(id).populate('userId','name')
}


export default { create, findAllByUser, findAll, findPostById };