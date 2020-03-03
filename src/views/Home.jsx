import React from "react"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks"
import {ImageCircle} from "../components/Images";
import logo from "../source/images/photo.png";
import {TextContent, TextTitle} from "../components/Texts";
import Flag from "react-world-flags";
import TechnologyBoard from "../modules/TechnologyBoard";
import styled from "styled-components";



export default class Home extends React.PureComponent {
    render() {
        return (
            <BlockContentWrapper>
                <BlockInformationWrapper>
                    <ImageCircle
                        width={'20rem'}
                        height={'20rem'}
                        image={logo}
                        style={{margin: `0 auto`}}/>
                    <TextTitle color={'white'} size={'29px'}>
                        Volodymyr Kochubenko
                    </TextTitle>
                    <Flag code="ua" height="22px"/><TextContent color={"white"}
                                                                size={"22px"}> Ukraine </TextContent>
                    <TextTitle color={'white'} size={'29px'}>
                        frontend Developer
                    </TextTitle>
                    <TechnologyBoard/>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        )
    }
}