import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  
    

    render() {

        return (
            <div>
                <Clock timeInSeconds={count}/>
                <CountdownForm onSetCountdownTime={}/>
            </div>
        );
    }
}

export default Countdown;