function ListGroup() {
    let items = ["NewYork","SanFrancisco","Tokyo","London","Paris"];
    items = [];
    if (items.length === 0)
    return <p>item not found</p>
        
    return (
     <>
     <h1>List</h1>
     {items.length  === 0 ? <p> no item found</p> : null }
     {items.length  === 0 &&  <p> no iten found</p>  }
        <ul className="list-group">
            {items.map(item => (
            <li key={item}>{item}</li>))  }
        </ul>
     </>
  );
}

export default ListGroup;
