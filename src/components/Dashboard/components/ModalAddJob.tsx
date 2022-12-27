import React from 'react';
import { Button, Modal } from 'antd';
interface IModel{
    isModalOpen: boolean
    component: React.ReactNode,
    title: string,
    btnName: string,
    showModal: () => void,
    handleOk: () => void,
    handleCancel: () => void,
    footer: boolean,

}
const ModalAddJob = (
  {
    isModalOpen,
    component,
    title, 
    btnName, 
    showModal,
    handleCancel,
  }: IModel) => {
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {btnName}
      </Button>
      <Modal footer={null} title={title} open={isModalOpen} onCancel={handleCancel}>
        {component
        }
      </Modal>
    </>
  );
};

export default ModalAddJob;