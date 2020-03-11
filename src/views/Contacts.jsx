import React from "react"
import styled from "styled-components"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks";
import List from "../components/List"
import {FaPhone, FaSkype, FaTelegram} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {BlockWrapper} from "../components/Blocks";
import {ImageCircle} from "../components/Images";
import logo from "../source/images/photo.png";
import {TextTitle, TextLink} from "../components/Texts";

const ItemList = styled.a`
    text-decoration: none;
    color: cadetblue;
`;

const Item = styled.li`
    padding: 0 10px;
`;

export default class Contacts extends React.PureComponent{
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
                    <ImageCircle
                        width={'20rem'}
                        height={'20rem'}
                        image={logo}
                        style={{margin: `0 auto`}}/>
                    <TextTitle size={'29px'} color={"white"}>
                        Volodymyr Kochubenko
                    </TextTitle>
                    <List>
                        <Item><ItemList href={"tel:+380985697167"}>
                            <TextLink size={"1.5rem"}><FaPhone style={{float: "left", padding: "0 10px"}}/> TEL:
                                +380985697167</TextLink>
                        </ItemList></Item>
                        <Item><ItemList href={"mailto:volodymyr.kochubenko@gmail.com?subject=Job+proposal"}>
                            <TextLink size={"1.5rem"}><IoIosMail style={{float: "left", padding: "0 10px"}}/> EMAIL:
                                volodymyr.kochubenko@gmail.com</TextLink>
                        </ItemList></Item>
                        <Item><ItemList href={"skype:live:volodymyr.kochubenko"}>
                            <TextLink size={"1.5rem"}><FaSkype style={{float: "left", padding: "0 10px"}}/> SKYPE:
                                R36OMOD</TextLink></ItemList></Item>
                        <Item><ItemList href={"https://telegram.im/R36OMOD"}>
                            <TextLink size={"1.5rem"}><FaTelegram style={{float: "left", padding: "0 10px"}}/> TELEGRAM:
                                R36OMOD</TextLink></ItemList>
                        </Item>
                    </List>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        )
    }
};