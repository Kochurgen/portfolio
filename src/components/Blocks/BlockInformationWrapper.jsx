import {Button} from "../Buttons";
import styled from "styled-components";

export default styled(Button)`
    margin: 30px auto;
    max-width: 600px;
    min-width: 500px;
    padding: 5% 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 0 40px;
    background-color: rgba(60, 67, 68, 0.2);
        @media(min-width: 0px){
            flex-basis: 100%;
            flex-grow: 0;
            max-width: 90%;
            min-width: 90%;
            margin: 0 auto;
        }
        @media(min-width: 600px){
            flex-basis: 66.6666667%;
            flex-grow: 0;
            width: 66.6666667%;
            min-width: 66.6666667%;
        }
        @media(min-width: 960px){
            flex-basis: 50%;
            flex-grow: 0;
            width: 50%;
            min-width: 50%;
        }    
`;
