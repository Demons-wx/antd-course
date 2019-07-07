import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Divider, Tag, Timeline, Icon, Modal, Progress, Statistic, Card, Row, Col } from 'antd';

import { Result, Button } from 'antd';

const { confirm } = Modal;
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('finished!');
}

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showPropsConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default class App extends React.Component {
 
  render() {
    
    return (
      <div>
        <Table columns={columns} dataSource={data} />
        
        <Row type="flex" justify="center" style={{ marginTop: 32 }}>
          <Col span={12}>
            <Timeline mode="alternate">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Timeline.Item>
              <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                Technical testing 2015-09-01
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>

        <Button onClick={showConfirm}>Confirm</Button>
        <Button onClick={showDeleteConfirm} type="dashed">
          Delete
        </Button>
        <Button onClick={showPropsConfirm} type="dashed">
          With extra props
        </Button>

        <Row type="flex"  justify="center" style={{ marginTop: 32 }}>
          <Col span={12}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </Col>
          <Col span={9} offset={3}>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
          </Col>
        </Row>

      
          <Row gutter={16} style={{ marginTop: 32 }}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
      

        <Row gutter={16} style={{ marginTop: 32 }}>
          <Col span={12}>
            <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </Col>
          <Col span={12}>
            <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={24} style={{ marginTop: 32 }}>
            <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: 32 }}>
          <Col span={12}>
            <Result
              status="success"
              title="Successfully Purchased Cloud Server ECS!"
              subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
              extra={[
                <Button type="primary" key="console">
                  Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
              ]}
            />
          </Col>
          <Col span={12}>
            <Result
              status="warning"
              title="There are some problems with your operation."
              extra={
                <Button type="primary" key="console">
                  Go Console
                </Button>
              }
            />
          </Col>
        </Row>

      </div>
      
    );
  }
}
