import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
interface ITaskProgress{
    taskPercent: any
}
const TaskProgress = ({taskPercent}: ITaskProgress) => {
  const [percent, setPercent] = useState<number>(taskPercent);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent =  prevPercent + 1;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 1;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <>
      <Progress type="circle" width = {40} percent={percent} style={{ marginRight: 8 }} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};

export default TaskProgress;