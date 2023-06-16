import React, { useEffect, useState } from "react";
import "./DataGrid.css";
import Tables from "../Table/Tables";
import { AudioOutlined, FilterFilled } from "@ant-design/icons";
import { Input, Space } from "antd";
import Modals from "../Modal/Modal";

function DataGrid() {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const { Search } = Input;

  const [formData, setFormData] = useState([]);
  const [lastSearch, setLastSearch] = useState();

  const onSearch = (value) => {
    console.log(value);
    let filtered = filterData(value);
    
    if (filtered !== null) {
      console.log('Eşleşme bulundu:', filtered);
      setFormData([filtered])
    } else {
      console.log('Eşleşme bulunamadı.');
      setFormData(lastSearch)
    }

    //setFormData(filtered.length > 1 ? filtered: formData )
  };

  const filterData = (value) => {
    
    for (let i = 0; i < formData.length; i++) {
      for (let key in formData[i]) {
        if (formData[i][key].includes(value)) {
          return formData[i];
        }
      }
    }
    return null;
   }


  return (
    <div className="container">
      <div className="dataTable">
        <div className="up-field">
          <div className="double-button">
            <Search
              placeholder="Search object..."
              onSearch={onSearch}
              enterButton
              className="search-button"
              focusTriggerAfterClose="false"
            />
            <FilterFilled
              style={{
                color: "#744BFC",
                marginLeft: "50px",
                fontSize: "20px",
                marginTop: "10px",
              }}
            />
          </div>
          <Modals formData={formData} setLastSearch={setLastSearch} setFormData={setFormData} />
        </div>
        <Tables formData={formData} />
      </div>
    </div>
  );
}

export default DataGrid;
