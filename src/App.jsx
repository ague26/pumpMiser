import BG from "./assets/bg-pump-miser.png"
import Bath from "./assets/Bath-Tub.png"
import Dishwasher from "./assets/Dishwasher.png"
import Laundry from "./assets/Laundry-Machine.png"
import Sprinkler from "./assets/Sprinkler.png"
import Toilet from "./assets/Toilet.png"
import Kitchen from "./assets/Washing-Dish.png"
import logo from "./assets/AquaSolutions.png"
import AMP from "./assets/Amp Meter.svg"
import GPM from "./assets/GPM Meter.svg"
import HappyWoman from "./assets/Happy Woman Profile.png"
import pipe1 from "./assets/pipe1.svg"
import pipe2 from "./assets/pipe2.svg"
import pressure from "./assets/pressure-gauge.png"
import pumpMiser from "./assets/Pump Miser.svg"
import Recycle from "./assets/Recycle.svg"
import Tank from "./assets/Tank.svg"
import wellPump from "./assets/well-pump.png"


function App() {

  return (
    <>
      <div id="parent">
        <div id="house-section" className="relative max-w-7xl m-auto -mt-10">  
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
        <div className="flex w-full justify-center max-w-7xl m-auto">
            <div id="left-side" className="w-1/2 border-slate-500 border-r-2	">
              <div>
                <img src={logo} className="p-2"/>
              </div>
              <div className="flex items-center justify-center flex-col">
                <div className="w-11/12">
                  <div className="flex -mb-8">
                    <div id="tank-container" className="w-2/3 flex items-center flex-col justify-end">
                      <div className="flex w-9/12">
                        <div id="pumpMiser-container" className="flex flex-col self-end flex-1 items-start mb-1">
                          <div className="w-2/5	 ml-2"><img src={pumpMiser}/></div>
                          <div id="border-line" className="flex flex-col w-full items-end self-start ml-4">
                            <span className="border-solid	border border-zinc-700 self-start h-3"></span>
                            <span className="w-full border-solid border border-zinc-700"></span>
                          </div>
                        </div>
                        <div className="flex flex-1 relative">
                          <img src={Tank}/>
                          <p className="absolute left-1/4 text-xs	top-2">Tank</p> 
                        </div>
                        <div id="pressure-container" className="flex flex-col self-end flex-1 items-end mb-1">
                          <div className="w-4/5	"><img src={pressure} /></div>
                          <div id="border-line" className="flex flex-col w-full items-end self-end mr-5">
                            <span className="border-solid	border border-zinc-700 self-end h-3"></span>
                            <span className="w-full border-solid	border border-zinc-700"></span>
                          </div>
                        </div>
                      </div>
                      <div className="-mt-1.5">
                        <img src={pipe1} />
                      </div>
                    </div>
                    <div id="pressure-container" className="flex flex-col w-1/3 justify-end items-center">
                      <p className="text-xs font-bold">Pressure</p>
                      <p className="text-xs font-bold">Switch</p>
                      <div className="flex flex-col items-center">
                        <div className="flex ml-5 max-h-6 items-center">
                          <div className="flex w-8 h-full bg-neutral-500">
                            <span className="rounded-full border-8 m-auto border-red-500"></span>
                          </div>
                          <div className="ml-1">
                            <p className="text-xs">50</p>
                            <p className="text-xs">70</p>
                          </div>
                        </div>
                        <span className="bg-neutral-500	 w-2 h-8"></span>
                        </div>
                      <div className="-mt-1.5">
                        <img src={pipe2} />
                      </div>
                    </div>
                    <div id="gpm-container" className="flex flex-col w-1/3 justify-end items-center">
                      <div className="flex flex-col items-center">
                        <div className="max-w-fit">
                          <img src={GPM}/>
                        </div>
                        <span className="bg-neutral-500	 w-2 h-8"></span>
                      </div>
                      <div className="-mt-1.5">
                        <img src={pipe2} />
                      </div>
                    </div>
                  </div>
                  <div id="blueWaterH" className="w-full h-7 rounded-ss-md	"></div>
                  <div id="blueWaterV" className="w-4 h-7 self-start rounded-br-2xl"></div>
                  <div id="amp-container" className="flex w-full relative -mt-3 -ml-1">
                    <div className="absolute -left-12 top-1/4 flex items-center m-auto">
                      <div>
                        <p className="font-bold text-center" id="amp-meter-text">AMP METER</p>
                        <div className="w-9">
                          <img src={AMP}/>
                        </div>
                      </div>
                      <div id="border-line" className="flex w-3">
                        <span className="w-full border-solid border border-zinc-700"></span>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="w-6">
                        <img src={wellPump}/>
                      </div>
                      <img src={Recycle} className="absolute top-1/4" />
                    </div>
                    <div className="w-1/4 m-auto"><img src={HappyWoman} /></div>
                  </div>
                </div>
              </div>
           
            </div>
            <div className="w-1/2 border-slate-500 border-l-2	">right</div>
        </div>
      </div>

    </>
  )
}

export default App
