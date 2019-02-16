import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap';
import VirtualDataProvider, {EntityData} from "../../../dataProvider/virtualDataProvider";

export default class ModalForm extends Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.state = (this.props.initialData) ?
            this.props.initialData
            :
            new EntityData().toPlainObject();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.fillFormWithData = this.fillFormWithData.bind(this);
        this.emptyForm = this.emptyForm.bind(this);
        this.updateDataForm = this.updateDataForm.bind(this);
    }

    public componentDidMount(): void {
        $('#' + this.props._id).appendTo("body");
    }

    public componentWillUnmount(): void {
        $('#' + this.props._id).remove();
    }

    public render(): React.ReactNode {
        return (
            <>
                <button
                    className={this.props.classList || "btn btn-primary"}
                    onClick={this.showForm}
                >
                    {this.props.buttonText}
                </button>

                <div className="modal" id={this.props._id} tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Subir Informacion</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            name="url"
                                            type="text"
                                            placeholder="URL"
                                            onChange={this.handleChange}
                                            value={this.state.url}
                                        />
                                        <input
                                            className="form-control"
                                            name="imageUrl"
                                            type="text"
                                            placeholder="Image url"
                                            value={this.state.imageUrl}
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            className="form-control"
                                            name="desc"
                                            type="text"
                                            placeholder="Small description"
                                            maxLength={44}
                                            value={this.state.desc}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="title"
                                            className="form-control"
                                            type="text"
                                            placeholder="title"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        />
                                        <textarea
                                            style={{width: "100%"}}
                                            name="content"
                                            value={this.state.content}
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            className="form-control"
                                            name="demoImage"
                                            type="text"
                                            placeholder="post image URL"
                                            value={this.state.demoImage}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    onClick={this.fillFormWithData}
                                    className={"btn btn-primary"}
                                >Fill</button>
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

    private showForm() {
        $('#' + this.props._id).modal('show');
        {
            this.props.onClick ? this.props.onClick() : null
        }
    }

    private hideForm() {
        $('#' + this.props._id).modal('hide');
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    private handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        let dataToSubmit = new EntityData(this.state);
        this.hideForm();
        {
            this.props.handleSubmit ?
                this.props.handleSubmit(dataToSubmit, this.emptyForm, this.updateDataForm)
                : false
        }
    }

    private emptyForm() {
        this.setState(new EntityData().toPlainObject());
    }

    private updateDataForm(data: EntityData) {
        this.setState(data.toPlainObject());
    }

    private fillFormWithData() {
        let data = VirtualDataProvider.generateSampleData();
        this.setState(data.toPlainObject());

    }
}
