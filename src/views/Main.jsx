import React from "react";
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";
import SideBar from "../modules/SideBar";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import Sidebar from "react-sidebar";


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
            <Contacts/>
        </>
    );
}))