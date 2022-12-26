import React, { useState } from 'react';
import { Button, Modal } from 'antd';
interface IModel{
    component: React.ReactNode
}
const ModalAddJob = ({component} : IModel) => {
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
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {component}
      </Modal>
    </>
  );
};

export default ModalAddJob;