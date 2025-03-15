import postService from '../services/postService.js';
import "dotenv/config";

async function create (req, res) {
    const body = req.body;
    const {_id: id} = res.locals.user;

    try {
        const post = await postService.create(body, id);
        return res.status(201).send(post);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

export default { create }