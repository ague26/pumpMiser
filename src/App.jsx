import BG from "./assets/bg-pump-miser.png"
function App() {

  return (
    <>
      {/* <div className="bg-auto bg-no-repeat" style={{backgroundImage:`url(${BG})`}}> */}
      <div className="relative">  
        <img src={BG} className="bg-contain" />
        <div id="control-panel" className="flex justify-center absolute items-center top-0">
          <div id="water-usage-box" className="border-2 m-2 p-2">
            <div id="kitchen">
              <img></img>
              <p>RUN KITCHEN SINK</p>
            </div>
            <div id="dishwasher">
              <img></img>
              <p>RUN DISHWASHER</p>
            </div>
            <div id="laundry">
              <img></img>
              <p>WASH LAUNDRY</p>
            </div>
            <div id="shower">
              <img></img>
              <p>TAKE A SHOWER</p>
            </div>
            <div id="sprinklers">
              <img></img>
              <p>SPRINKLERS</p>
            </div>
            <div id="toilet">
              <img></img>
              <p>FLUSH TOILET</p>
            </div>
          </div>

        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
