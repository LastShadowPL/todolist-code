import React, {Component} from 'react'
import ListItem from './ListItem'
import '../css/List.css'

export default class List extends Component{

  removeHandler(item){
    this.props.removeTodo(item)
  }  

  render(){
    let listItems = this.props.itemsList.map(el => {return(
      <ListItem onDel={this.removeHandler.bind(this)} key={el.id} item={el}/>
    )})
    if(this.props.itemsList.length > 0)return(
      <ol className="list">
        {listItems}
      </ol>
    )
    else return(
      <h1 className="no-content">no todos</h1>
    )
  }
}