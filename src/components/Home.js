import React, {
  Component,
  Fragment
} from 'react';

import "./Home.css";

import { generateRandomArray } from '../implementation/randomArray';

import { mergeSort } from '../implementation/mergesort';
import { quickSort } from '../implementation/quicksort';
import { heapSort } from '../implementation/heapsort';
import { bubbleSort } from '../implementation/bubblesort';
import { randomQuickSort } from '../implementation/randomQuicksort';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortName: 'mergeSort',
      size: "150",
      sortRunning: false,
      array: []
    }

    this.sortButtonClick = this.sortButtonClick.bind(this);
    this.PaintBlocks = this.PaintBlocks.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  PaintBlocks() {
    if (this.state.array.length > 0) {
      return this.state.array.map((item, key) => (
        <div style={{
          backgroundColor: '#FF1744',
          height: `${item}px`,
          marginLeft: '5px',
          transition: '.3s',
          width: `5px`
        }} key={key}></div>
      ));
    } else {
      return null;
    }
  }

  sortButtonClick(e) {
    console.log('sorrt');
    e.preventDefault();

    switch (this.state.sortName) {
      case "mergeSort":
        generateRandomArray(Number.parseInt(this.state.size))
          .then(res => {
            mergeSort(res)
            .then(result => {
              let resSize = result.arrayStates.length;
              for (let i = 0; i < resSize; i++) {
                setTimeout(() => {
                  this.setState({
                    array: result.arrayStates[i]
                  });
                }, 150*i);
              }
            });
          })
        break;
      case "quickSort":
        generateRandomArray(Number.parseInt(this.state.size))
          .then(res => {
            quickSort(res)
              .then(result => {

              });
          })
        break;
      case "heapSort":
        break;
      case "bubbleSort":
        break;
      case "randomQuickSort":
        break;
      default:
        break;
    }
  }

  render() { 
    return (
      <Fragment>
        <header className="navbar">
          <div className="logo">Sort Visualizer</div>
          <div className="sort-form">
            <select name="sortName" onChange={this.onChange} className="pill form-select">
              <option disabled>Select a value</option>
              <option value="mergeSort">Merge Sort</option>
              <option value="quickSort">Quick Sort</option>
              <option value="heapSort">Heap Sort</option>
              <option value="bubbleSort">Bubble Sort</option>
              <option value="randomQuickSort">Randomized Quick Sort</option>
            </select>
            <button 
              onClick={this.sortButtonClick} 
              className="pill sort-button"
              >Sort
            </button>
          </div>
          <div className="timer">
            Time Taken: 
          </div>
        </header>
        <div className="container-div">
          <div className="display-div">
            <div className="inner-div">
              <this.PaintBlocks />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
 
export default Home;
