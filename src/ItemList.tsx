import React from "react";


interface ItemListProps {
  items: string[];
}

const ItemList: React.FunctionComponent<ItemListProps> = ({ items }) => {
  return (
    <div 
    >
      <h2 >Item List</h2>
      <ul >
        {items.map((item, index) => (
          <li 
            key={index} 
           
            
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;