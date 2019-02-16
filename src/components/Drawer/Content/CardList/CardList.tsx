import React, {Component} from 'react';
import Card from "./Card/Card";
import './CardList.scss';
import {EntityData} from "../../../../dataProvider/virtualDataProvider";

export default class CardList extends Component<any, any> {

    public render(): React.ReactNode {
        return (
            <>
                <div className="s-flex-body">
                    {this.props.allData.map((d: EntityData) => {
                        return (<Card key={d._id} data={d} history={this.props.history}/>);
                    })}
                </div>
            </>
        );
    }
}