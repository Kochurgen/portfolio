import React from "react";
import styled from "styled-components";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {connect} from "react-redux"
import {openSideBar} from "../../services/Store/actions";

const TitleWrapper = styled(AppBar)`
    background-color: rgba(145,13,13, 1)!important;
`;

const mapStateToProps = state => {
    return ({
        openSideBar: state.statuse
    })
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return ({
        openSideBar: sideBarStatus => dispatch(openSideBar(sideBarStatus))
    })
};

class TitleBar extends React.PureComponent{
    render(){
        return(
            <TitleWrapper position="fixed">
                <Toolbar variant="regular">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={this.props.openSideBar(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Volodymyr Kochubenko
                    </Typography>
                </Toolbar>
            </TitleWrapper>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleBar);