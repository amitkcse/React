import React, { Component } from 'react';
import Task from './Task';
class TaskList extends React.Component{
    render(){
        // console.log('tasks', this.props.Tasks);
        // console.log('tasks', typeof this.props.Tasks)
        return(
            <div className="sidebar col-md-2">
                <ul className="list-group">
                    {this.props.Tasks.map(task => (<Task task={task} onClick={this.props.onClick} viewTask={this.props.viewTask}/>))}

                </ul>
                <div className="row">
                    <ul className="pagination pagination-sm">
                        <li className="disabled"><a href="#">&laquo;</a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </div>
                <div class="row" >
                    <button className="btn btn-lg btn-success btn-primary" type="button" onClick={this.props.saveTask}>Save Task</button>
                </div>
            </div>

        )
    }

}
export default TaskList;