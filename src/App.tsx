import { FC, useState } from 'react';
import Second from './Second';
interface AppProps{
  color?: string;
}
const App: FC<AppProps> = ({ color }) => {
  const [count, setCount] = useState(0);
  const handleClick = ():void => { 
    return setCount(count + 1);
  }
  return (
    <div>
      <p>Hello from App { color }</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement </button>
      <button onClick={()=> setCount(0)}>RESET</button>
      <p>{count}</p>
      <Second number ={count+2} />
    </div>
  );
};

export default App;