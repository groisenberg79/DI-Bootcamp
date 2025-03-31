import React, { Component } from "react";

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {favoriteColor: "red"};
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
            </>
        );
    }
}

export default Color;