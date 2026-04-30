

const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
}
const loadData2 = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((response) => response.json())
        .then((json) => console.log(json));
}