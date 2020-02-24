import React from "react";
import {BlockSideBarWrapper, BlockWrapper} from "../../components/Blocks"
import {ImageCircle} from "../../components/Images";
import logo from "../../source/images/photo.png";
import {TextTitle, TextContent} from "../../components/Texts";
import {Button} from "../../components/Buttons";
import NavigationsButtonBlock from "./NavigationsButtonBlock";
import Flag from 'react-world-flags'
import TechnologyBoard from "../TechnologyBoard";
import styled from "styled-components";

const BlockWrapperSideBar = styled(BlockSideBarWrapper)`
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../../source/images/huas1.jpeg");
   
    @media(max-width: 1500px){
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("");
        padding-top: 0px;
    }
`;

export default React.memo(() => {
    return (
        <BlockWrapperSideBar>
            <BlockSideBarWrapper>
                <BlockWrapper width={'initial'}>
                    <Button>
                        <ImageCircle
                            width={'200px'}
                            height={'200px'}
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
                    </Button>
                    <NavigationsButtonBlock/>
                </BlockWrapper>
            </BlockSideBarWrapper>
        </BlockWrapperSideBar>
    )
})

