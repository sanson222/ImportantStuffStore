import React, {Component} from 'react';
import './Card.scss';

export default class Card extends Component <any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            img: Math.floor((Math.random() * 400) + 100),
        }

    }

    public render(): React.ReactNode {
        return (
            <>
                <div
                    className="s-card"
                >
                    <div
                        className="s-thumbail"
                        style={{backgroundImage: "url(" + this.props.data.imageUrl + ")"}}
                    />
                    <div className="s-content-card">
                        {this.props.data.desc}
                    </div>
                </div>
            </>
        );
    }
}