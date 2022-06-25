import React, { useState } from "react";
import { categoryIndex } from "../../user/UserProfile";
import Select from "react-select";
import "./Category.scss";

export interface CategoryProps {
  onChangeField: any;
}

const Category: React.FC<CategoryProps> = ({ onChangeField }) => {
  const [category, setCategory] = useState<any>({ value: -1, label: "선택" });
  const onChange = (newValue: any, meta: any) => {
    setCategory(newValue);
    onChangeField({ key: "categoryId", value: newValue.value });
  };

  return (
    <div className="category_block">
      <label className="category_label">카테고리</label>
      <Select
        placeholder={category}
        className="select"
        value={category}
        onChange={onChange}
        options={categoryIndex}
        maxMenuHeight={600}
      />
    </div>
  );
};

export default Category;
