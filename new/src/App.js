import './App.css';

let name = "Rohan";
function App() {
  return (

    <>
    <nav>
      <li> home</li>
      <li>about</li>
      <li>contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptas illum! Vero nisi, voluptates quae magnam culpa reiciendis nemo reprehenderit eum distinctio, laboriosam eius recusandae illum labore beatae. Dolorum, ad?</p>
    </div>
    </>
    
  );
}

export default App;
