import './App.css';
import GetComponent from "./component/GetComponent";
import PostComponent from "./component/PostComponent";
import GetComponentWithoutGateway from "./component/GetComponentWithoutGateway";

function App() {
    return (
        <div>
            <GetComponent/>
            <PostComponent/>
            <h2>Ниже бьют корсы т.к. Cors Policy настроен только на Gateway, а ниже попытка стучаться напрямую в микросервис</h2>
            <GetComponentWithoutGateway/>
        </div>
    );
}

export default App;
