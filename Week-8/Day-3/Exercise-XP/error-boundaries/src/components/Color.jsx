import React, { Component } from "react";

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteColor: "red",
            show: true
        };
    }

    componentDidMount() {
        alert("useEffect reached");
        this.setState({ favoriteColor: "yellow" });
        console.log("after update");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }

    setBlue = () => {
        this.setState({ favoriteColor: "blue" });
    }

    render() {
        return (
            <>
                <h2>My favorite color is {this.state.favoriteColor}.</h2>
                <button onClick={this.setBlue}>change to blue</button>
                <br />
                {this.state.show && <Child />}
                <button onClick={() => this.setState({ show: false })}>Delete</button>
            </>
        );
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert("Child component is being unmounted.");
    }

    render() {
        return <h2>Hello, World!</h2>;
    }
}

export default Color;