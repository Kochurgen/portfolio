import React from "react";
import {BlockContentWrapper} from "../components/Blocks"
import styled from "styled-components"
import {TextContent} from "../components/Texts";

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

export default class Experience extends React.PureComponent {
    componentWillUnmount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <BlockContentWrapper>
                <Wrapper>
                    <h1>Technical Experience</h1>
                    <p><TextContent size={"1.2rem"}><strong>Cross-platform:</strong> React Native, Cordova, Electron, Crosswalk, Tizen, WebOS.</TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>DataBase:</strong> MongoDB, Google Firebase, MySQL, PostgreSQL, SQLite</TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>JavaScript core:</strong> jQuery, Mocha, NPM, TypeScript, Yarn, Webpack. </TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>JavaScript frameworks:</strong> Backbone.js, RAD.JS, React.js / React Native, </TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>JavaScript Node.js:</strong> Express.js.</TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>Markup:</strong> Bootstrap, CSS3, HTML5, Markdown, LESS, Sass, Styled Components</TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>OS:</strong> GNU / Linux, OS X, Windows.</TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>Version Control:</strong> Git, GitHub, GitLab.</TextContent></p>
                    <p><TextContent size={"1.2rem"}><strong>Testing:</strong> Mocha, Jasmine.</TextContent></p>
                </Wrapper>
            </BlockContentWrapper>
        )
    }
}