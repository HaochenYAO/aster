import * as express  from "express";
import * as path from "path";

import * as React from "react";
import { renderToString } from "react-dom/server";
import Test from "../client/containers/TestApp/Test";
const app = express();

app.use( express.static( path.resolve( __dirname, "../build" ) ) );

app.get( "/*", ( req: any, res: any ) => {
    const jsx = ( <Test /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );
app.listen( 2048 );

function htmlTemplate( reactDom: any ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}