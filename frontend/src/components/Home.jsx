
const clicked = alert(Math.round(Math.random() * 10))


const Button = () => {
  return (
    <button onClick= {clicked} >Click me</button>
  )
}

const Home = () => {
  return (
    <div>
      <Button />
    </div>
    
  )
}

export default Home