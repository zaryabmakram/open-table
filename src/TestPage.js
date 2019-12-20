import React, {Component} from 'react';

import app from './firebase';

export default class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            tables: []
        }
    }

    componentDidMount(){
        const rootRef = app.database().ref().child('tables')
        // const countRef = rootRef.child('counter')
        rootRef.on('value', snap => {
            console.log(snap.val())
            this.setState({tables: snap.val()})
        });
    }

    render(){
        return (
            <div>{this.state.tables.map(table => table.number)}</div>
        );
    }

}