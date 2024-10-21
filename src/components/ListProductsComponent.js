import React from "react";
import { useState, useEffect} from "react";
import SideBarComponent from "./SideBarComponent";
import IndividualProduct from "./IndividualProduct";

const ListProductsComponent = () => {
  const [checkedCategories, setCheckedCategories] = useState([]);
   const [productsList, setProductsList] = useState([]);
   const [productsSelected, setProductsSelected] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    if(checkedCategories){
    setCheckedCategories((prevCheckedCategories) =>
      prevCheckedCategories.includes(categoryId)
        ? prevCheckedCategories.filter((id) => id !== categoryId)
        : [...prevCheckedCategories, categoryId]

    );
    printProductsOfCategroy(categoryId);}else{
      setCheckedCategories([])
      setProductsSelected([])
    }
  };
  //Aqui quizas hacer la funcion que chequea si el product tiene una category con el mismo num 
  //lo ponemos en selectedProducts?
  useEffect(() => {
    fetch("https://localhost:7066/api/Product/", {
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
       setProductsList(data)
      })
      .catch((error) => console.error("Error fetching categories:", error));
      
  }, []);
  console.log("This are the cat selected:"+checkedCategories);
  checkedCategories.forEach(cat => {
    console.log(cat.name);
  });
const printProductsOfCategroy=(catId)=>{
    fetch(`https://localhost:7066/api/Product/cat${catId}`, {
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
        setProductsSelected(data)
      })
      .catch((error) => console.error("Error fetching categories:", error));
}
  return (
    <div className=" flex flex-row">
      <div className="relative top-24 left-10">
      <SideBarComponent
        checkedCategories={checkedCategories}
        onCheckboxChange={handleCheckboxChange}
      /></div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
      {checkedCategories.length > 0 && productsSelected.length > 0 ? (
        productsSelected.map((p) => ( // Only render if checkedCategories and productsSelected are not empty
          // <li key={p.id}>
          //   <p>{p.id}-{p.name}</p>
          // </li>
          <IndividualProduct
          key={p.id}
          product={p}/>
        ))
      ) : (
        <>
          <h3>This are all products if you want Select a Category to only see the products of the selected Category ;)</h3>
          {productsList.map((p) => (   
            // <li key={p.id}>
            //   <p>{p.id}-{p.name}</p>
            // </li>
            <IndividualProduct
            key={p.id}
          product={p}/>
          ))}
        </>
      )}</div>
    </div>
  );
};

export default ListProductsComponent;
