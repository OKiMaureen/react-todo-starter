import React from 'react';
import '../App.css';


export default class Todoinput extends React.Component {
    constructor(props){
        super(props) 
    }

    removeTodo(id){
        this.props.removeTodo(id);
    }

    render(){
        return (
           <div className="itemWrapper">
               <div className="taskRow">
               {this.props.todo.text}
               </div>
               <div className="buttonRow">
               <button onClick={(e)=>this.removeTodo(this.props.id)}>Remove</button>
               </div>
        </div>
        )
    }

}