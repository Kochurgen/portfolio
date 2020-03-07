import React from "react";
import {openSideBar, selectPage} from "../services/Store/actions";
import {connect} from "react-redux";
import SideBar from "../modules/SideBar";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import { AppBar, Toolbar, IconButton, Typography, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import NavigationsButtonBlock from "../modules/SideBar/NavigationsButtonBlock";
import styled from "styled-components";
import {BlockSideBarWrapper} from "../components/Blocks";
import TitleBar from "../newModules/TitleBar/TitleBar";

const BlockWrapperSideBar = styled(BlockSideBarWrapper)`
    width:240px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../../source/images/huas1.jpeg");
`;

const mapStateToProps = state => {
    return ({
        sideBarStatus: state.sideBar.sideBarStatus
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        openSideBar: sideBarStatus => dispatch(openSideBar(sideBarStatus))
    })
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(({sideBarStatus, openSideBar}) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            // className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <BlockWrapperSideBar>
                <NavigationsButtonBlock/>
            </BlockWrapperSideBar>

        </div>
    );

    return (
        <>
            <TitleBar/>
            <Drawer open={sideBarStatus} onClose={()=>{openSideBar(false)}}>
                {sideList('left')}
            </Drawer>
        </>
    );
}))