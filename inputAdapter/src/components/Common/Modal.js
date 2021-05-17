import React, { useState, useEffect } from 'react';
import { updateTodo, createTodo, getTodo } from '../../actions/todo.action';
import { getUsers } from '../../actions/user.action';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ title, show, onHide, task }) => {

    const setShow = () => {
        if ( show ) return 'active';
        else return '';
    }

    const setMonth = () => {
        const month = new Date().getMonth() + 1;
        if ( month.toString().length < 2 ) return '0' + month;
        return month;
    }

    const [done, setDone] = useState({
        id: task.id,
        Date: task.Date || new Date().getFullYear() + '-' + setMonth() + '-' + new Date().getDate(),
        Description: task.Description || '',
        User: task.User || '',
        Role: task.Role || ''
    })

    const dispatch = useDispatch();
    const get = () => dispatch(getUsers());
    const create = todo => dispatch(createTodo(todo));
    const upgrade = todo => dispatch(updateTodo(todo));
    const getTo = () => dispatch(getTodo());
 
    const { loading, error } = useSelector( state => state.todo );
    const { users } = useSelector( state => state.user );

    const onCancel = () => {
        setDone({
            id: task.id,
            Date: task.Date || new Date().getFullYear() + '-' + setMonth() + '-' + new Date().getDate(),
            Description: task.Description || '',
            User: task.User || '',
            Role: task.Role || ''
        });
        onHide(false);
    }

    useEffect(() => {
        if ( users.length === 0 ) get();
    }, [users])

    const onSubmit = () => {
        let status = done.Role === 'ToDo' ? 1 : 2;
        if ( title === 'Add ToDo' ) {
            create({ ...done });
            setTimeout(() => {
                getTo();
            }, 2000);
            setDone({
                id: task.id,
                Date: task.Date || new Date().getFullYear() + '-' + setMonth() + '-' + new Date().getDate(),
                Description: task.Description || '',
                User: task.User || '',
                Role: task.Role || ''
            });
        } else {
            upgrade({ ...done, idStatus: status });
            setTimeout(() => {
                getTo();
            }, 2000);
        }
        
        onHide(false);
    }

    const changeStatus = () => {
        let status = done.Role === 'ToDo' ? 2 : 3;
        console.log(status);
        upgrade({ ...done, idStatus: status });
        setTimeout(() => {
            getTo();
        }, 2000)
        onHide(false);
    }

    return ( 
        <div class={`modal ${setShow()}`} id="modal-id">
            <a onClick={() => onHide(false)} class="modal-overlay" aria-label="Close"></a>
            <div class="modal-container">
                <div class="modal-header">
                    <a onClick={() => onHide(false)} class="btn btn-clear float-right" aria-label="Close"></a>
                    <div class="modal-title h5">{title}</div>
                </div>
                <div class="modal-body">
                    <div class="content">
                        <div>
                            <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                                <div className='col-3'>Date:</div>
                                <input onChange={e => setDone({ ...done, Date: e.target.value })} type="date" class="form-input col-9" value={done.Date} />
                            </div>
                            <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                                <div className='col-3'>User:</div>
                                <select onChange={e => setDone({ ...done, User: e.target.value })} value={done.User} class="form-select col-9">
                                    <option value=''>Choose an option</option>
                                    {
                                        users.map( us => 
                                            <option value={us.id}>{us.nombre}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                                <div className='col-3'>Description:</div>
                                <textarea 
                                    value={done.Description}
                                    onChange={e => setDone({ ...done, Description: e.target.value })}
                                    className='form-input col-9'
                                    rows={3}
                                    placeholder='Description ...'
                                />
                            </div>
                        </div>
                    </div>
                    {
                        title !== 'Add ToDo' 
                        ?
                            <button onClick={() => changeStatus()} className='btn btn-success' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '20px' }}><i className='icon icon-forward'></i>{ done.Role === 'ToDo' ? "To Process" : "To Done" }</button>
                        : null
                    }
                    {
                        error 
                        ?
                        <div class="toast toast-error">
                            Error en el ToDo.
                        </div>
                        : null
                    }
                </div>
                <div class="modal-footer">
                    <div>
                        <button style={{ margin: '0 5px' }} className='btn btn-error' onClick={() => onCancel()}>Cancel</button>
                        <button onClick={() => onSubmit()} style={{ margin: '0 5px' }} className='btn btn-success'>{ loading ? <div class="loading"></div> : title === "Add ToDo" ? "Add" : "Edit" }</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;