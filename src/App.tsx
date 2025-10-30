import ListGroup  from "./components/ListGroup";

function App(){
  let items = ["NewYork","SanFrancisco","Tokyo","London","Paris"];
  const handleSelectItem = (item:string) => {
    console.log(item);
  }
  return (<div>
          <ListGroup items={items}  heading="cities" onSelectItem={handleSelectItem}/>
        </div>);

}

export default App;