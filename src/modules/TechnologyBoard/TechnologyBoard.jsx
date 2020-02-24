import React from "react";
import TechnologyBoardItem from "./TechnologyBoardItem";
import {BlockTechnology} from "../../components/Blocks";
import androidOriginal from "../../source/images/android-original.svg"
import htmlOriginal from "../../source/images/html5-original.svg"
import cssOriginal from "../../source/images/css3-original.svg"
import angularOriginal from "../../source/images/angularjs-original.svg"
import appleOriginal from "../../source/images/apple-original.svg"
import backbonejsOriginal from "../../source/images/backbonejs-original.svg"
import electronOriginal from "../../source/images/electron-original.svg"
import expressOriginal from "../../source/images/express-original.svg"
import gitOriginal from "../../source/images/git-original.svg"
import javascriptOriginal from "../../source/images/javascript-original.svg"
import jQueryOriginal from "../../source/images/jquery-original.svg"
import linuxOriginal from "../../source/images/linux-original.svg"
import mongodbOriginal from "../../source/images/mongodb-original.svg"
import nodejsOriginal from "../../source/images/nodejs-original.svg"
import reactOriginal from "../../source/images/react-original.svg"
import reduxOriginal from "../../source/images/redux-original.svg"
import sassOriginal from "../../source/images/sass-original.svg"
import typescriptOriginal from "../../source/images/typescript-original.svg"
import webpackOriginal from "../../source/images/webpack-original.svg"
import windowsOriginal from "../../source/images/windows8-original.svg"
import yarnOriginal from "../../source/images/yarn-original.svg"
import vuejsOriginal from "../../source/images/vuejs-original.svg"

export default class TechnologyBoard extends React.PureComponent {
    render() {
        return (
                <BlockTechnology>
                    <TechnologyBoardItem image={androidOriginal} name={"Android"}/>
                    <TechnologyBoardItem image={htmlOriginal} name={"Html5"}/>
                    <TechnologyBoardItem image={cssOriginal} name={"Css3"}/>
                    <TechnologyBoardItem image={angularOriginal} name={"Angular"}/>
                    <TechnologyBoardItem image={appleOriginal} name={"Mac OS"}/>
                    <TechnologyBoardItem image={backbonejsOriginal} name={"Backbone"}/>
                    <TechnologyBoardItem image={electronOriginal} name={"Electrone"}/>
                    <TechnologyBoardItem image={expressOriginal} name={"Express"}/>
                    <TechnologyBoardItem image={gitOriginal} name={"Git"}/>
                    <TechnologyBoardItem image={javascriptOriginal} name={"Javascript"}/>
                    <TechnologyBoardItem image={jQueryOriginal} name={"jQuery"}/>
                    <TechnologyBoardItem image={linuxOriginal} name={"Linux"}/>
                    <TechnologyBoardItem image={mongodbOriginal} name={"Mongodb"}/>
                    <TechnologyBoardItem image={nodejsOriginal} name={"Nodejs"}/>
                    <TechnologyBoardItem image={reactOriginal} name={"React"}/>
                    <TechnologyBoardItem image={reduxOriginal} name={"Redux"}/>
                    <TechnologyBoardItem image={sassOriginal} name={"Sass"}/>
                    <TechnologyBoardItem image={typescriptOriginal} name={"Typescript"}/>
                    <TechnologyBoardItem image={vuejsOriginal} name={"Vue"}/>
                    <TechnologyBoardItem image={webpackOriginal} name={"Webpack"}/>
                    <TechnologyBoardItem image={windowsOriginal} name={"Windows"}/>
                    <TechnologyBoardItem image={yarnOriginal} name={"Yarn"}/>
                </BlockTechnology>
        );
    }
}