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
                        <CVItem link={"https://s3.eu-west-2.amazonaws.com/volodymyrkochubenko.site/Volodymyr+Kochubenko.pdf"} text={"Download .pdf"}></CVItem>
                        <CVItem link={"https://s3.eu-west-2.amazonaws.com/volodymyrkochubenko.site/Volodymyr+Kochubenko.odt"} text={"Download .odt"}></CVItem>
                        <CVItem link={"https://s3.eu-west-2.amazonaws.com/volodymyrkochubenko.site/Volodymyr+Kochubenko.docx"} text={"Download .docx"}></CVItem>
                    </BlockWrapper>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        );
    }
}