import React, { Component } from 'react';
class Task extends React.Component{
    constructor() {
        super();
    }
    viewTask1(key){
        this.props.viewTask(key)
    }

    cc(key){
       this.props.onClick(key);
    }
    render(){
        return(
            <li className=" list-group-item" ><button class="btn btn-sm " onClick={this.viewTask1.bind(this, this.props.task.key)}>{this.props.task.title}
            </button><button class="btn btn-sm btn-danger" onClick={this.cc.bind(this, this.props.task.key)}><span class="glyphicon glyphicon-trash "></span></button></li>
        )
    }

}
export default Task;