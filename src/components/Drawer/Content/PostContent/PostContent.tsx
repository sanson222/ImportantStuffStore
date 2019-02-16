import React, {Component} from 'react';
import './PostContent.scss';

// Utils
import AlertYesNo from "../../../Utils/AlertConfirm/AlertYesNo";
import ModalForm from "../../ModalForm/ModalForm";
import VirtualDataProvider, {EntityData} from "../../../../dataProvider/virtualDataProvider";

export default class PostContent extends Component <any, any> {

    public constructor(props: any) {
        super(props);

        let id = this.props.match.params.id;
        let postDataClass: EntityData = VirtualDataProvider.getData(id);
        if (!postDataClass) {
            postDataClass = new EntityData();
        }
        let postData = postDataClass.toPlainObject();

        this.state = {
            postData,
        };

        this.callbackForYes = this.callbackForYes.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    public componentDidMount(): void {
        if (this.state.postData._id < 0) {
            this.props.history.replace("/");
        }
    }

    public callbackForYes() {
        VirtualDataProvider.deleteData(this.props.match.params.id);
        this.props.history.replace("/");
    }

    public updatePost(dataToSubmit: EntityData, emptyForm: Function, updateForm: Function) {

        VirtualDataProvider.setData(dataToSubmit);

        let postDataClass: EntityData = VirtualDataProvider.getData(this.props.match.params.id);
        updateForm(postDataClass);
        let postData = postDataClass.toPlainObject();
        this.setState({
            postData,
        });
        console.log(postData);

    }

    public render(): React.ReactNode {
        return (
            <>
                <div className="s-post">
                    <div
                        className="s-post-head"
                        style={{backgroundImage: "url("+this.state.postData.demoImage+")"}}
                    />
                    <div className="s-post-content">
                        <h1>{this.state.postData.title}</h1>
                        {this.state.postData.content}
                        <div>
                            <button
                                className={"btn btn-secondary"}
                                onClick={() => { this.props.history.goBack()}}
                            >Go Back</button>
                            <ModalForm
                                classList={"btn btn-secondary"}
                                buttonText={"Edit"}
                                _id={"EditButton"}
                                initialData={this.state.postData}
                                handleSubmit={this.updatePost}
                            />
                            <AlertYesNo
                                classList="btn btn-danger"
                                buttonText="Delete"
                                _id={"deleteButton"}
                                question="Esta Seguro que desea borrar este post?"
                                callbackForYes={this.callbackForYes}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }

}