import axios from "axios";
const BASE_PATH_API = "http://localhost/api/";
export const createPost = (data) =>
    axios.post(`${BASE_PATH_API}posts`, data);

export const getPost = (id) =>
    axios.get(`${BASE_PATH_API}posts/${id}`);

export const getPosts = (params) =>
    axios.get(`${BASE_PATH_API}posts`, {params});

export const updatePost = (id, data) =>
    axios.put(`${BASE_PATH_API}posts/${id}`, data);

export const deletePost = (id) =>
    axios.delete(`${BASE_PATH_API}posts/${id}`);

export const searchPosts = (data) =>
    axios.post(`${BASE_PATH_API}posts/search`, data);
