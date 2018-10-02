// // var App = () => (
// //   <div>
// //     <h2>My Todo List</h2>
// //     <GroceryList />
// //   </div>
// // );

// // var TodoList = (props) => (
// //   <ul>
// //     <li>{props.todos[0]}</li>
// //     <li>{props.todos[1]}</li>
// //     <li>{props.todos[2]}</li>
// //   </ul>
// // );

// // var App = () => (
// //   <div>
// //     <h2>My Todo List</h2>
// //     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
// //   </div>
// // );

var Pizza = () =>(
  <div>Pizza</div>
);

var Grapes = () =>(
  <div>Grapes</div>
);

var GroceryListItem = (props) => (
  <div>
    <ul>
      {props.items.map(function(listValue){
        return <li>{listValue}</li>;
      })}
    </ul>
  </div>
); 

var GroceryList = () => (
  <div>
    <h2> My GroceryList </h2>
    <GroceryListItem items={['Cheese', 'Biscuits']} />
  </div>
); 
 ReactDOM.render(<GroceryList  />, document.getElementById("app"));
// ReactDOM.render(<App />, document.getElementById("app"));

// class MyComponent extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       name: 'Optimus Prime',
//       james: 'dumb',
//       num: 0
//      }
//     this.myFunction = this.myFunction.bind(this)
//   }

//   myFunction(){
//     this.setState({
//       name: 'wow!',
//       num: this.state.num + 1
//       // james: 'no!'
//     })
//   }

//   render () {
//     return <div onClick={this.myFunction} >
//     <h1>is james dumb? {this.state.num}</h1> 
//     {this.state.name} 
//     </div>
//   }

// }

//  ReactDOM.render(<MyComponent/>, document.getElementById("app"));
