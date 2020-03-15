import React from 'react';
import './App.css';
import SideBar from "./modules/SideBar";
import {selectPage} from "./services/Store/actions";
import {connect} from "react-redux";
import {Home, Portfolio, Contacts, Skills, CV} from "./views"
import {Switch, Route} from "react-router-dom"
import history from "./history";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                {/*<Main/>*/}
                <SideBar/>
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
                    <Route path={"/cv"}>
                        <CV/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        getSelectPage: state.Navigation.pageId
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        selectPage: pageId => dispatch(selectPage(pageId))
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
