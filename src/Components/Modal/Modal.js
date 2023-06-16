import { Button, Modal } from "antd";
import { useState } from "react";
import { Input, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import "./Modal.css";
const Modals = ({ formData, setLastSearch, setFormData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    Object.assign(e, {key: formData.length + 1})
    setFormData([...formData, e]);
    setLastSearch([...formData, e])
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={<PlusOutlined />}
        className="modal-button"
      >
        Yeni Hesap Ekle
      </Button>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <Form
          form={form}
          name="control-hooks"
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="link"
            label="Sosyal Medya Linki"
            className="form-item"
          >
            <Input className="form-input" />
          </Form.Item>

          <Form.Item name="name" label="Sosyal Medya Adı" className="form-item">
            <Input className="form-input" />
          </Form.Item>

          <Form.Item name="description" label="Açıklama" className="form-item">
            <Input className="form-input" />
          </Form.Item>

          <Form.Item className="form-item-btn">
            <Button type="primary" className="form-send">
              Vazgeç
            </Button>
            <Button type="primary" htmlType="submit" className="form-send">
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Modals;
