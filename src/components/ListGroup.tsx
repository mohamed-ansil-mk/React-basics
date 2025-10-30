import { useState } from "react";

function ListGroup() {
    let items = ["NewYork","SanFrancisco","Tokyo","London","Paris"];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    


    
      
    return (
     <>
        <h1>List</h1>
     
        {items.length  === 0 &&  <p> no item found</p>}
        <ul 
            className="list-group">
            {items.map((item,index) => (
            <li 
                className={ selectedIndex == index ? "list-group-item active":"List-group-item"}
                key={item}
                onClick={() => {setSelectedIndex(index);}}
            >
                {item}
            </li>
          ))  }
        </ul>
     </>
  );
}

export default ListGroup;
