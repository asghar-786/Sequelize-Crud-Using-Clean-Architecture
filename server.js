const fastify = require("fastify");
const appRoute =require("./src/Routes/routes");
const app=fastify();
const PORT= 3000;
appRoute(app);
app.listen(PORT, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is listening on ${PORT}`,address);;
});

