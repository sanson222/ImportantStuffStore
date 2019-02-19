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
            currentData: VirtualDataProvider.getAll(),
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.hideDrawer = this.hideDrawer.bind(this);
        this.showModal = this.showModal.bind(this);
        this.findByInput = this.findByInput.bind(this);
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
                    <Content allData={this.state.currentData} drawer={this.state.drawer}/>
                </div>
                <div className={"s-drawer " + (this.state.drawer ? "" : "s-drawer-hidden")}>

                    <div className="s-content-title">
                        Articulos interesantes
                    </div>

                    <div className="s-content">

                        <div className="form-group">
                            <ModalForm
                                handleSubmit={this.handleSubmit}
                                _id={"modalForm"}
                                onClick={this.showModal}
                                buttonText={"Add"}
                            />
                            <input
                                type="text"
                                placeholder="text to find"
                                className="form-control"
                                onChange={this.findByInput}
                            />
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

    private findByInput(e: React.ChangeEvent<HTMLInputElement>) {
        let input = e.target.value;
        let currentData = this.state.allData.filter((post: any) => {
            return (
                post.content.includes(input) ||
                post.desc.includes(input) ||
                post.title.includes(input)
            )
        });
        this.setState({
           currentData,
        });
    }
}