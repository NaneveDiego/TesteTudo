import postRepository from "../repositories/postRepository.js";

async function create(body, id) {
    if(!id) throw new Error("User not found");


    return await postRepository.create({ ...body, userId: id });
    
}

async function edit(body, id) {
    return await postRepository.edit({ ...body, _id: id });
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

async function deletePost(id){
    return await postRepository.deletePost(id)
}

export default { create, findAllByUser, findAll, findPostById,edit,deletePost }