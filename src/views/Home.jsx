import React from "react"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks"
import {ImageCircle} from "../components/Images";
import logo from "../source/images/photo.png";
import {TextContent, TextTitle} from "../components/Texts";
import Flag from "react-world-flags";
import TechnologyBoard from "../modules/TechnologyBoard";
import styled from "styled-components";
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";
import history from "../history";



class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.props.selectPage(0);
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
)(Home)