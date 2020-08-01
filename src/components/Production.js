import React from 'react';
import Calendar from './Calendar';
import '../App.css';

class Production extends React.Component{
    render(){
        return (
            <div>
                <h4>Production</h4>
                <hr></hr>
                <Calendar />
            </div>
        )
    }
}

export default Production;