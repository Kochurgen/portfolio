import React from "react";
import {BlockSideBarWrapper} from "../../components/Blocks"
import NavigationsButtonBlock from "./NavigationsButtonBlock";
import styled from "styled-components";
import Sidebar from "react-sidebar";
import TitleBar from "../../components/TitleBar";
import {FiMenu} from "react-icons/fi";
import {Button} from "../../components/Buttons";
import {TextContent} from "../../components/Texts";


const BlockWrapperSideBar = styled(BlockSideBarWrapper)`
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../../source/images/huas1.jpeg");
`;

const SideBarButton = styled.a`
    height: 60px;
    color: white;
    background-color: rgba(0,0,0,0);
    margin: 0;
    float: left;
        &:active{
            background-color: rgba(0,0,0,0.5);
        }
`;

const TitleText = styled(TextContent)`
    display: block;
    height: 62px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 62px;
    float: left;
`;

export default class SideBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

    }

    componentDidMount() {
        let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        document.getElementById('button').addEventListener(touchEvent, this.toggleSideBar.bind(this));
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    toggleSideBar(){
        this.onSetSidebarOpen(this.state.sidebarOpen ? false: true)
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
                                position: "fixed",
                            }
                    }
                }
            >
                <TitleBar left={this.state.sidebarOpen ? "256px" : 0}>
                    <SideBarButton
                        id={"button"}
                        onClick={()=>this.toggleSideBar.bind(this)}
                    >
                        <FiMenu size={"50px"}/>
                    </SideBarButton>
                    <TitleText size={"1.5rem"} color={"white"}>Volodymyr Kochubenko</TitleText>
                </TitleBar>
            </Sidebar>
        )
    }
}

