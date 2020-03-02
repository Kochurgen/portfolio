import styled from "styled-components";

export default styled.div`
    width:${(props)=>props.width? props.width: '100%'};
    height:${(props)=>props.height? props.height: '100%'};
    display: block;
    background-image: url(${(props)=>props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`