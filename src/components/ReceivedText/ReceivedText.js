import React, { Component } from 'react';

class ReceivedText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prediction: [],
        };
    }

    async componentDidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ user_num: "image" }),


        };
        const response = await fetch('https://signs2text-l7k3kehv6a-uc.a.run.app/sign2text', requestOptions);
        const data = await response.json();
        console.log(data);
        this.setState({ prediction: data.prediction });

    }

    render() {
        const { prediction } = this.state;

        return (
            <div>
                <h1>Returned DATA: {prediction}</h1>
            </div>
        );
    }
}

export default ReceivedText
