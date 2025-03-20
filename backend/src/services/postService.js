import postRepository from "../repositories/postRepository.js";

async function create(body, id) {
    if(!id) throw new Error("User not found");


    return await postRepository.create({ ...body, userId: id });
    
}

async function findAllByUser(id) {
    if(!id) throw new Error("User not found");

    return await postRepository.findAllByUser(id);
}

export default { create, findAllByUser }