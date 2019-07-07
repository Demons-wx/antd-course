import React from "react";
import $ from "jquery";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import { Table, Divider, Tag, Timeline, Icon, Modal, Progress, Statistic, Card, Row, Col } from 'antd';

import DataSet from "@antv/data-set";

export default class Basic extends React.Component {
  render() {

    const data1 = [
        {
          name: "London",
          "Jan.": 18.9,
          "Feb.": 28.8,
          "Mar.": 39.3,
          "Apr.": 81.4,
          May: 47,
          "Jun.": 20.3,
          "Jul.": 24,
          "Aug.": 35.6
        },
        {
          name: "Berlin",
          "Jan.": 12.4,
          "Feb.": 23.2,
          "Mar.": 34.5,
          "Apr.": 99.7,
          May: 52.6,
          "Jun.": 35.5,
          "Jul.": 37.4,
          "Aug.": 42.4
        }
    ];

    const ds = new DataSet();
    const dv1 = ds.createView().source(data1);

    dv1.transform({
        type: "fold",
        fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."],
        // 展开字段集
        key: "月份",
        // key字段
        value: "月均降雨量" // value字段
    });

    const data = [
      {
        year: "1991",
        value: 3
      },
      {
        year: "1992",
        value: 4
      },
      {
        year: "1993",
        value: 3.5
      },
      {
        year: "1994",
        value: 5
      },
      {
        year: "1995",
        value: 4.9
      },
      {
        year: "1996",
        value: 6
      },
      {
        year: "1997",
        value: 7
      },
      {
        year: "1998",
        value: 9
      },
      {
        year: "1999",
        value: 13
      }
    ];
    const cols = {
      value: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Row gutter={16} style={{ marginTop: 32 }}>
            <Col span={12}>
                <Chart height={400} data={data} scale={cols} forceFit>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                    crosshairs={{
                    type: "y"
                    }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                    type="point"
                    position="year*value"
                    size={4}
                    shape={"circle"}
                    style={{
                    stroke: "#fff",
                    lineWidth: 1
                    }}
                />
                </Chart>
            </Col>
            <Col span={12}>
                <Chart height={400} data={dv1} forceFit>
                    <Legend />
                    <Axis name="月份" />
                    <Axis name="月均降雨量" />
                    <Tooltip />
                    <Geom
                        type="intervalStack"
                        position="月份*月均降雨量"
                        color={"name"}
                        style={{
                        stroke: "#fff",
                        lineWidth: 1
                        }}
                    />
                    </Chart>
            </Col>
        </Row>

      </div>
    );
  }
}