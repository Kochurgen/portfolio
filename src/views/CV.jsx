import React from "react"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks";
import CVItem from "../modules/СVItem";
import styled from "styled-components";

const BlockWrapper = styled.div`
    max-width: 670px;
    display: block;
    margin: 0 auto;
`;

export default class CV extends React.PureComponent {
    render() {
        return (
            <BlockContentWrapper>
                <BlockInformationWrapper>
                    <BlockWrapper>
                        <CVItem link={""} text={"Download .pdf"}></CVItem>
                        <CVItem link={""} text={"Download .odt"}></CVItem>
                        <CVItem link={""} text={"Download .doc"}></CVItem>
                        <CVItem link={""} text={"Download .html"}></CVItem>
                    </BlockWrapper>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        );
    }
}