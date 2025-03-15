import PostSchema from '../schemas/Post.js';

async function create(data){
    return await PostSchema.create(data);
}

export default { create };