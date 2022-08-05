import {FC} from 'react';
interface AppProps{
  color?: string;
}
const App: FC <AppProps> = ({ color }) =>{
  return (
    <div>
      <p>Hello from App { color }</p>
    </div>
  );
};

export default App;