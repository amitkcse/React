import React, { Component } from 'react';
import Navbar from './Component/Navbar.js'
import TaskPanel from './Component/TaskPanel';
import TaskList from './Component/TaskList';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
//import './public/css/theme.css';
import './public/css/dashboard.css'
class App extends Component {
    constructor (props) {
        super(props);
        var te=localStorage.taskjson;
        if(te){var te2=JSON.parse(te);}else te2=false;
        var t2= te ? te2:
            [{key:1, title:"this is demo task title1", text:"this is demo text1"}];
        this.state = {
            Tasks: t2
        };
        this.handleTaskClick = this.handleTaskClick.bind(this);
        this.addTask=this.addTask.bind(this);
        this.viewTask=this.viewTask.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.saveTask=this.saveTask.bind(this);
    }
    saveTask(){
        localStorage.taskjson=JSON.stringify(this.state.Tasks);
        Notification.requestPermission(function(){
            var n = new Notification("TO_DO-Application : By Amit ", {
                body : "Hello User , Your Data is Save in Your Browser",
            });
            });
    }

    viewTask(index){
        document.getElementById('taskName').value= this.state.Tasks[index-1].title;
        document.getElementById('taskDesc').value= this.state.Tasks[index-1].text;
        document.getElementById('taskKey').value=this.state.Tasks[index-1].key;

    }

    handleTaskClick(task) {
        // console.log('task is'+task)
        // console.log('before',this.state.Tasks)
        this.state.Tasks.splice(task-1, 1);
        for(var i=0;i<this.state.Tasks.length ;i++){
            this.state.Tasks[i].key=i+1;
            console.log('key updated', this.state.Tasks[i])
        }
        this.setState({
            Tasks:this.state.Tasks
        });


    }
    updateTask(){
        var task ={};
        var key=document.getElementById('taskKey').value;
        task.key=key;
        task.title=document.getElementById('taskName').value;
        document.getElementById('taskName').value="";
        task.text=document.getElementById('taskDesc').value;
        document.getElementById('taskDesc').value="";
        this.state.Tasks[key-1]=task;
        var x=this.state.Tasks;
        this.setState({
            Tasks:x
        })
    }
    addTask(){
        var task ={};
        task.key=this.state.Tasks.length+1;
        task.title=document.getElementById('taskName').value;
        document.getElementById('taskName').value="";
        task.text=document.getElementById('taskDesc').value;
        document.getElementById('taskDesc').value="";
        // console.log('task add is', task)
        // console.log(' task ', this.state.Tasks);
        this.state.Tasks.push(task);
        var x=this.state.Tasks;

        this.setState({
            Tasks:x
        })
    }
  render() {
    return (
        <div>
            <Navbar />
            <TaskList Tasks={this.state.Tasks} onClick = {this.handleTaskClick} viewTask={this.viewTask} saveTask={this.saveTask}/>
            <TaskPanel Tasks={this.state.Tasks} addTask={this.addTask}  updateTask={this.updateTask}/>
        </div>
    );
  }
}

export default App;
