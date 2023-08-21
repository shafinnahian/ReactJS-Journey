import { useState } from "react";
import Alert from "./components/Alert";
import AlertForButton from "./components/AlertForButton";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

// function App(){
//       let item = [
//         'New York',
//         'San Francisco',
//         'Tokyo',
//         'London',
//         'Paris'
//     ]; 

//     const handleSelectItem = (item: string) => {
//       console.log(item);
//     }
//   return <div><ListGroup item={item} heading="Cities" onSelectItem={handleSelectItem}/></div>;
// }

// function App(){

//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//         </Alert>
//     </div>
//   );
// }

function App(){
  const [alertVisible, setAlertVisible] = useState(false);

  return <div>
    <Button 
      color = 'primary' 
      onClickButton = {() => {
        setAlertVisible(true);
      }
    }
  > My button</Button>

  {alertVisible && <AlertForButton word="Alert" onClose={() => setAlertVisible(false)}></AlertForButton>}
  </div>
}

export default App;