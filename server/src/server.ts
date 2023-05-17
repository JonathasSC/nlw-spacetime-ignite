import fastify from "fastify";

const app = fastify()

app.get('/hello',() => {
    return console.log('Hello world')
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('Http server running on http://localhost:3333')
})