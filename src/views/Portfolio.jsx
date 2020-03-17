import React from "react"
import styled from "styled-components"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks";
import List from "../components/List"
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";

const ItemList = styled.a`
    text-decoration: none;
    color: cadetblue;
`;

const Item = styled.li`
    padding: 0 10px;
`;

class Portfolio extends React.PureComponent{
    constructor(props) {
        super(props);
        this.props.selectPage(3)
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
                    <List>

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
)(Portfolio);