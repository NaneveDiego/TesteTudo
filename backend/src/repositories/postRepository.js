import PostSchema from '../schemas/Post.js';

async function create(data){
    return await PostSchema.create(data);
}

async function findAllByUser(id){
    return await PostSchema.find({ userId: id });
}


export default { create, findAllByUser };