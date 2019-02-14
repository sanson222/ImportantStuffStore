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
                <div className="s-card" >
                    <img src={"https://via.placeholder.com/" + this.state.img} alt="imagen"/>
                    <div className="s-content-card">
                        Pocas palabras para un titulo muy largo :'v
                    </div>
                </div>
            </>
        );
    }
}