import postRepository from "../repositories/postRepository.js";

async function create(body, id) {
    if(!id) throw new Error("User not found");


    return await postRepository.create({ ...body, userId: id });
    
}

export default { create }