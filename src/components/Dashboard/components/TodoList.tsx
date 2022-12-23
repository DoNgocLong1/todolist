import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import TaskProgress from './Progress';

interface DataType {
  title: string;
  progress: React.ReactNode;
  start: string;
  status: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a href='/'>{text}</a>,
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
  },
  {
    title: 'Start day',
    dataIndex: 'start',
    key: 'start',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag === 'done' ? 'green' : 'geekblue';
          if (tag === 'important') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Planned End',
    key: 'end',
    render: () => (
      <Space size="middle">
        <a href='/'>Invite</a>
        <a href='/'>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    title: 'stringnfgngfffffdndfndfffffffff',
    progress: <TaskProgress taskPercent = {45}/>,
    start: 'string',
    status: 'string',
    tags: ['done','important',],
  },
  {
    title: 'string',
    progress: <TaskProgress taskPercent = {55}/>,
    start: 'string',
    status: 'string',
    tags: ['In progress'],
  },
  {
    title: 'string',
    progress: <TaskProgress taskPercent = {30}/>,
    start: 'string',
    status: 'string',
    tags: ['In progress','important'],
  },
];

const TodoList: React.FC = () => <Table columns={columns} dataSource={data} />;

export default TodoList;