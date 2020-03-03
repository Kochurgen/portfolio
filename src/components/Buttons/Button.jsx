import styled from "styled-components";

export default styled.a`
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    margin: 0 auto;
    display: block;
    &:focus {
        outline: rgba(0, 0, 0, 0) auto 0px;
    }
    &:active {
        border-style: 0;
    }
`;