import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Done', 'Inprogress', 'Important', 'Not Started'];
const defaultCheckedList = ['Not Started', 'Important'];

const TagSelects: React.FC = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };


  return (
    <>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};

export default TagSelects;