import React, { useState } from "react"
import {Button} from "../../components/Buttons";
import {Block} from "../../components/Blocks";
import {TextContent} from "../../components/Texts";
import NavigationButtonItem from "./NavigationButtonItem";



export default React.memo(()=>{
    return(
        <Block>
            <ul style={{'listStyle':'none'}}>
                <NavigationButtonItem id={0} text={'Portfolio'}/>
                <NavigationButtonItem id={1} text={'My skills'}/>
                <NavigationButtonItem id={2} text={'Contact Me'}/>
                <NavigationButtonItem id={3} text={'MY CV'}/>
            </ul>
        </Block>
    )
})