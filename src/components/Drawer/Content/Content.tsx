import React, {Component} from 'react';
import Card from "./Card/Card";
import './Content.scss';
import VirtualDataProvider, {EntityData} from "../../../dataProvider/virtualDataProvider";

export default class Content extends Component<any, any> {

    constructor(props: any) {
        super(props);

        let allData = VirtualDataProvider.getAll();

        this.state = {
            data: allData,
        }
    }

    public render(): React.ReactNode {
        return (
            <div className="s-container-page">
                <div className="s-flex-body">
                    {this.props.allData.map((d: EntityData) => {
                        return (<Card key={d._id} />);
                    })}
                </div>
            </div>
        );
    }
}