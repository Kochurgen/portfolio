import React from "react"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks";
import CVItem from "../modules/СVItem";
import styled from "styled-components";
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";
import history from "../history";

const BlockWrapper = styled.div`
    max-width: 670px;
    display: block;
    margin: 0 auto;
`;

class CV extends React.PureComponent {
    constructor(props) {
        super(props);
        this.props.selectPage(4);
    }

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

const mapStateToProps = state => {
    return ({})
};

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return ({
        selectPage: pageId => dispatch(selectPage(pageId))
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CV);