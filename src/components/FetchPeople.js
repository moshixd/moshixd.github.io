import React from "react";

 class FetchPeople extends React.Component {

    state = {
        loading: true
    }

    async componentDidMount() {
        const url = "https://swapi.dev/api/people/?format=json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (

            <div>
                {this.state.loading ? <div>loading... </div> : <div>people...</div>}
            </div>
        );
    }
 }
 export default FetchPeople;