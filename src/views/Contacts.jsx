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
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";

const ItemList = styled.a`
    text-decoration: none;
    color: cadetblue;
`;

const Item = styled.li`
    padding: 0 10px;
`;

class Contacts extends React.PureComponent{
    constructor(props) {
        super(props);
        this.props.selectPage(4)
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
                    <ImageCircle
                        width={'16rem'}
                        height={'16rem'}
                        image={logo}
                        style={{margin: `0 auto`}}/>
                    <TextTitle size={'29px'} color={"white"}>
                        Volodymyr Kochubenko
                    </TextTitle>
                    <List>
                        <Item><ItemList href={"tel:+380985697167"}>
                            <TextLink size={"1.3rem"}><FaPhone style={{float: "left", padding: "1px 10px"}}/> TEL:
                                +380985697167</TextLink>
                        </ItemList></Item>
                        <Item><ItemList href={"mailto:volodymyr.kochubenko@gmail.com?subject=Job+proposal"}>
                            <TextLink size={"1.3rem"}><IoIosMail style={{float: "left", padding: "1px 10px"}}/> EMAIL:
                                volodymyr.kochubenko@gmail.com</TextLink>
                        </ItemList></Item>
                        <Item><ItemList href={"skype:live:volodymyr.kochubenko"}>
                            <TextLink size={"1.3rem"}><FaSkype style={{float: "left", padding: "1px 10px"}}/> SKYPE:
                                volodymyr.kochubenko</TextLink></ItemList></Item>
                        <Item><ItemList href={"https://telegram.im/volodymyrkochubenko"}>
                            <TextLink size={"1.3rem"}><FaTelegram style={{float: "left", padding: "1px 10px"}}/> TELEGRAM:
                                volodymyrkochubenko</TextLink></ItemList>
                        </Item>
                    </List>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        )
    }
};

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
)(Contacts);