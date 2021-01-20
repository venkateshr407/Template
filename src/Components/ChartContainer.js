import React, { Component } from 'react'

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

export default class ChartContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
          categories: ['Jan', 'Feb', 'Mar', 'Apr'],
          positiveSeries: [ 1, 2, 3, 5 ],
          negativeSeries: [ -1, -2, -3, -5 ]
      };
  }

    render() {
        const { categories, positiveSeries, negativeSeries } = this.state;

        return (
          <Chart>
              <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={categories} />
              </ChartCategoryAxis>
              <ChartSeries>
                  <ChartSeriesItem type="verticalArea" data={positiveSeries} />
                  <ChartSeriesItem type="verticalArea" data={negativeSeries} />
              </ChartSeries>
          </Chart>
        );
    }
}