import React from 'react';
import Particles from 'react-particles-js';

const TaskModal = ({ title, show, setTaskCheck, task }) => {

    const changeShow = () => {
        if ( show ) return 'active';
        else return '';
    }

    const onCancel = () => {
        console.log(show);
        setTaskCheck(false);
    }

    return ( 
        <div className={`modal ${changeShow()}`} id="modal-id">
            <a onClick={onCancel} className="modal-overlay" id='modal-overlay' aria-label="Close">
            {
                show 
                ?
                <Particles
                    params={{
                        particles: {
                            color: {
                                value: "#32b643"
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#32b643",
                                    blur: 0
                                }
                            }, 
                            collisions: {
                                enable: true,
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                            move: {
                                speed: 10
                            },
                            opacity: {
                                value: 1,
                            },
                            number: {
                                density: {
                                  enable: true,
                                  value_area: 800,
                                },
                                value: 80,
                            }
                        }
                    }} 
                />
                : null
            }
            </a>
            <div className="modal-container bg-success">
                <div className="modal-header">
                    <a onClick={onCancel} className="btn btn-clear float-right" aria-label="Close"></a>
                    <div className="modal-title h5">{title}</div>
                    <div className="card-subtitle text-gray">{task.Date}</div>
                </div>
                <div className="modal-body">
                    <div className="content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                        <p style={{ margin: '0' }}>{task.Description}</p>
                        <i class="icon icon-2x icon-check"></i>
                    </div>
                </div>
                <div className="modal-footer">

                </div>
            </div>
        </div>
    );
}
 
export default TaskModal;