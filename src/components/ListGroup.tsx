import { MouseEvent }  from "react";
function ListGroup() {
    let items = ["NewYork","SanFrancisco","Tokyo","London","Paris"];
    // Event handling function
    const handleclick =  (event: MouseEvent) => console.log(event);  
    return (
     <>
        <h1>List</h1>
     
        {items.length  === 0 &&  <p> no item found</p>}
        <ul 
            className="list-group">
            {items.map((item,index) => (
            <li 
                className="list-group-item"
                key={item}
                onClick={handleclick}
            >
                {item}
            </li>
          ))  }
        </ul>
     </>
  );
}

export default ListGroup;
