import React, { useState } from 'react';
import { Modal } from '../Common';
import ToDo from './ToDo';
import { useSelector } from 'react-redux';

const ContainerList = ({ title, tasks, icon }) => {

    const [show, setShow] = useState(false);

    const { loading } = useSelector( state => state.todo );

    return (
        <div 
            className="panel" 
            style={{ 
                height: '100%' 
            }}
        >
        <div 
            className="panel-header"
        >   
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                }} 
                className="panel-title"
            >
                {title}
                <i className={`icon ${icon}`}></i>
            </div>
        </div>
        <div 
            className="panel-body" 
            style={{ 
                scrollbarWidth: 'none' 
            }}
        >
            {
                tasks.length === 0 ? <div className="card-subtitle text-gray" style={{ textAlign: 'center' }}>No hay tareas</div> :
                tasks.map( (task, i) => 
                    <ToDo 
                        key={i}
                        ID={task.id}
                        title={task.status}
                        Date={task.deadLine.split('T')[0]}
                        Description={task.descripcion}
                        User={task.idUser}
                        Role={title}
                    />
                )
            }
        </div>
        {
            title === 'ToDo' 
            ?
                <div className="panel-footer">
                    <button onClick={() => setShow(true)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} className="btn btn-primary"><i className="icon icon-plus"></i>Add</button>
                </div>
            : null
        }
        <Modal
            title='Add ToDo'
            show={show}
            onHide={setShow}
            task={{}}
        />
      </div>
    );
}
 
export default ContainerList;
