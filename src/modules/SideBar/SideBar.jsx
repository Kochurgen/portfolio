import React from "react";
import {BlockSideBarWrapper, BlockWrapper} from "../../components/Blocks"
import NavigationsButtonBlock from "./NavigationsButtonBlock";
import styled from "styled-components";
import Sidebar from "react-sidebar";
import TitleBar from "../../components/TitleBar";

const BlockWrapperSideBar = styled(BlockSideBarWrapper)`
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../../source/images/huas1.jpeg");
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
                                width: "400px",
                                background: "rgba(145,13,13,.8)",
                                zIndex: "999999999",
                                position: "fixed"
                            }
                    }
                }
            >
                <TitleBar>
                    <button onClick={() => this.onSetSidebarOpen(true)}>
                        Open sidebar
                    </button>
                </TitleBar>
            </Sidebar>
        )
    }

    // <BlockWrapperSideBar>
    //     <BlockSideBarWrapper>
    //         <BlockWrapper width={'initial'}>
    //             <Button>
    //                 <ImageCircle
    //                     width={'200px'}
    //                     height={'200px'}
    //                     image={logo}
    //                     style={{margin: `0 auto`}}/>
    //                 <TextTitle color={'white'} size={'29px'}>
    //                     Volodymyr Kochubenko
    //                 </TextTitle>
    //                 <Flag code="ua" height="22px"/><TextContent color={"white"}
    //                                                             size={"22px"}> Ukraine </TextContent>
    //                 <TextTitle color={'white'} size={'29px'}>
    //                     frontend Developer
    //                 </TextTitle>
    //             </Button>
    //             <NavigationsButtonBlock/>
    //         </BlockWrapper>
    //     </BlockSideBarWrapper>
    // </BlockWrapperSideBar>
}

