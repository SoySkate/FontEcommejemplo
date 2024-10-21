import React from "react";
import { useState, useEffect } from "react";

const SideBarComponent = ({checkedCategories, onCheckboxChange}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7066/api/Category", {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="py-2 flex sticky left-0 w-1/3 justify-center">
      <div className="">
        <h1>Get Categories</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <input 
              type="checkbox" 
              checked={checkedCategories.includes(category.id)}
              onChange={()=>onCheckboxChange(category.id)}/>-{category.name}{" "}
              {/* <button onClick={() => handleDelete(category.id)}>Delete Category</button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarComponent;
