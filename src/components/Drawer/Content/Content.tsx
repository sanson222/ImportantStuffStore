import React, {Component} from 'react';
import './Content.scss';
import CardList from "./CardList/CardList";
import PostContent from "./PostContent/PostContent";

export default class Content extends Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.state = {
            isCardList: false,
        }
    }

    public render(): React.ReactNode {
        return (
            <div className="s-container-page">
                {this.state.isCardList ?(
                    <CardList allData={this.props.allData}/>
                ) : (
                    <PostContent/>
                )}

            </div>
        );
    }
}