import React from "react";
import {BlockContentWrapper} from "../components/Blocks"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {TextContent, TextTitle} from "../components/Texts";
import {selectPage} from "../services/Store/actions";
import {connect} from "react-redux";

class Portfolio extends React.PureComponent {
    constructor(props) {
        super(props);
        this.props.selectPage(1)
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
                <VerticalTimeline >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(232,236,243)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(232,236,243)'}}
                        dateClassName={'textStyle'}
                        date={<TextContent size={'1.2rem !important'}>2019 - 2020</TextContent>}
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#000000'}}
                        icon={''}
                    >
                        <TextTitle style={{textAlign: "left"}} size={'1.2rem !important'}>SweetTV</TextTitle>
                        <TextTitle size={'1.2rem !important'} className="vertical-timeline-element-subtitle">Mariupol office</TextTitle>
                        <p><TextContent size={'1rem !important'}>
                            Cross-platform developer. (Tizen and WebOS)
                        </TextContent></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(232,236,243)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(232,236,243)'}}
                        dateClassName={'textStyle'}
                        date={<TextContent size={'1.2rem !important'}>2018 - 2019</TextContent>}
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#000000'}}
                        icon={''}
                    >
                        <TextTitle style={{textAlign: "left"}} size={'1.2rem !important'}>JDev</TextTitle>
                        <TextTitle  size={'1.2rem !important'} className="vertical-timeline-element-subtitle">Mykolaiv office</TextTitle>
                        <p><TextContent size={'1rem !important'}>
                            Cross-platform developer.(Android and IOS) React Native projects, NativeScript.
                        </TextContent></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(232,236,243)', color: '#000000'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(232,236,243)'}}
                        dateClassName={'textStyle'}
                        date={<TextContent size={'1.2rem !important'}>2015 - 2018</TextContent>}
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#000000'}}
                        icon={''}
                    >
                        <TextTitle style={{textAlign: "left"}} size={'1.2rem !important'}>MobiDev</TextTitle>
                        <TextTitle size={'1.2rem !important'} className="vertical-timeline-element-subtitle">Chernivtsi office</TextTitle>
                        <p><TextContent size={'1rem !important'}>Cross-platform developer, Android developer.(Android and IOS) Cordova cross-platform projects, Android project</TextContent></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(232,236,243)', color: '#000000', fontSize:'38px !important'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(232,236,243)'}}
                        dateClassName={'textStyle'}
                        date={<TextContent size={'1.2rem !important'}>2014</TextContent>}
                        iconStyle={{background: 'rgb(33, 150, 243)', color: '#000000'}}
                        icon={''}
                    >
                        <TextTitle style={{textAlign: "left"}} size={'1.2rem !important'}>MobiDev</TextTitle>
                        <TextTitle size={'1.2rem !important'} className="vertical-timeline-element-subtitle">Mykolaiv office</TextTitle>
                        <p><TextContent size={'1rem !important'}>Cross-platform developer. (Android,IOS and Windows) Cordova cross-platform projects</TextContent></p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </BlockContentWrapper>
        )
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
)(Portfolio)