import './App.css';
import "./style.css"
import logo from "./imageInSrc.jpg"

function App() {
    return ( 
        <div className = "App" >
            <h1 class ="title red">React JSX</h1>
            <img src={logo} alt="" width="80%"/>
            <img style={{marginTop:50}} src="./imageInPublic.jpg" width="80%" alt=""/>
            <iframe style={{marginBottom:50, marginTop:50}} width="50%" height="367" src="https://www.youtube.com/embed/VWadE7PMF0c" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen/>
        </div>
    );
}

export default App;