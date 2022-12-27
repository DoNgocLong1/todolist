import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import TaskProgress from './Progress';
import { DataType } from 'data/list';
import ModalAddJob from './ModalAddJob';
import AddJob from './AddJob';
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
        {tags?.map((tag) => {
          let color = tag === 'Done' ? 'green' : 'geekblue';
          if (tag === 'Important') {
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


interface ITodoList {
  data: DataType[]
}
const TodoList = ({data}: ITodoList ) => {
  // console.log('data',data);
  const newData: DataType[] = data.map((item) =>{
    // console.log( typeof item.progress)
    return {
      ...item,
      progress : <TaskProgress taskPercent = {item.progress || 0}/>
    }
  })
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () : void=> {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Table columns={columns} dataSource={newData} />
      <ModalAddJob
      isModalOpen = {isModalOpen}
      component = {<AddJob 
        onOk={handleOk}
      />}
      showModal = {showModal}
      handleOk = {handleOk}
      handleCancel = {handleCancel}
      footer={true} 
      title = 'Add job' btnName = 'Add job'/>
    </>
  )
}

export default TodoList;