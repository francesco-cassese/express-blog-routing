import express from 'express';
import posts from '../data/posts.js';


const index = (request, response) => {
    response.json(posts)
}

const show = (request, response) => {
    const { id } = request.params;

    if (!id) {
        return response.status(404)
            .json({
                error: "ID mancante nella richiesta",
                results: null
            });
    }

    const numId = Number(id.trim());

    if (isNaN(numId)) {
        response.status(404)
            .json({
                error: `Valore dell'id non conforme o inesistente`,
                results: null
            })
        return;
    }

    if (numId % 1 !== 0) {
        return response.status(404)
            .json({
                error: `L'ID deve essere un numero intero`,
                results: null
            });
    }

    if (numId <= 0) {
        response.status(404)
            .json({
                error: `Non esistono elementi con id minori o uguali a zero nel sistema`,
                results: null
            })
        return;
    }

    const postsFound = posts.find(post => {
        return post.id === numId;
    })

    if (!postsFound) {
        return response.status(404)
            .json({
                error: `Post con ID ${numId} non trovato nel sistema`,
                results: null
            });
    }

    response.json({
        error: null,
        results: postsFound
    });
}

export { index, show }