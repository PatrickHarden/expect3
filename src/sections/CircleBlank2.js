import React from 'react'
import { VictoryBar, VictoryPie, VictoryAnimation, VictoryLabel } from 'victory'

export default class CircleBlank2 extends React.Component {
    constructor() {
        super();
        this.state = {
            percent: 0, data: this.getData(0)
        };
    }

    componentDidMount() {
        let percent = 1;  
            this.setStateInterval = window.setInterval(() => {
                if (percent < 100) {
                percent += (1 * 31);
                percent = (percent > 100) ? 100 : percent;
                }
                this.setState({
                    percent, data: this.getData(percent)
                });
            }, 20000000);
    }

    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }

    getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    render() {
        return (
            <div>
                <svg viewBox="0 0 400 400" width="100%" height="100%">
                    <VictoryPie
                        standalone={false}
                        animate={{ duration: 1000 }}
                        width={400} height={400}
                        data={this.state.data}
                        innerRadius={120}
                        cornerRadius={25}
                        labels={() => null}
                        style={{
                            data: {
                                fill: (d) => {
                                    const color = d.y > 30 ? "#0096D2" : "green";
                                    return d.x === 1 ? color : "transparent";
                                }
                            }
                        }}
                    />
                    <VictoryAnimation duration={1000} data={this.state}>
                        {(newProps) => {
                            return (
                                <VictoryLabel
                                    textAnchor="middle" verticalAnchor="middle"
                                    x={200} y={200}
                                    text={`${Math.round(newProps.percent)}%`}
                                    style={{ fontSize: 45 }}
                                />
                            );
                        }}
                    </VictoryAnimation>
                </svg>
                <p className="text-center">Expect3</p>
            </div>
        );
    }
}