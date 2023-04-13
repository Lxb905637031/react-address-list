
import AddressList from "./components/AddressList"

import { singers } from './constant'

function App() {
  return (
    <div className="App">
     <AddressList
        title="联系人"
        addressList={ singers }
     />
    </div>
  )
}

export default App
