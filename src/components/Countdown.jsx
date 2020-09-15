import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
    }
    
    resetCount = () => {
		this.setState({ count: 0 });
	};
  

    render() {
        
		return (
			<div style={{display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100vh"}}>
                    <div>
				{this.state.count !== 0 && (
					<Clock timeInSeconds={this.state.count} resetCount={this.resetCount} />
				)}
				<CountdownForm
					onSetCountdownTime={val =>
						this.state.count === 0 && this.setState({ count: val })
					}
				/>
                </div>
			</div>
		);
	}
}

export default Countdown;