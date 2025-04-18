import PostSchema from '../schemas/Post.js';


async function create(data){
    return await PostSchema.create(data);
}

async function edit(data) {
    const { _id, title, content } = data;
  
    const update = { title, content }; // campos que quer atualizar
  
    const result = await PostSchema.findOneAndUpdate(
      { _id },              // filtro
      { $set: update },     // campos a atualizar
      { new: true, runValidators: true }
    );
  
    return result;
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

async function deletePost(id){
   return await PostSchema.findByIdAndDelete(id)
}


export default { create, findAllByUser, findAll, findPostById,edit,deletePost };