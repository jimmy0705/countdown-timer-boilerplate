import React from 'react';

class Clock extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			displayTime: ""
			
		};
	}
    formatTime(timeInSeconds) {
        var seconds = timeInSeconds % 60;
        var minutes = Math.floor(timeInSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }
      
    startTimeHandler = () => {
		const { timeInSeconds } = this.props;
		this.clock = setInterval(() => {
			this.setState({
				timeInSec: this.state.timeInSec - 1,
				displayTime: this.formatTime(this.state.timeInSec - 1),
			});
		}, 1000);

		setTimeout(() => {
			clearInterval(this.clock);
			this.props.resetCount();
		}, (timeInSeconds + 1) * 1000);
	};

	componentDidMount() {
		this.setState({ timeInSec: this.props.timeInSeconds + 1 });
		if (this.props.timeInSeconds > 0) this.startTimeHandler();
	}



    render() {
        var {timeInSeconds} = this.props;
        //Keep the classes name. Try to inject your code and do not remove existing code
        return (
            <div className="clock">
                <span className="clock-text">
                  {this.state.displayTime}
                </span>
            </div>
        );
    }
}



export default Clock;