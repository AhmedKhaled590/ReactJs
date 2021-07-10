import React, { Component } from "react"
import ReactDOM from "react-dom";
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addBtn: false,
            removeBtn: false,
        }
    }

    render() {
        return (ReactDOM.createPortal(
            <>
                <div className="modal fade" id="Modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Alert</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.addBtn ? "Added Successfully" : "Removed Successfuly"}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className={`btn btn-${this.state.addBtn ? "success" : "danger"}`} data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>, document.getElementById("modal-root")));
    }
}

export default Modal;