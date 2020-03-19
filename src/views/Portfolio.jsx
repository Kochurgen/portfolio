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
import SweetTV from "../source/images/sweettw.png"

const ItemList = styled(List)`
`;

class Portfolio extends React.PureComponent {
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
                    <ItemList>
                        <PortfolioListItem
                            image={Hoeltzle}
                            appName={"Hoeltzle"}
                            appLink={"https://www.hoelzle.ch/"}
                            description={"Angular 1.56, cordova.js, sqlite"}
                            iosLink={"https://apps.apple.com/ch/app/hoelzle/id953773606"}
                            androidLink={"https://play.google.com/store/apps/details?id=hoelzle.app&hl=de"}/>
                        <PortfolioListItem
                            image={Moodcow}
                            appName={"Moodcow"}
                            appLink={"http://moodcow.com"}
                            description={"RAD.js, cordova.js, three.js"}
                            iosLink={"https://apps.apple.com/us/app/mood-cow-dashboard/id1114826569?ls=1"}
                            androidLink={"https://play.google.com/store/apps/details?id=com.moodcow.dashboard&hl=en"}/>
                        <PortfolioListItem
                            image={Pitapat}
                            appName={"Pitapat"}
                            appLink={"http://pitapat.co"}
                            description={"native android"}
                            androidLink={"https://play.google.com/store/apps/details?id=co.pitapat.pitapat"}/>
                        <PortfolioListItem
                            image={LiveLove}
                            appName={"LiveLove"}
                            appLink={"https://golive.love/"}
                            description={"React Native"}
                            iosLink={"https://apps.apple.com/gb/app/live-love/id1447334280?l=ru"}
                            androidLink={"https://play.google.com/store/apps/details?id=com.jdev.livelove&hl=uk"}/>
                        <PortfolioListItem
                            image={SweetTV}
                            appName={"SweetTv"}
                            appLink={"https://sweet.tv/"}
                            description={"React, styled components, react-navTree, Tizen/WebOs"}/>
                    </ItemList>
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