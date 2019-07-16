import React, {Component} from 'react';

 class Test extends Component {
state = {
  title:'',
  body: ''
};
   componentDidMount() { //fetch inside componentDidMount
     fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => this.setState({
    title: data.title,
    id:data.id
  }));
   }
//   componentWillMount() { //this will run before componentDidMount
//     console.log('componentWillMount...');
//   }

//   componentDidUpdate() { //will only run when updated for example state
//     console.log('componentDidUpdate...');
//   }

  // componentWillUpdate() {
//     console.log('componentWillUpdate...');
//   }

//   componentWillReceiveProps(nextProps, nextState) {
//     console.log('componentWillReceiveProps...'); // when your component receives new props usually used with redux (for example maping props) React 17 versiossa lisättävä UNSAFE_ ennen componentWil...
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
  //   { //you cant usse setsate you have to return
  //     return null;
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     console.log('getSnapshotBeforeUpdate');
//   }


  render () {
    const {title, id} = this.state; //destucturing
    return (
      <div>
      <h1> {title} </h1>
      <p> {id} </p>
      </div>
    )
  }
}

export default Test;
