import React, { useState } from 'react';
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
} from 'antd';
import TagSelects from './TagSelects';
import { DataType } from 'data/list';
const { RangePicker } = DatePicker;
const AddJob = () => {
    const [formData, setFormData] = useState<DataType>({} as DataType)
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish = {() => {
        setFormData({
            key: 1,
            title: "Do homework",
            progress: 90,
            start: "string",
            status: "string",
            tags: ["Done","Important"]
            })}
        }
      >
        <Form.Item label="Title">
          <Input 
          placeholder='input title' 
          status="warning"
          /* onChange={(e: any) => {
            setFormData(prev => [...prev, prev.title = e.target.value])
          }} */
          />
        </Form.Item>
        <Form.Item label="Progress">
            <InputNumber />
        </Form.Item>
        <Form.Item label="Tag">
            <TagSelects/>
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker status="warning"/>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddJob