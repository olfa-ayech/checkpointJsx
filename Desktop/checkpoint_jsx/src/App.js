import Tunisia from "./tunisie.jpg"
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    </header>
<div className="divv" style={{border:"solid 5px black",maxWidth :'900px',height:"1480px",textAlign:"center",marginLeft:"150px"}}>
<h1 className="titleRed"> My Lovely Tunisia</h1>
<div className="drapeaux">
<img  className="tunisie" src={Tunisia} alt ='Tunisie' />
<img className="tun" src="/tun.jpg" alt="tun" />
<video  src="/النشيد الوطني التونسي - حماة الحمى.mp4" type="video/mp4"style={{width:'320', height:'240',marginTop:"8px"}} controls >
</video>


</div>

</div>   
    </div>
  );
}

export default App;
