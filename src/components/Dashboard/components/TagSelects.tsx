import React, { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Done", "Inprogress", "Important", "Not Started"];
const defaultCheckedList = ["Not Started", "Important"];
interface ITagSelects {
  setData: (data: any) => void;
}
const TagSelects = ({ setData }: ITagSelects) => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const onChange = (list: CheckboxValueType[]) => {
    console.log(list);
    setData((prev: any) => ({ ...prev, tags: list }));
    setCheckedList(list);
  };

  return (
    <>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};

export default TagSelects;
