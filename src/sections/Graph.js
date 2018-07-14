import React from 'react'
import { VictoryBar, VictoryPie, VictoryTheme, VictoryChart, VictoryAnimation, VictoryLabel, VictoryStack, VictoryArea } from 'victory'
import _ from 'lodash'

export default class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: this.getData() };
    }

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            this.setState({ data: this.getData() });
        }, 2000);
    }

    getData() {
        return _.range(3).map(() => {
            return [
                { x: 1, y: _.random(1, 3) },
                { x: 2, y: _.random(3, 7) },
                { x: 3, y: _.random(5, 10) },
                // { x: 4, y: _.random(2, 10) },
                // { x: 5, y: _.random(2, 15) }
            ];
        });
    }

    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                animate={{ duration: 800 }}
            >
                <VictoryStack
                    colorScale={"green"}
                >
                    {this.state.data.map((data, i) => {
                        return (
                            <VictoryArea
                                key={i}
                                data={data}
                                interpolation={"basis"}
                            />
                        );
                    })}
                </VictoryStack>
            </VictoryChart>
        );
    }
}