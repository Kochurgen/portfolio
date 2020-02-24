import React from "react";
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";
import SideBar from "../modules/SideBar";
import Portfolio from "../modules/Portfolio";
import Contacts from "../modules/Contacts";

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
)(React.memo(({getSelectPage}) => {
    return (
        <>
            <SideBar/>
            <Contacts/>
        </>
    );
}))