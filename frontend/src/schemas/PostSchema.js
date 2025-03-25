import {z} from 'zod';


export const postSchema = z.object({
    title: z.string(),
    content: z.string(),

});