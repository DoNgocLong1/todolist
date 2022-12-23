import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface IDemo {
    title ?: string
    description ?: string
}

const Demo = ({title, description} : IDemo) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {description || 'dsada'}
      </Modal>
    </>
  );
};

export default Demo;