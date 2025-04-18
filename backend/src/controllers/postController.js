import postService from "../services/postService.js";
import "dotenv/config";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const post = await postService.create(body, id);
    return res.status(201).send(post);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function edit(req, res) {
  const body = req.body;
  const id = req.params.id;
  //console.log(body, "controler")
  try {
    const post = await postService.edit(body, id);
    return res.status(200).send(post);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function findAllByUser(req, res) {
  const { _id: id } = res.locals.user;
  try {
    const posts = await postService.findAllByUser(id);
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function findAll(req, res) {
  try {
    const posts = await postService.findAll();
    return res.status(200).send(posts);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function findPostById(req, res) {
  const id = req.params.id;
  try {
    const post = await postService.findPostById(id);
    return res.status(200).send(post);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function deletePost(req, res) {
  const id = req.params.id;
  try {
    const post = await postService.deletePost(id);
    return res.status(200).send(post);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

export default { create, findAllByUser, findAll, findPostById, edit, deletePost };
