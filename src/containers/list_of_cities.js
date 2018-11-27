import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';

class ListOfCities extends Component {

    renderTemprature() {
        let d = this.props.weather;
        console.log(d);
        return (
            d.map((city, index) => {
                return <tr key={uuid()}>
                    <th scope="row">{index + 1}</th>
                    <td>{city.city.name}</td>
                    <td>
                        <Sparklines data={city.list.map(temp => temp.main.temp)}>
                           <SparklinesLine color="red" />
                           <SparklinesReferenceLine type="avg"/>
                        </Sparklines>
                        {((city.list.map(temp => temp.main.temp).reduce((a,b) => a + b)/city.list.length)* 9 / 5 - 459.67).toFixed(0) + "F"}
                    </td>
                    <td>{city.city.population}</td>
                    <td>{city.list[0].main.humidity}</td>
                </tr>
            })

        );
    }
    render() {
        //console.log(this.props.weather);
        if (this.props.weather.length === 0) {
            return <div>Type above...</div>
        }

        //console.log(data);

        // for (let i = 0; i < 5; i++) {
        //     sparklines.push(+(data[data.length - 1].list[i].main.temp * 9 / 5 - 459.67).toFixed(0));
        // }

        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">City</th>
                            <th scope="col">Temp(°F)</th>
                            <th scope="col">Population</th>
                            <th scope="col">Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTemprature()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(ListOfCities);


