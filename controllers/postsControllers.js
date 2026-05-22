import express from 'express';
import posts from '../data/posts.js';


const index = (request, response) => {
    response.json(posts)
}

export { index }