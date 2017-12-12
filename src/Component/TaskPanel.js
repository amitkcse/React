import React, { Component } from 'react';
class TaskPanel extends React.Component {

    render() {
        return (
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                <form class="form-signin form-group">
                    <label for="taskName" class="sr-only">Task Title</label>
                    <input type="text" id="taskName" class="form-control" placeholder="Task Title" required/>
                    <input type="hidden" id="taskKey" />
                    <label for="taskDesc" class="sr-only">Description</label>
                    <textarea id="taskDesc" class="form-control" rows="20"
                              placeholder="Your Task Description Here"> </textarea>
                    <button class="btn btn-lg btn-primary" type="button" onClick={this.props.addTask}>Add Task</button>
                    <button class="btn btn-lg btn-primary" type="button" onClick={this.props.updateTask}>Update Task</button>
                </form>

            </div>
        )
    }

}
export default TaskPanel;