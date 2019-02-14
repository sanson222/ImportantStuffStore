import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap';
import virtualDataProvider, {EntityData} from "../../../dataProvider/virtualDataProvider";

export default class ModalForm extends Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidUpdate(prevProps: Readonly<any>): void {
        if (prevProps.modalForm !== this.props.modalForm) {
            $('#modalForm').modal('toggle');
        }
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className="modal fade" id="modalForm" tabIndex={-1} role="dialog"
                     aria-labelledby="modalFormLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalFormLabel">Subir Informacion</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="url" type="text"
                                            placeholder="URL"
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            className="form-control"
                                            name="imageUrl"
                                            type="text"
                                            placeholder="Image url"
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            className="form-control"
                                            name="desc"
                                            type="text"
                                            placeholder="Small description"
                                            maxLength={44}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="title"
                                            className="form-control"
                                            type="text"
                                            placeholder="title"
                                            onChange={this.handleChange}
                                        />
                                        <textarea
                                            style={{width: "100%"}}
                                            name="content"
                                            onChange={this.handleTextArea}
                                        />
                                        <input
                                            className="form-control"
                                            name="demoImage"
                                            type="text"
                                            placeholder="post image URL"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleSubmit}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    private handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    private handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        let dataToSubmit:  EntityData = {
            _id: 0,
            url: this.state.url,
            imageUrl: this.state.imageUrl,
            desc: this.state.desc,
            info: {
                title: this.state.title,
                content: this.state.content,
                demoImage: this.state.demoImage,
                dataset: [0,0,0],
            },
        };
        virtualDataProvider.setData(dataToSubmit);
        this.props.toggleForm();
        this.setState({});
        this.props.callUpdate();
    }
}
