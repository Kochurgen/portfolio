import React from 'react';
import './App.css';
import SideBar from "./modules/SideBar";
import {selectPage} from "./services/Store/actions";
import {connect} from "react-redux";
import {Home, Portfolio, Contacts, Skills, Main} from "./views"
import {Switch, Route} from "react-router-dom"



class App extends React.PureComponent {
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
