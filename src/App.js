import React, { Component } from 'react';
import uuid from 'uuid'
import Cookie from "js.cookie"

import Input from './components/Input'
import List from './components/List'
import './css/App.css';

class App extends Component {
  constructor(){
    super()
    let todosList
    if(!Cookie.get("todos")){
      todosList = [
        {text: 'Add Todos', id: uuid.v4()}
      ]
    }else{
      todosList = Cookie.get("todos");
    }
    this.state = {
      todosList: todosList
    }
  }

  updateCookies(){
    Cookie.set("todos", this.state.todosList)
  }

  addTodo(todo){
    this.setState({ 
      todosList: this.state.todosList.concat(todo)
    }, this.updateCookies)
  }

  removeTodo(todo){
    this.setState({
      todosList: this.state.todosList.filter(it => it.id !== todo.id)
    }, this.updateCookies)
  }

  render() { 
    return (
      <section className="app">
        <Input onAddTodo={this.addTodo.bind(this)}/>
        <List itemsList={this.state.todosList} removeTodo={this.removeTodo.bind(this)}/>
      </section> 
    );
  }
}

export default App;
