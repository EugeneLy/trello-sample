import React, {Component} from "react";
import { connect } from 'react-redux';

import { endWatchInfo } from '../../actions/task.js';
import './Modals.scss';

class Info extends Component {

    handleCloseInfo() {
        this.props.endWatchInfo();
    }

    handleInfo() {
        if(this.props.watchinfo) {
            return (
                <div className='modal fade' role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.info.title}</h5>
                                <button type="button"
                                        className="close"
                                        onClick={this.handleCloseInfo.bind(this)}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="text-muted">
                                    {this.props.info.description}
                                </p>
                                <div className="text-info date text-right">{this.props.info.dueDate}</div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }


    render() {
        return (
            this.handleInfo()


        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
      info: state.task.info,
      watchinfo: state.task.watchinfo
    };
}

export default connect(mapStateToProps, { endWatchInfo })(Info);