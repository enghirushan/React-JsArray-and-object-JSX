import './App.css'

export default function App() {

  const Fname = "Haritha";
  const arr = ["Apple" ,"Banana" ,"Orange"];

  const lan =  <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>PHP</li>
    </ul>

  /* build object*/
  const pobj ={
    name:"Haritha",
    age:23,
    gender:"male"
  }
  return (
    <main>
     <p>{Fname} like to eat {arr[0]}</p>
      <p>i love prgrammig language</p>
      {lan}
    <p>My age is {pobj.age}</p>  
     
    </main>
  )
}
