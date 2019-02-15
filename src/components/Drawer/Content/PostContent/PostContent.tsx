import React, {Component} from 'react';
import './PostContent.scss';

export default class PostContent extends Component {

    public render(): React.ReactNode {
        return (
            <>
                <div className="s-post">
                    <div
                        className="s-post-head"
                        style={{backgroundImage: "url(https://i.ytimg.com/vi/s3tWFEcG3qw/maxresdefault.jpg)"}}
                    >
                    </div>
                    <div className="s-post-content">
                        <h1>Un titulo JAJAJAJAJAJAJAJA</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, qui ut! A adipisci deleniti, dolores earum error ipsam ipsum laudantium maiores non obcaecati, porro provident quaerat ratione reiciendis repudiandae tenetur.
                    </div>
                </div>
            </>
        );
    }

}