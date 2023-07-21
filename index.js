const axios = require('axios');
const fs = require('fs/promises');
const args = process.argv.slice(2);

const op = args[0];

const comments = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");

    await fs.writeFile("comments.txt", JSON.stringify(data));

    const leerDatos = await fs.readFile("comments.txt");
    
    console.log(JSON.parse(leerDatos));
}

const photos = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");

    await fs.writeFile("photos.txt", JSON.stringify(data));

    const leerDatos = await fs.readFile("photos.txt");
    
    console.log(JSON.parse(leerDatos));
}

const albums = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1/albums");

    await fs.writeFile("albums.txt", JSON.stringify(data));

    const leerDatos = await fs.readFile("albums.txt");
    
    console.log(JSON.parse(leerDatos));
}

const todos = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1/todos");

    await fs.writeFile("todos.txt", JSON.stringify(data));

    const leerDatos = await fs.readFile("todos.txt");
    
    console.log(JSON.parse(leerDatos));
}

const posts = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1/posts");

    await fs.writeFile("posts.txt", JSON.stringify(data));

    const leerDatos = await fs.readFile("posts.txt");
    
    console.log(JSON.parse(leerDatos));
}

const funcionMenu = () => {
    if(args.length == 0);

    console.log("Escoja una opción: ");
    console.log("1.- Comments");
    console.log("2.- Photos");
    console.log("3.- Albums");
    console.log("4.- Todos");
    console.log("5.- Posts");

    return process.exit();
}

const funcionOpciones = () => {
    switch (op){
        case "1":
            comments();
            break;
        case "2":
            photos();
            break;
        case "3":
            albums();
            break;
        case "4":
            todos();
            break;
        case "5":
            posts();
            break;
        default:
            funcionMenu();
    }
}

funcionOpciones();