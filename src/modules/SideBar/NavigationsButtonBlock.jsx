import React, { useState } from "react"
import {Button} from "../../components/Buttons";
import {Block} from "../../components/Blocks";
import {TextContent} from "../../components/Texts";
import NavigationButtonItem from "./NavigationButtonItem";
import {Link} from "react-router-dom"



export default React.memo(()=>{
    return(
        <Block color={"rgba(145,13,13,.8)"}>
            <ul style={{'listStyle':'none', margin: 0, paddingTop: '60px', paddingLeft: 0}}>
                <NavigationButtonItem id={0} text={'Home'}/>
                <NavigationButtonItem id={1} text={'Portfolio'}/>
                <NavigationButtonItem id={2} text={'My skills'}/>
                <NavigationButtonItem id={3} text={'Contact Me'}/>
                <NavigationButtonItem id={4} text={'MY CV'}/>
            </ul>
            <ul>
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/portfolio"}>Portfolio</a></li>
                <li><a href={"/skills"}>Scills</a></li>
                <li><a href={"/contacts"}>Contacts</a></li>
            </ul>
        </Block>
    )
})