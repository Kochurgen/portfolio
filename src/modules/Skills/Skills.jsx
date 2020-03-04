import React from "react";
import {BlockContentWrapper} from "../../components/Blocks"

export default class Experience extends React.PureComponent{
    constructor(props) {
        super(props);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render(){
        return (
            <BlockContentWrapper>
                <h1>Technical Experience</h1>
                <p><strong>Cross-platform:</strong> React Native, Cordova, Electron, Crosswalk.</p>
                <p><strong>DataBase:</strong> MongoDB, Google Firebase, MySQL, PostgreSQL, SQLite</p>
                <p><strong>JavaScript core:</strong> jQuery, Mocha, NPM, TypeScript, Yarn, Webpack. </p>
                <p><strong>JavaScript frameworks:</strong> Backbone.js, RAD.JS, React.js / React Native, </p>
                <p><strong>JavaScript Node.js:</strong> Express.js, KeystoneJS, Koa, Next.js, Strapi.</p>
                <p><strong>Markup</strong>Bootstrap, CSS3, HTML5, Markdown, LESS, Sass, Styled Components</p>
                <p><strong>OS:</strong> GNU / Linux, OS X, Windows.</p>
                <p><strong>Version Control:</strong> Git, GitHub, GitLab.</p>
            </BlockContentWrapper>
        )
    }
}