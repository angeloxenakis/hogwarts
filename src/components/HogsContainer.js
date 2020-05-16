import React from 'react'
import {HogTile} from './HogTile'
export class HogsContainer extends React.Component {
    state = {
        hogs: [],
        filteredHogs: [],
        greaseFilter: false
    }
    componentDidMount = () => { 
        fetch('http://localhost:3001/hogs')
            .then(resp => resp.json())
            .then((hogs) => {
                this.setState({
                    hogs: hogs,
                    filteredHogs: hogs
                })
            })
    }
    sortByName = () => {
        //look into localeCompare 
        this.setState({
            filteredHogs: this.state.hogs.sort( (a,b) => a.name.localeCompare(b.name) )
        })
    }
    sortByWeight = () => {
        this.setState({
            filteredHogs: this.state.hogs.sort( (a,b) => a.weight - b.weight )
        })
    }
    //filter by greased
    filterGrease = () => {
        if(this.state.greaseFilter == false){
            this.setState({
                filteredHogs: this.state.hogs.filter(hog => hog.greased == true ),
                greaseFilter: true
            })
        }else{
            this.setState({
                filteredHogs: this.state.hogs
            })
        }
    }

    render() {
        //render with an if statement depending on greased or not or all
        return (
            <div>
            <button onClick={this.filterGrease}>Filter By Grease</button>
            <button onClick={this.sortByName}>Sort By Name</button>
            <button onClick={this.sortByWeight}>Sort By Weight</button>
                {this.state.filteredHogs.map(hog => 
                <HogTile hog={hog} hideHog={this.hideHog}/>)}
            </div>
        )
    }
}