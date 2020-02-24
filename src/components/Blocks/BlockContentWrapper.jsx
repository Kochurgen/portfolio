import Block from "./Block"
import styled from "styled-components"

export default styled(Block)`
    display: block;
    position: absolute;
    width: 73%;
    right: 0;
    
    @media (max-width: 1500px){
        left: 0;
        width: 100%;
    }
`