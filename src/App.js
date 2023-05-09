import React, {Component} from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import AddItem from "./components/AddItem/AddItem";

class App extends Component{
state = {
  items:[
    {id:1 , name:'Hamza', age:22},
    {id:2 , name:'Mario', age:66},
    {id:3 , name:'Felo', age:87}
  ]
}
deleteItem=(id)=> {
  let items = this.state.items.filter(item => {
  return item.id !== id
  })
  this.setState({items})
}

addItem = (item) => {
  item.id = Math.random();
let items = this.state.items;
items.push(item);
this.setState({items})
}
    render() {
        return(
          <div className="App container">
          <h1 className="text-center">ToDo List</h1>  
          <TodoItem items={this.state.items} deleteItem={this.deleteItem}/>
          <AddItem addItem={this.addItem} />
          </div>
        )
    }
} 
export default App;