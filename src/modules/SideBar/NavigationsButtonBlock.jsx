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
                <NavigationButtonItem id={0} text={'Home'} url={"/"}/>
                <NavigationButtonItem id={1} text={'Workplaces'} url={"/workplaces"}/>
                <NavigationButtonItem id={2} text={'My skills'} url={"/skills"}/>
                <NavigationButtonItem id={3} text={'Portfolio'} url={"/portfolio"}/>
                <NavigationButtonItem id={4} text={'Contact Me'} url={"/contacts"}/>
                <NavigationButtonItem id={5} text={'My CV'} url={"/cv"}/>
            </ul>
        </Block>
    )
})