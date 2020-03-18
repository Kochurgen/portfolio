import React from "react"
import styled from "styled-components"
import {BlockContentWrapper, BlockInformationWrapper} from "../components/Blocks";
import List from "../components/List"
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";
import PortfolioListItem from "../components/List/PortfolioListItem/PortfolioListItem";
import Hoeltzle from "../source/images/hoeltzle.png"
import LiveLove from "../source/images/livelove.png"
import Pitapat from "../source/images/pitapat.png"
import Moodcow from "../source/images/moodcow.png"

const ItemList = styled.a`
    text-decoration: none;
    color: cadetblue;
`;

const Item = styled.li`
    padding: 0 10px;
`;

class Portfolio extends React.PureComponent{
    constructor(props) {
        super(props);
        this.props.selectPage(3)
    }
    componentWillUnmount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    render() {
        return (
            <BlockContentWrapper>
                <BlockInformationWrapper>
                    <List>
                        <PortfolioListItem image={Hoeltzle} appName={"Hoeltzle"} iosLink={"https://apps.apple.com/ch/app/hoelzle/id953773606"} androidLink={"https://play.google.com/store/apps/details?id=hoelzle.app&hl=de"}/>
                        <PortfolioListItem image={Moodcow} appName={"Moodcow"} iosLink={"https://apps.apple.com/us/app/mood-cow-dashboard/id1114826569?ls=1"} androidLink={"https://play.google.com/store/apps/details?id=com.moodcow.dashboard&hl=en"}/>
                        <PortfolioListItem image={Pitapat} appName={"Pitapat"} androidLink={"https://play.google.com/store/apps/details?id=co.pitapat.pitapat"}/>
                        <PortfolioListItem image={LiveLove} appName={"LiveLove"} iosLink={"https://apps.apple.com/gb/app/live-love/id1447334280?l=ru"} androidLink={"https://play.google.com/store/apps/details?id=com.jdev.livelove&hl=uk"}/>
                    </List>
                </BlockInformationWrapper>
            </BlockContentWrapper>
        )
    }
};

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
)(Portfolio);