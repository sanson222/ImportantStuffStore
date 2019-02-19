import React, {Component} from 'react';
import './Content.scss';
import CardList from "./CardList/CardList";
import PostContent from "./PostContent/PostContent";
import {Route, Switch} from "react-router";

export default class Content extends Component<any, any> {

    public render(): React.ReactNode {
        return (
            <div className={"s-container-page " + (this.props.drawer ? "" : "s-container-page-all")}>
                <Switch>
                    <Route path={"/"} exact render={(props) => <CardList {...props} allData={this.props.allData}/>} />
                    <Route path={"/post/:id"} render={(props) => <PostContent {...props}/>}/>
                </Switch>
            </div>
        );
    }
}