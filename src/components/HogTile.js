import React from 'react'
export class HogTile extends React.Component {
    state = {
        expanded: false,
        hogVisible: true
    }
    //create a new div containing hog details and render it to the screen
    handleClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    handleHide = () => {
        this.set
    }

    render() {
        if(this.state.expanded == true){
            return (
                <div style={{margin:"30px", float:"left"}}>
                <h4>Name: {this.props.hog.name}</h4>
                <img src={this.props.hog.image} onClick={this.handleClick}/>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Greased: {this.props.hog.greased.toString()}</p>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Highest Medal Achieved: {this.props.hog.highestMedalAchieved}</p>
                <div>
                    <button onClick={this.handleHide}>Hide Hog</button>
                </div>
            </div>
            )
        }else{
        return (
            <div style={{margin:"30px", float:"left"}}>
                <h4>Name: {this.props.hog.name}</h4>
                <img src={this.props.hog.image} onClick={this.handleClick}/>
                <div>
                    <button onClick={this.handleHide}>Hide Hog</button>
                </div>
            </div>
            )
        }
    }
}