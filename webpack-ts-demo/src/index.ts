import { app } from "./app/app";

function component() {
    const element = document.createElement('div');

    element.innerHTML = "Hello Webpack Ts";
    app();
    return element;
}

document.body.appendChild(component());