import * as React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../router";

export default function App() {
    let element = useRoutes(routes);
    return (
        <>
                { element }
                <div>Hello React</div>
        </>
        

    );
}

