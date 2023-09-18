import BG from "./assets/bg-pump-miser.png"
import Bath from "./assets/Bath-Tub.png"
import Dishwasher from "./assets/Dishwasher.png"
import Laundry from "./assets/Laundry-Machine.png"
import Sprinkler from "./assets/Sprinkler.png"
import Toilet from "./assets/Toilet.png"
import Kitchen from "./assets/Washing-Dish.png"

function App() {

  return (
    <>
      {/* <div className="bg-auto bg-no-repeat" style={{backgroundImage:`url(${BG})`}}> */}
      <div id="house-section" className="relative max-w-7xl m-auto">  
        <img src={BG} className="bg-contain" />
        <div id="control-panel" className="flex justify-center absolute items-center top-1/4 right-3">
          <div id="water-usage-box" className="border-2 m-3 p-2">
            <div id="kitchen" className="house-service  hover:text-amber-400">
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
      
      
      <div>

      </div>
    </>
  )
}

export default App
