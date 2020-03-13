import React from "react";
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks"
import styled from "styled-components"
import {TextContent} from "../components/Texts";

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const Line = styled.p`
    text-align: left;
    margin: 10px 10px;
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
                <BlockInformationWrapper>
                    <h1>Technical Experience</h1>
                    <Line><TextContent size={"1.5rem"}><strong>Cross-platform:</strong> React Native, Cordova, Electron,
                        Crosswalk, Tizen, WebOS.</TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>DataBase:</strong> MongoDB, Google Firebase, MySQL,
                        PostgreSQL, SQLite</TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>JavaScript core:</strong> jQuery, Mocha, NPM, TypeScript,
                        Yarn, Webpack. </TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>JavaScript frameworks:</strong> Backbone.js, RAD.JS,
                        React.js / React Native, </TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>JavaScript Node.js:</strong> Express.js.</TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>Markup:</strong> Bootstrap, CSS3, HTML5, Markdown, LESS,
                        Sass, Styled Components</TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>OS:</strong> GNU / Linux, OS X, Windows.</TextContent></Line>
                    <Line><TextContent size={"1.5rem"}><strong>Version Control:</strong> Git, GitHub, GitLab.</TextContent>
                    </Line>
                    <Line><TextContent size={"1.5rem"}><strong>Testing:</strong> Mocha, Jasmine.</TextContent></Line>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        )
    }
}