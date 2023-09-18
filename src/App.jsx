import BG from "./assets/bg-pump-miser.png"
import Bath from "./assets/Bath-Tub.png"
import Dishwasher from "./assets/Dishwasher.png"
import Laundry from "./assets/Laundry-Machine.png"
import Sprinkler from "./assets/Sprinkler.png"
import Toilet from "./assets/Toilet.png"
import Kitchen from "./assets/Washing-Dish.png"
import logo from "./assets/AquaSolutions.png"
// import light from "./assets/Amp Meter.svg"
// import GPM from "./assets/GPM Meter.svg"
// import HappyWoman from "./assets/Happy Woman Profile.png"
// import pipe1 from "./assets/pipe1.svg"
// import pipe2 from "./assets/pipe2.svg"
// import pressure from "./assets/pressure-gauge.png"
// import pumpMiser from "./assets/Pump Miser.svg"
// import Recycle from "./assets/Recycle.svg"
// import Tank from "./assets/Tank.svg"
// import wellPump from "./assets/well-pump.png"






function App() {

  return (
    <>
      {/* <div className="bg-auto bg-no-repeat" style={{backgroundImage:`url(${BG})`}}> */}
      <div className="relative max-w-7xl m-auto">
        <img src={BG} className="bg-contain" />
        <div id="control-panel" className="flex justify-center absolute items-center top-1/4 right-3">
          <div id="water-usage-box" className="border-2 m-3 p-2">
            <div id="kitchen" className="house-service">
              <div className="appliance-icon">
                <img src={Kitchen}/>
              </div>
              <p className="text-xs">RUN KITCHEN SINK</p>
            </div>
            <div id="dishwasher" className="house-service">
              <div className="appliance-icon">
                <img src={Dishwasher}/>
              </div>
              <p className="text-xs">RUN DISHWASHER</p>
            </div>
            <div id="laundry" className="house-service">
              <div className="appliance-icon">
                <img src={Laundry}/>
              </div>
              <p className="text-xs">WASH LAUNDRY</p>
            </div>
            <div id="shower" className="house-service">
              <div className="appliance-icon">
                <img src={Bath}/>
              </div>
              <p className="text-xs">TAKE A SHOWER</p>
            </div>
            <div id="sprinklers" className="house-service">
              <div className="appliance-icon">
                <img src={Sprinkler}/>
              </div>
              <p className="text-xs">SPRINKLERS</p>
            </div>
            <div id="toilet" className="house-service">
              <div className="appliance-icon">
                <img src={Toilet}/>
              </div>
              <p className="text-xs">FLUSH TOILET</p>
            </div>
          </div>

        </div>
      </div>
      
      
     
        <div className="flex w-full justify-center">
        <div className="bg-white w-1/2 border-slate-500 border-8">
          <div><img src={logo} /></div>
          <div>
            <div id="blueWater" className="absolute top-3/4">
            blue water tube
            </div>
            </div>



          {/* <div><img src={light} /></div>
          <div><img src={HappyWoman} /></div>
          <div><img src={pipe1} /></div>
          <div><img src={pipe2} /></div>
          <div><img src={pressure} /></div>
          <div><img src={pumpMiser} /></div>
          <div><img src={Recycle} /></div>
          <div><img src={Tank} /></div>
          <div><img src={wellPump} /></div> */}
        </div>
        <div className="bg-white w-1/2 border-slate-500 border-8">right</div>
        <div></div>
      </div>


    </>
  )
}

export default App
