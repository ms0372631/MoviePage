import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import todolistStyle from './todolistStyle.css';


class Todos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem: '',
      list: []
    }
    this.updateInput = this.updateInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  updateInput(key, value){
    // update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    // create item with unique id
    const newItem = {
      id: new Date().getTime(),
      value: this.state.newItem.slice()
    };

    //copy current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    //update state with new list and reset newItwm input
    this.setState({
      list: list, 
      newItem: '',
    });
  }

  deleteItem(id){
    // copy current list of items
    const list = [...this.state.list]

    // filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }

  deleteAll(){
    const list = [];
    this.setState({
      list: list
    });
  }

  updateItem(value,id){
    const updatingList = [...this.state.list];
    let idx = updatingList.findIndex(item=>item.id===id);
    console.log(updatingList[idx]);
    console.log(idx)
    console.log(updatingList)
    updatingList[idx].value = value;
    this.setState({
      list: updatingList
    });
  }
  
  render(){
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>add</button>
          <button onClick={() => this.deleteAll()}>delete All</button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  <div>{item.value}</div>
                  <input
                   type="text"
                   id={item.id}
                  />
                  <button onClick={() => this.updateItem(item.id)}>update</button>
                  <button onClick={() => this.deleteItem(item.id)}>delete</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// function InitList(props){
//   return(
//     <div>
//       <h1>No Todos Here...</h1>
//     </div>
//   );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Todos />
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
