
import About from "./About"

// rafce
const App = () => {

  const name = "Sakchai Srimakorn"
  const mySalary = 25000
  const myWifeSalary = 20000
  const randomNumber = Math.random()

  return (
    <div className="App">
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <div>เนื้อหาส่วนที่ 1</div>
      <div>เนื้อหาส่วนที่ 2</div>
      <div>สวัสดีคุณ {name}</div>
      <div>รายได้รวม {mySalary} + {myWifeSalary}</div>
      <div>ข้อมูลที่สุ่มได้ {randomNumber}</div>
      {
        randomNumber < 0.5 ? <div>คุณแพ้</div> : <div>คุณชนะ</div>
      }
      <About />
    </div>
  )
}

export default App




