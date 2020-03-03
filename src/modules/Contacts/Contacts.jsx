import React from "react"
import styled from "styled-components"
import {BlockContentWrapper, BlockInformationWrapper} from "../../components/Blocks";
import List from "../../components/List"
import {FaPhone, FaSkype, FaTelegram} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {BlockWrapper} from "../../components/Blocks";
import {ImageCircle} from "../../components/Images";
import logo from "../../source/images/photo.png";
import {TextTitle, TextLink} from "../../components/Texts";

const ItemList = styled.a`
    text-decoration: none;
    color: cadetblue;
`;

export default React.memo(() => {
    return (
        <BlockContentWrapper>
            <BlockInformationWrapper>
                <BlockWrapper width={"50%"} height={"50%"} style={{margin: "0 auto"}}>
                    <ImageCircle
                        width={'20rem'}
                        height={'20rem'}
                        image={logo}
                        style={{margin: `0 auto`}}/>
                    <TextTitle size={'29px'}>
                        Volodymyr Kochubenko
                    </TextTitle>
                    <List>
                        <li><ItemList href={"tel:+380985697167"}>
                            <TextLink size={"1em"}><FaPhone style={{float: "left", padding: "9px"}}/> TEL:
                                +380985697167</TextLink>
                        </ItemList></li>
                        <li><ItemList href={"mailto:volodymyr.kochubenko@gmail.com?subject=Job+proposal"}>
                            <TextLink size={"1em"}><IoIosMail style={{float: "left", padding: "9px"}}/> EMAIL:
                                volodymyr.kochubenko@gmail.com</TextLink>
                        </ItemList></li>
                        <li><ItemList href={"skype:live:volodymyr.kochubenko"}>
                            <TextLink size={"1em"}><FaSkype style={{float: "left", padding: "9px"}}/> SKYPE:
                                R36OMOD</TextLink></ItemList></li>
                        <li><ItemList href={"https://telegram.im/R36OMOD"}>
                            <TextLink size={"1em"}><FaTelegram style={{float: "left", padding: "9px"}}/> TELEGRAM:
                                R36OMOD</TextLink></ItemList>
                        </li>
                    </List>
                </BlockWrapper>
            </BlockInformationWrapper>

        </BlockContentWrapper>
    )
});