import postRepository from "../repositories/postRepository.js";

async function create(body, id) {
    if(!id) throw new Error("User not found");


    return await postRepository.create({ ...body, userId: id });
    
}

async function findAllByUser(id) {
    if(!id) throw new Error("User not found");

    return await postRepository.findAllByUser(id);
}

async function findAll(){
    return await postRepository.findAll()
}

async function findPostById(id){
    return await postRepository.findPostById(id)
}

export default { create, findAllByUser, findAll, findPostById }