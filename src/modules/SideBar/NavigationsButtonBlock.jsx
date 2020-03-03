import React, { useState } from "react"
import {Button} from "../../components/Buttons";
import {Block} from "../../components/Blocks";
import {TextContent} from "../../components/Texts";
import NavigationButtonItem from "./NavigationButtonItem";



export default React.memo(()=>{
    return(
        <Block color={"rgba(145,13,13,.8)"}>
            <ul style={{'listStyle':'none', margin: 0, paddingTop: '60px'}}>
                <NavigationButtonItem url={"/"} id={0} text={'Home'}/>
                <NavigationButtonItem url={"/portfolio"} id={1} text={'Portfolio'}/>
                <NavigationButtonItem url={"/skills"} id={2} text={'My skills'}/>
                <NavigationButtonItem url={"/contacts"} id={3} text={'Contact Me'}/>
                <NavigationButtonItem url={"/cv"} id={4} text={'MY CV'}/>
            </ul>
        </Block>
    )
})