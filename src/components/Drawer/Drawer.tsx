import React, {Component} from 'react';
import './Drawer.scss';
import logo from './logo.svg';
import Content from "./Content/Content";
import ModalForm from "./ModalForm/ModalForm";
import VirtualDataProvider, {EntityData} from "../../dataProvider/virtualDataProvider";

export default class Drawer extends Component <any, any> {
    public constructor(props: any) {
        super(props);

        this.state = {
            drawer: false,
            allData: VirtualDataProvider.getAll(),
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideDrawer = this.hideDrawer.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className="s-page">
                    <div className="s-nav">

                        <img
                            className="s-logo"
                            src={logo}
                            alt="company logo"
                            onClick={this.toggleDrawer}/>
                    </div>
                    {/* TODO: deshabilitar scroll cuando se abre el drawer */}
                    <Content allData={this.state.allData}/>
                </div>
                <div className={"s-drawer " + (this.state.drawer ? "" : "s-drawer-hidden")}>

                    <div className="s-content-title">
                        Articulos interesantes
                    </div>
                    <ModalForm
                        handleSubmit={this.handleSubmit}
                        _id={"modalForm"}
                        onClick={this.showModal}
                        buttonText={"Add"}
                    />
                    <div className="s-content">

                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="text to find"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Red</option>
                                <option value="">Blue</option>
                            </select>
                        </div>
                        <div className="form-group">

                        </div>

                    </div>
                </div>
            </>
        );
    }

    private toggleDrawer() {
        this.setState({
            drawer: !this.state.drawer,
        });
    }

    private hideDrawer() {
        this.setState({
            drawer: false,
        });
    }

    // Modal Methods
    public handleSubmit(dataToSubmit: EntityData, emptyForm: Function) {
        VirtualDataProvider.setData(dataToSubmit);
        let allData = VirtualDataProvider.getAll()
        this.setState({
            allData,
        });
        emptyForm();
    }

    public showModal() {
        this.hideDrawer();
    }
}