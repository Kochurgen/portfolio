import React from "react";
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks"
import styled from "styled-components"
import {TextContent} from "../components/Texts";
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const Line = styled.p`
    text-align: left;
    margin: 10px 10px;
`;

class Experience extends React.PureComponent {
    constructor(props) {
        super(props);
        this.props.selectPage(2)
    }

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
                    <Wrapper>
                        <h1>Technical Experience</h1>
                        <Line><TextContent size={"1.2rem"}><strong>Cross-platform:</strong> React Native, Cordova,
                            Electron,
                            Crosswalk, Tizen, WebOS.</TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>DataBase:</strong> MongoDB, Google Firebase, MySQL,
                            PostgreSQL, SQLite</TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>JavaScript core:</strong> jQuery, NPM,
                            TypeScript, Yarn, Webpack. </TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>JavaScript frameworks:</strong> Backbone.js, RAD.JS,
                            React.js / React Native, Redux </TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>JavaScript
                            Node.js:</strong> Express.js.</TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>Markup:</strong> Bootstrap, CSS3, HTML5, Markdown,
                            LESS,
                            Sass, Styled Components</TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>OS:</strong> GNU / Linux, OS X,
                            Windows.</TextContent></Line>
                        <Line><TextContent size={"1.2rem"}><strong>Version Control:</strong> Git, GitHub,
                            GitLab.</TextContent>
                        </Line>
                        <Line><TextContent size={"1.2rem"}><strong>Testing:</strong> Mocha,
                            Jasmine.</TextContent></Line>
                        <h1>Professional Experience</h1>

                        <Line><TextContent size={"1.2rem"}>Basic understanding concepts of functional programming.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Basic knowledge in frontend Angular 2+, React/React Native.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Basic knowledge in Design Patterns.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Basics of dev-ops (build systems, formatting and linting tools, deployment, etc).</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Build systems Webpack, Gulp, Grunt.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>HTML and template engines.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Have experience in creating cross-platform applications for Android, iOS, Windows, Windows RT (Cordova / Electron) Tizen, WebOs .</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Testing Mocha, Chai.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Tiny DevOps experience with microservices.</TextContent></Line>

                        <Line><TextContent size={"1.2rem"}>Unix-based, Linux, Shell scripting (sh, bash, zsh, fish), Git.</TextContent></Line>
                    </Wrapper>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        )
    }
}

const mapStateToProps = state => {
    return ({})
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return ({
        selectPage: pageId => dispatch(selectPage(pageId))
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Experience)