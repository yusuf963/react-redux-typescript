import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos,deleteTodo } from "../actions";
import { StoreState } from "../reducers";


interface AppProps {
  todos: Todo[];
  fetchTodos: Function ;
  deleteTodo: typeof deleteTodo;
}
interface AppState { 
  fetching: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) { 
    super(props)
    this.state = { fetching: false }
  }
  componentDidUpdate(prevProps: AppProps, prevState: AppState): void { 
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick = (): void =>{
    this.props.fetchTodos();
    this.setState({ fetching: true });
  }
  onTodoClick = (id: number): void => {
  this.props.deleteTodo(id);
};

  renderList(): JSX.Element[]{
    return this.props.todos.map((todo: Todo, index: number) => {
      return (
        <div onClick={()=> this.onTodoClick(todo.id)}  key={index}>{ todo.title }<br/><br/></div>
        
      ) 
    })
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);



// import { useState } from 'react';
// import Second from '../Second';
// //add ? to the end of the type to make it optional
// interface AppProps{
//   color?: string;
// }

// const App = (props: AppProps): JSX.Element => {

//   const [count, setCount] = useState(0);

//   const handleClick = ():void => {
//     return setCount(count + 1);
//   }
//   return (
//     <div>
//       <p>Hello from App { props.color }</p>
//       <button onClick={handleClick}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement </button>
//       <button onClick={()=> setCount(0)}>RESET</button>
//       <p>{count}</p>
//       <Second number ={count+2} />
//     </div>
//   );
// };

// export default App;
