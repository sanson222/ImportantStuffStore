import React, {Component} from 'react';
import './Drawer.scss';
import logo from './logo.svg';
import Content from "./Content/Content";
import ModalForm from "./ModalForm/ModalForm";
import VirtualDataProvider from "../../dataProvider/virtualDataProvider";

export default class Drawer extends Component <any, any> {
    public constructor(props: any) {
        super(props);

        this.state = {
            drawer: false,
            modalForm: false,
            allData: VirtualDataProvider.getAll(),
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.showForm = this.showForm.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className="s-page">
                    <div className="s-nav">
                        <input
                            className="s-logo"
                            type="image"
                            src={logo}
                            alt="company logo"
                            onClick={this.toggleDrawer}/>
                    </div>
                    <Content allData={this.state.allData}/>
                </div>
                <div className={"s-drawer z-depth-1 " + (this.state.drawer ? "" : "s-drawer-hidden")}>

                    <div className="s-content-title">
                        Articulos interesantes
                    </div>
                    <div className="s-content">
                        <form action="">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="text to find"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <select>
                                    <option>Red</option>
                                    <option value="">Blue</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.showForm}
                                >
                                    Add
                                </button>
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-secondary">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>


                <ModalForm
                    modalForm={this.state.modalForm}
                    toggleForm={this.toggleForm}
                    callUpdate={this.updateData}
                />
            </>
        );
    }


    public toggleForm(e: React.MouseEvent) {
        this.setState({
            modalForm: !this.state.modalForm,
        })
    }

    public updateData() {
        this.setState({
            allData: VirtualDataProvider.getAll(),
        })
    }

    private showForm() {
        this.setState({
            modalForm: true,
            drawer: false,
        })
    }

    private toggleDrawer(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            drawer: !this.state.drawer,
        });
    }


}