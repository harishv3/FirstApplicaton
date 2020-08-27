import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function First(props)
{
  return(
  <div>
  <h1>hi</h1>
  <Second name="harish"/>
  </div>
  );
}

function Second(props)
{
  let count=0;
  return(
  <div>
  <h3>{count}</h3>
  <h2>hello {props.name}</h2>
  <Third />
  </div>
  );
}

class Third extends React.Component
{
  constructor()
  {
    super();
    this.state={count:1};
  }

  handleIncrement =() =>
  {
    this.setState({count:this.state.count+1});
  }

  render()
  {
    return (
      <div>
      <h1>Vankam pa</h1>
    <h2>{this.state.count}</h2>
      <button onClick={this.handleIncrement}>CLICK</button>
      
      </div>
    );

  }
}


const element=(
  <h2>heyy</h2>
);

ReactDOM.render(
  <First />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
