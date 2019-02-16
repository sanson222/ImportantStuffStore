import React, {Component} from 'react';
import {Link} from "react-router-dom";
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
                <Link
                    to={"/post/"+this.props.data._id}
                    className="s-card"
                >
                    <div
                        className="s-thumbail"
                        style={{backgroundImage: "url(" + this.props.data.imageUrl + ")"}}
                    />
                    <div className="s-content-card">
                        {this.props.data.desc}
                    </div>
                </Link>
            </>
        );
    }
}