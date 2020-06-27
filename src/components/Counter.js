import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      isCounting: false,
      isModalOpen: false,
    };
  }

  handleClickCounter() {
    if (this.state.isCounting) {
      clearInterval(this.timerID);
      this.setState({ isCounting: false });
    } else {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClickIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  handleClickDecrement() {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count <= 0) {
      this.setState({
        count: 0,
        isModalOpen: true,
      });
    }
  }
  handleClickReset() {
    this.setState({
      count: 10,
    });
  }
  //handleClickClose method
  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  tick() {
    if (this.state.count <= 0) {
      clearInterval(this.timerID);
      this.setState({
        count: 10,
        isCounting: false,
        isModalOpen: true,
      });
    } else {
      this.setState({
        isCounting: true,
        count: this.state.count - 1,
      });
    }
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header">Alert</div>
            <div className="modal-message">
              <p>Count reached 0!</p>
            </div>
            {/* onClick event */}
            <div className="modal-close">
              <button
                className="modal-close-btn"
                onClick={() => {
                  this.handleClickClose();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <header>
          <nav class="navbar">
            <ul>
              <li>
                <h1>Counter</h1>
              </li>
            </ul>
          </nav>
        </header>
        {modal}
        <div class="container">
          <div class="flex-container">
            <button
              onClick={() => {
                this.handleClickDecrement();
              }}
              class="flex-items button clicked decrease"
            >
              -
            </button>
            <span id="value" class="flex-items">
              {this.state.count}
            </span>
            <button
              onClick={() => {
                this.handleClickIncrement();
              }}
              class="flex-items button clicked increase"
            >
              +
            </button>
          </div>
          <div class="btn-container">
            <button
              onClick={() => {
                this.handleClickCounter();
              }}
              id="btn"
              class="btn clicked counter"
            >
              {this.state.isCounting ? "Stop" : "Start"}
            </button>
            <span></span>
            <button
              onClick={() => {
                this.handleClickReset();
              }}
              class="btn clicked reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Counter;
