import React from 'react';
import './App.css';
import SideBar from "./modules/SideBar";
import Portfolio from "./views/Portfolio/Portfolio";
import Contacts from "./views/Contacts/Contacts";
import Skills from "./modules/Skills"
import {selectPage} from "./services/Store/actions";
import {connect} from "react-redux";
import {Home} from "./views"
import {Switch, Route} from "react-router-dom"



class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <SideBar/>
                {(() => {
                    switch (this.props.getSelectPage) {
                        case 0:
                            return <Home/>;
                        case 1:
                            return <Portfolio/>;
                        case 2:
                            return <Skills/>;
                        case 3:
                            return <Contacts/>;
                        case 4:
                            return <Contacts/>;
                        default:
                            return <Contacts/>;
                    }
                })()}
                <Switch>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    <Route path={"/portfolio"}>
                        <Portfolio/>
                    </Route>
                    <Route path={"/skills"}>
                        <Skills/>
                    </Route>
                    <Route path={"/contacts"}>
                        <Contacts/>
                    </Route>
                    <Route path={"/contacts"}>
                        <Contacts/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return ({
        getSelectPage: state.Navigation.pageId
    })
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
)(App);
