import axios from "axios";
import config from "../config/config.js";

export const getPosts = () => axios.get(config.server + "posts");
export const createPost = (post) => axios.post(config.server + "posts", post);
