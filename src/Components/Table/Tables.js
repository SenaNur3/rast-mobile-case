import { Table } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./Table.css";

function Tables(props) {
  const { formData } = props;

  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: "Sosyal Medya Linki",
      dataIndex: "link",
      filterIcon: <ArrowDownOutlined />,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Sosyal Medya Adı",
      dataIndex: "name",
      filterIcon: <ArrowUpOutlined />,
    },
    {
      title: "Açıklama",
      dataIndex: "description",
      filterIcon: true,
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    setTableData(formData);
  }, [formData]);

  return (
    <div>
      <Table columns={columns} dataSource={tableData?.length === 0 ? null : tableData} onChange={onChange} locale={{ emptyText: 'Veri yok.' }} />
      <div className="rows">
        <span className="show">Show: </span>
        <button className="rows-button">
          <div className="btn-content">
            {tableData?.length} rows
            <div className="icons">
              <CaretDownOutlined
                style={{
                  position: "absolute",
                  width: "10px",
                  height: "7px",
                  color: "#744BFC",
                  marginTop: "9px",
                }}
              />
              <CaretUpOutlined
                style={{
                  width: "10px",
                  height: "7px",
                  color: "#744BFC",
                  marginBottom:"4px",
                }}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Tables;
