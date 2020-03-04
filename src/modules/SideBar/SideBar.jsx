import React from "react";
import {BlockSideBarWrapper} from "../../components/Blocks"
import NavigationsButtonBlock from "./NavigationsButtonBlock";
import styled from "styled-components";
import Sidebar from "react-sidebar";
import TitleBar from "../../components/TitleBar";
import {FiMenu} from "react-icons/fi";
import {Button} from "../../components/Buttons";


const BlockWrapperSideBar = styled(BlockSideBarWrapper)`
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../../source/images/huas1.jpeg");
`;

const SideBarButton = styled(Button)`
    height: 60px;
    color: white;
    background-color: rgba(0,0,0,0);
    margin: 0;
`;

export default class SideBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    render() {
        return (
            <Sidebar
                sidebar={
                    <BlockWrapperSideBar>
                        <NavigationsButtonBlock/>
                    </BlockWrapperSideBar>
                }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={
                    {
                        sidebar:
                            {
                                width: "256px",
                                background: "rgba(145,13,13,.8)",
                                zIndex: "999999999",
                                position: "fixed"
                            }
                    }
                }
            >
                <TitleBar left={this.state.sidebarOpen? "256px" : 0}>
                    <SideBarButton
                        onClick={() => this.onSetSidebarOpen(true)}>
                        <FiMenu size={"50px"}/>
                    </SideBarButton>
                </TitleBar>
            </Sidebar>
        )
    }
}

