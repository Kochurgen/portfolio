import {Button} from "../../components/Buttons";
import {TextContent} from "../../components/Texts";
import React, {useState} from "react";
import styled from "styled-components";
import {selectPage} from "../../services/Store/actions"
import {connect} from "react-redux";

const NavigationItem = styled.li`
    position: relative;
    margin-bottom: 20px;
    padding-left: 43px;
    & button{
        margin: 0;
    }
`;

const SelectPoint = styled.i`
        content: " ";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-top: 9px solid transparent;
        border-bottom: 9px solid transparent;
        border-right: 20px solid #fff;
        bottom: 6px;
        left: auto;
        right: 0;
`;

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return ({
        getSelectPage: state.Navigation.pageId
    })
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
)(React.memo(({
                  url,
                  selectPage,
                  getSelectPage,
                  id,
                  text,
              }) => {

    return (
        <NavigationItem onClick={(event) => {
            selectPage(id)
        }}>
            <Button>
                <TextContent color={'white'} size={'34px'}>
                    {text}
                </TextContent>
            </Button>
            {getSelectPage === id ? <SelectPoint/> : ""}
        </NavigationItem>
    )
}))