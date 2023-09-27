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
import RecycleAnimation from "./assets/RecycleAnimation.svg"
import wellPump from "./assets/well-pump.png"
import AngryWoman from "./assets/Angry Woman Profile.png"
import Bathgif from "./assets/bath.gif"
import Toiletgif from "./assets/toilet.gif"
import sprinklersgif from "./assets/sprinkler.gif"
import Laundrygif from "./assets/laundry.gif"
import Dishwashergif from "./assets/dishwasher.gif"
import Kitchengif from "./assets/kitchenFaucet.gif"
import OutlinePm from "./assets/Pump Miser Outline.png"

import {useRef,useState } from "react"

function App() {
  const chatBubble = useRef(null);
  const pmTank = useRef(null);
  const pmTankRight = useRef(null)
  const toggleSwitch = useRef(null);
  const toggleSwitchRight = useRef(null);
  const ballLeft = useRef(null)
  const ballRight = useRef(null)

  const [recycleIcon,setrecycleIcon] = useState(false)

  const chatBubbleRemover = ()=>{
    if(chatBubble.current.style.display === ""){
      chatBubble.current.style.display = "none"
    }
  }
  const selectIcon = (x)=>{
    let bgElement  = x.currentTarget.getElementsByClassName("appliance-icon")[0]
    if(bgElement.style.backgroundColor == "green"){
      console.log("hello")
      bgElement.style.backgroundColor = "rgb(27, 56, 84)"
    }else{
      bgElement.style.backgroundColor = "green"
    }
  }
  const greenLight =()=>{
    toggleSwitch.current.style.borderColor = "rgb(0 255 0)"
  }
  const greenLightRight =()=>{
    toggleSwitchRight.current.style.borderColor = "rgb(0 255 0)"
  }
  const redLightRight =()=>{
    toggleSwitchRight.current.style.borderColor = "rgb(239 68 68)"
  }
  const popupIcon = (x) =>{
    let Selection = x.currentTarget.id
    // document.getElementById(`${callRef}animation`).style.display = "flex"
    let IconAnimation = document.getElementById(`${Selection}animation`)
    if(IconAnimation.style.display === "none"){
      IconAnimation.style.display = "flex"
    }else{
      IconAnimation.style.display = "none"
    }
    // console.log(document.getElementById(`${Element}animation`).style.display)
    // if(idElement.style)
    //get element by id
  }
  const selectAction =(element)=>{
    chatBubbleRemover();
    selectIcon(element)
    pmTank.current.classList.add("waterAnimation")
    pmTankRight.current.classList.add("waterAnimationRight")
    setTimeout(greenLight,5000)
    setInterval(greenLightRight, 5000);
    setInterval(redLightRight, 10000);
    ballLeft.current.classList.add("waterBallAnimation")
    ballRight.current.classList.add("waterBallAnimation")
    if(recycleIcon === false){
      setrecycleIcon(true)
    }
    popupIcon(element)

  }
  return (
    <>
      <div id="parent">
        <div id="house-section" className="relative max-w-4xl m-auto -mt-10">  
          <img src={BG} className="bg-contain" />
          <div id="chat-bubble" ref={chatBubble} className="absolute top-1/4 right-1/4 z-10	w-1/4" >
            <div className="bubble relative">
              <div className="bubble-content font-bold">
                <p>Click a button to turn on the water and start the Cycle Stop Valve demo</p>
              </div>
              <div className="bubble-tail"></div>
            </div>
          </div>
          <div id="control-panel" className="flex justify-center absolute items-center top-1/4 right-3">
            <div id="water-usage-box" className="border-2 m-3 p-2">
              <div id="kitchen" onClick={(a)=>selectAction(a)} className="house-service  hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Kitchen}/>
                </div>
                <p className="text-xs">RUN KITCHEN SINK</p>
              </div>
              <div id="dishwasher" onClick={(a)=>selectAction(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Dishwasher}/>
                </div>
                <p className="text-xs">RUN DISHWASHER</p>
              </div>
              <div id="laundry" onClick={(a)=>selectAction(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Laundry}/>
                </div>
                <p className="text-xs">WASH LAUNDRY</p>
              </div>
              <div id="bath" onClick={(a)=>selectAction(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Bath}/>
                </div>
                <p className="text-xs">TAKE A SHOWER</p>
              </div>
              <div id="Sprinklers" onClick={(a)=>selectAction(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Sprinkler}/>
                </div>
                <p className="text-xs">SPRINKLERS</p>
              </div>
              <div id="toilet" onClick={(a)=>selectAction(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Toilet}/>
                </div>
                <p className="text-xs">FLUSH TOILET</p>
              </div>
            </div>
          </div>
          <div id="bathanimation" style={{"display":"none"}} className="absolute items-center gap-2 top-56 right-64">
            <div className="flex w-10">
              <span className="border-2 border-dashed flex border-white	w-full"></span>
            </div>
            <div className="w-20 bg-white	rounded-lg p-2">
              <img src={Bathgif}/>
            </div>
          </div>
          <div id="kitchenanimation" style={{"display":"none"}} 
          className="absolute items-center gap-2 top-32 right-[24.5rem] flex-col h-auto"
          >
            <div className="w-20 bg-white	rounded-lg p-2">
              <img src={Kitchengif}/>
            </div>
            <div>
              <span className="border-2 border-dashed flex	border-black	h-28"></span>
            </div>
          </div>
          <div id="dishwasheranimation" style={{"display":"none"}} 
          className="absolute gap-2 top-3/4 right-52 items-center">
            <div className="w-28">
              <span className="border-2 border-dashed flex border-black	w-full"></span>
            </div>
            <div className="w-20 bg-white	rounded-lg p-2">
              <img src={Dishwashergif}/>
            </div>
          </div>
          <div id="laundryanimation" style={{"display":"none"}} 
          className="absolute gap-2 top-3/4 left-44 items-center"
          >
            <div className="w-20 bg-white	rounded-lg p-2">
              <img src={Laundrygif}/>
            </div>
            <div className="w-28">
              <span className="border-2 border-dashed flex border-black	w-full"></span>
            </div>
          </div>
          <div id="Sprinklersanimation" style={{"display":"none"}} 
          className="absolute gap-2 top-2/4 left-8 items-center flex-col"
          >
            <div className="w-20 bg-white	rounded-lg p-2">
              <img src={sprinklersgif}/>
            </div>
            <div className=" h-8 flex">
              <span className="border-2 border-dashed flex border-black"></span>
            </div>
          </div>
          <div id="toiletanimation" style={{"display":"none"}} 
          className="absolute gap-2 top-[14rem] left-64 items-center"
          >
            <div className="w-14 bg-white	rounded-lg p-2">
              <img src={Toiletgif}/>
            </div>
            <div className="w-28">
              <span className="border-2 border-dashed flex border-black	w-full"></span>
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

                          <svg
                            viewBox="0 0 84.2275854 138.57695"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* <!-- Mason jar outline --> */}
                              <path
                            d="M75.1601221,158.5662 C75.1601221,158.5662 77.6146357,158.555218 80.3583201,158.5662 C83.4068805,158.578403 86.8097537,158.5662 87.5421213,158.5662 L144.647796,158.5662 C145.247981,158.590258 147.710204,158.5662 148.353907,158.5662 C148.997611,158.5662 157.160117,158.5662 157.160122,158.5662 L157.160122,145.293111 C157.165463,143.357266 157.165463,136.363818 157.160117,129.566296 L157.160117,67.3516036 C157.154093,57.9420097 139.405869,44.3325692 129.95549,44.0768928 L129.95549,34.9762951 L136.822616,34.9762951 C136.822616,34.9762951 136.822616,34.2713274 136.822616,33.4051999 C136.822616,32.5390724 136.794016,33.2431434 136.822616,32.524901 L136.822616,23.7803322 C136.822616,22.9641108 136.771196,22.8312423 136.822616,22.5768928 C136.852342,22.4298545 136.822616,24.4009608 136.822616,22 L98.9341605,22 C98.9341605,22.4922573 98.9341605,22.4922573 98.9341605,23.7803322 C98.9341605,24.6309368 98.9341605,25.2688902 98.9341605,25.6941924 C98.9341605,27.2121277 98.9341605,29.4890305 98.9341605,32.524901 C98.9341605,33.8126845 98.9341605,33.8126845 98.9341605,34.9762951 C101.830923,34.9762951 104.003495,34.9762951 105.451876,34.9762951 C105.670768,34.9762951 105.999106,34.9762951 106.43689,34.9762951 L106.43689,44.0768928 C97.0654621,44.3575934 75.1601221,57.9514836 75.1601221,67.3533525 L75.1601221,129.568044 C75.1673899,136.275171 74.6601221,141.627458 75.1601221,145.293111 Z"
                            fill="#ECE8D1"
                            stroke="#000000"
                            strokeWidth="2"
                            transform="translate(-194.779384, -658.999942) translate(11.000000, 638.000000) translate(109.839878, 0.000000) translate(116.051817, 90.288446) rotate(180.000000) translate(-116.051817, -90.288446)"
                          />


                            {/* <!-- Define a clip path for the water --> */}
                            <defs>
                              <clipPath id="waterClip">
                                  <path
                                      d="M75.1601221,158.5662 C75.1601221,158.5662 77.6146357,158.555218 80.3583201,158.5662 C83.4068805,158.578403 86.8097537,158.5662 87.5421213,158.5662 L144.647796,158.5662 C145.247981,158.590258 147.710204,158.5662 148.353907,158.5662 C148.997611,158.5662 157.160117,158.5662 157.160122,158.5662 L157.160122,145.293111 C157.165463,143.357266 157.165463,136.363818 157.160117,129.566296 L157.160117,67.3516036 C157.154093,57.9420097 139.405869,44.3325692 129.95549,44.0768928 L129.95549,34.9762951 L136.822616,34.9762951 C136.822616,34.9762951 136.822616,34.2713274 136.822616,33.4051999 C136.822616,32.5390724 136.794016,33.2431434 136.822616,32.524901 L136.822616,23.7803322 C136.822616,22.9641108 136.771196,22.8312423 136.822616,22.5768928 C136.852342,22.4298545 136.822616,24.4009608 136.822616,22 L98.9341605,22 C98.9341605,22.4922573 98.9341605,22.4922573 98.9341605,23.7803322 C98.9341605,24.6309368 98.9341605,25.2688902 98.9341605,25.6941924 C98.9341605,27.2121277 98.9341605,29.4890305 98.9341605,32.524901 C98.9341605,33.8126845 98.9341605,33.8126845 98.9341605,34.9762951 C101.830923,34.9762951 104.003495,34.9762951 105.451876,34.9762951 C105.670768,34.9762951 105.999106,34.9762951 106.43689,34.9762951 L106.43689,44.0768928 C97.0654621,44.3575934 75.1601221,57.9514836 75.1601221,67.3533525 L75.1601221,129.568044 C75.1673899,136.275171 74.6601221,141.627458 75.1601221,145.293111 Z"
                                      fill="#ECE8D1"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      transform="translate(-194.779384, -658.999942) translate(11.000000, 638.000000) translate(109.839878, 0.000000) translate(116.051817, 90.288446) rotate(180.000000) translate(-116.051817, -90.288446)"
                                  />
                              </clipPath>
                            </defs>
                            <rect
                              x="0"
                              y="40%"
                              width="100%"
                              height="60%"
                              fill="#53CCF9"
                              clipPath="url(#waterClip)"
                              ref={pmTank}
                            />
                          </svg>


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
                            <span ref={toggleSwitch} className="rounded-full border-8 m-auto border-red-500"></span>
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
                  <div className="relative -z-10">
                    <div ref={ballLeft} className="waterBall w-4 h-4 absolute border-2 rounded-full top-2/3"></div>
                    <div id="blueWaterH" className="w-full h-7 rounded-ss-md"></div>
                    <div id="blueWaterV" className="w-4 h-7 self-start rounded-br-2xl"></div>
                  </div>
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
                      <img src={(recycleIcon === false) ? Recycle:RecycleAnimation} className="absolute top-1/4 left-1" />
                    </div>
                    <div className="w-1/4 m-auto"><img src={HappyWoman} /></div>
                  </div>
                </div>
              </div>
           
            </div>
            <div id="right-side" className="w-1/2 border-slate-500 border-l-2	flex items-end">
              <div className="flex items-end justify-center flex-col w-full">
                <div className="w-11/12">
                  <div className="flex -mb-8">
                    <div id="tank-container" className="w-2/3 flex items-center flex-col justify-end">
                      <div className="flex w-9/12">
                        <div id="pumpMiser-container" className="flex flex-col self-end flex-1 items-start mb-1">
                          <div className="w-2/5	 ml-2"><img src={OutlinePm}/></div>
                          <div id="border-line" className="flex flex-col w-full items-end self-start ml-4">
                            <span className="border-solid	border border-zinc-700 self-start h-3"></span>
                            <span className="w-full border-solid border border-zinc-700"></span>
                          </div>
                        </div>
                        <div className="flex flex-1 relative">
                        
                        <svg
                            viewBox="0 0 84.2275854 138.57695"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* <!-- Mason jar outline --> */}
                              <path
                            d="M75.1601221,158.5662 C75.1601221,158.5662 77.6146357,158.555218 80.3583201,158.5662 C83.4068805,158.578403 86.8097537,158.5662 87.5421213,158.5662 L144.647796,158.5662 C145.247981,158.590258 147.710204,158.5662 148.353907,158.5662 C148.997611,158.5662 157.160117,158.5662 157.160122,158.5662 L157.160122,145.293111 C157.165463,143.357266 157.165463,136.363818 157.160117,129.566296 L157.160117,67.3516036 C157.154093,57.9420097 139.405869,44.3325692 129.95549,44.0768928 L129.95549,34.9762951 L136.822616,34.9762951 C136.822616,34.9762951 136.822616,34.2713274 136.822616,33.4051999 C136.822616,32.5390724 136.794016,33.2431434 136.822616,32.524901 L136.822616,23.7803322 C136.822616,22.9641108 136.771196,22.8312423 136.822616,22.5768928 C136.852342,22.4298545 136.822616,24.4009608 136.822616,22 L98.9341605,22 C98.9341605,22.4922573 98.9341605,22.4922573 98.9341605,23.7803322 C98.9341605,24.6309368 98.9341605,25.2688902 98.9341605,25.6941924 C98.9341605,27.2121277 98.9341605,29.4890305 98.9341605,32.524901 C98.9341605,33.8126845 98.9341605,33.8126845 98.9341605,34.9762951 C101.830923,34.9762951 104.003495,34.9762951 105.451876,34.9762951 C105.670768,34.9762951 105.999106,34.9762951 106.43689,34.9762951 L106.43689,44.0768928 C97.0654621,44.3575934 75.1601221,57.9514836 75.1601221,67.3533525 L75.1601221,129.568044 C75.1673899,136.275171 74.6601221,141.627458 75.1601221,145.293111 Z"
                            fill="#ECE8D1"
                            stroke="#000000"
                            strokeWidth="2"
                            transform="translate(-194.779384, -658.999942) translate(11.000000, 638.000000) translate(109.839878, 0.000000) translate(116.051817, 90.288446) rotate(180.000000) translate(-116.051817, -90.288446)"
                          />


                            {/* <!-- Define a clip path for the water --> */}
                            <defs>
                              <clipPath id="waterClip">
                                  <path
                                      d="M75.1601221,158.5662 C75.1601221,158.5662 77.6146357,158.555218 80.3583201,158.5662 C83.4068805,158.578403 86.8097537,158.5662 87.5421213,158.5662 L144.647796,158.5662 C145.247981,158.590258 147.710204,158.5662 148.353907,158.5662 C148.997611,158.5662 157.160117,158.5662 157.160122,158.5662 L157.160122,145.293111 C157.165463,143.357266 157.165463,136.363818 157.160117,129.566296 L157.160117,67.3516036 C157.154093,57.9420097 139.405869,44.3325692 129.95549,44.0768928 L129.95549,34.9762951 L136.822616,34.9762951 C136.822616,34.9762951 136.822616,34.2713274 136.822616,33.4051999 C136.822616,32.5390724 136.794016,33.2431434 136.822616,32.524901 L136.822616,23.7803322 C136.822616,22.9641108 136.771196,22.8312423 136.822616,22.5768928 C136.852342,22.4298545 136.822616,24.4009608 136.822616,22 L98.9341605,22 C98.9341605,22.4922573 98.9341605,22.4922573 98.9341605,23.7803322 C98.9341605,24.6309368 98.9341605,25.2688902 98.9341605,25.6941924 C98.9341605,27.2121277 98.9341605,29.4890305 98.9341605,32.524901 C98.9341605,33.8126845 98.9341605,33.8126845 98.9341605,34.9762951 C101.830923,34.9762951 104.003495,34.9762951 105.451876,34.9762951 C105.670768,34.9762951 105.999106,34.9762951 106.43689,34.9762951 L106.43689,44.0768928 C97.0654621,44.3575934 75.1601221,57.9514836 75.1601221,67.3533525 L75.1601221,129.568044 C75.1673899,136.275171 74.6601221,141.627458 75.1601221,145.293111 Z"
                                      fill="#ECE8D1"
                                      stroke="#000000"
                                      strokeWidth="2"
                                      transform="translate(-194.779384, -658.999942) translate(11.000000, 638.000000) translate(109.839878, 0.000000) translate(116.051817, 90.288446) rotate(180.000000) translate(-116.051817, -90.288446)"
                                  />
                              </clipPath>
                            </defs>
                            <rect
                              x="0"
                              y="40%"
                              width="100%"
                              height="60%"
                              fill="#53CCF9"
                              clipPath="url(#waterClip)"
                              ref={pmTankRight}
                            />
                          </svg>






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
                          <div className="flex w-8 h-full bg-neutral-500" >
                            <span ref={toggleSwitchRight}  className="rounded-full border-8 m-auto border-red-500"></span>
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
                  <div className="relative -z-10">
                    <div ref={ballRight} className="waterBall w-4 h-4 absolute border-2 rounded-full top-2/3"></div>
                    <div id="blueWaterH" className="w-full h-7 rounded-ss-md"></div>
                    <div id="blueWaterV" className="w-4 h-7 self-start rounded-br-2xl"></div>
                  </div>
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
                      <img src={(recycleIcon === false) ? Recycle:RecycleAnimation} className="absolute top-1/4 left-1"/>
                    </div>
                    <div className="w-1/4 m-auto"><img src={AngryWoman} /></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
