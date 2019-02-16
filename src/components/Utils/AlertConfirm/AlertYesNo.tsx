import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap';

export default class AlertYesNo extends Component <any, any> {

    public constructor(props: any) {
        super(props);

        this.callbackProp = this.callbackProp.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <>
                <button
                    className={this.props.classList}
                    onClick={this.toggleModal}
                >
                    {this.props.buttonText}
                </button>
                <div id={this.props._id} className="modal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Borrar Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{this.props.question}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    name="Yes"
                                    onClick={this.callbackProp}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    name="No"
                                    className="btn btn-secondary"
                                    onClick={this.callbackProp}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    private callbackProp(e: React.MouseEvent<HTMLElement>) {
        let {name} = e.target as HTMLButtonElement;
        name === 'Yes' ?
            (this.props.callbackForYes ? this.props.callbackForYes(): null)
            :
            (this.props.callbackForNo ? this.props.callbackForNo(): null);

        this.toggleModal();
    }

    private toggleModal() {
        $('#'+this.props._id).modal('toggle');
    }

}