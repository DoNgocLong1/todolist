import React, { useState } from "react";
import { Form, Input, DatePicker, InputNumber, Button } from "antd";
import { useDispatch } from "react-redux";
import { addItem } from "features/todolist/todolistSlice";
import TagSelects from "./TagSelects";
import { DataType } from "data/list";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;
interface IAddJob{
  onOk: () => void
}
const AddJob = ({onOk}: IAddJob) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<DataType>({} as DataType);
  const handleSubmit = () => {
    dispatch(addItem(formData))
    onOk()
    setFormData({
      key: 0,
      title: '',
      progress: '',
      start: '',
      status: '',
      tags: []
    })
  };
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Title" >
          <Input
            placeholder="input title"
            status="warning"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </Form.Item>
        <Form.Item label="Progress" >
          <InputNumber
            onChange={(e: any) => {
              setFormData((prev) => ({ ...prev, progress: e }));
            }}
          />
        </Form.Item>
        <Form.Item label="Tag" >
          <TagSelects setData={setFormData} />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker
            status="warning"
            onChange={(e: any) => {
              setFormData((prev) => ({
                ...prev,
                start: dayjs(e[0]).format("DD/MMM/YYYY") || "",
              }));
            }}
          />
        </Form.Item>
        <Button onClick={handleSubmit}>Button</Button>
      </Form>
    </>
  );
};

export default AddJob;
