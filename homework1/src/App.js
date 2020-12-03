import "./App.css";
import ColorList from "./normal/components/ColorList";
import AddColorForm from './normal/components/AddColorForm'

export default function App(){
  return (
    <div>
      <AddColorForm />
      <ColorList />
    </div>
  );
}

