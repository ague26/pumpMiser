import Bath from "./assets/Bath-Tub.png"
import Dishwasher from "./assets/Dishwasher.png"
import Laundry from "./assets/Laundry-Machine.png"
import Sprinkler from "./assets/Sprinkler.png"
import Toilet from "./assets/Toilet.png"
import {useRef,useState,useEffect } from "react"

function App() {
  const pmTank = useRef(null);
  const pmTankRight = useRef(null)
  const toggleSwitch = useRef(null);
  const toggleSwitchRight = useRef(null);
  const ballLeft = useRef(null)
  const ballRight = useRef(null)

  const [statusControlBox,setstatusControlBox] = useState({})
  const [waterAnimation,setwaterAnimation] = useState(false)
  const [pmAmpgauge, setpmAmpgauge] = useState(0)
  const [pmGpmgauge, setpmGpmgauge] = useState(0)

  const greenLight =()=>{
    toggleSwitch.current.style.borderColor = "rgb(0 255 0)"
  }
  const selectIcon = (x)=>{
    let bgElement  = x.currentTarget.getElementsByClassName(`appliance-icon`)[0]
    let value
    let IconAnimation = document.getElementById(`${x.currentTarget.id}animation`)

    if(IconAnimation.style.display === "none"){
      IconAnimation.style.display = "flex"
    }else{
      IconAnimation.style.display = "none"
    }

    switch(x.currentTarget.id){
      case("kitchen"):
      case("diswasher"):
      case("toilet"):
        value = 1
        break;
      case("laundry"):
        value = 2
        break;
      case("bath"):
        value = 3
        break;
      case("Sprinklers"):
        value = 8 
        break;
      default:
      value = 1 
    }

    if(bgElement.style.backgroundColor === "green"){
      bgElement.style.backgroundColor = "rgb(27, 56, 84)"
      delete statusControlBox[x.currentTarget.id]
      switch(x.currentTarget.id){
        case("kitchen"):
        case("diswasher"):
        case("toilet"):
          setpmGpmgauge((prev)=>prev - 10) 
          break;
        case("laundry"):
          setpmGpmgauge((prev)=>prev - 20) 
          break;
        case("bath"):
          setpmGpmgauge((prev)=>prev - 45) 
          break;
        case("Sprinklers"):
          setpmGpmgauge((prev)=>prev - 55) 
          break;
        default:
        value = 1 
      }
      setstatusControlBox({...statusControlBox});
    }else{
      bgElement.style.backgroundColor = "green";
      switch(x.currentTarget.id){
        case("kitchen"):
        case("diswasher"):
        case("toilet"):
          setpmGpmgauge((prev)=>prev + 10) 
          break;
        case("laundry"):
          setpmGpmgauge((prev)=>prev + 20) 
          break;
        case("bath"):
          setpmGpmgauge((prev)=>prev + 45) 
          break;
        case("Sprinklers"):
          setpmGpmgauge((prev)=>prev + 60) 
          break;
        default:
        value = 1 
      }
      setstatusControlBox({...statusControlBox, [x.currentTarget.id] : value }
      )
    }

    if(waterAnimation === false){
      setwaterAnimation(true)
    }
  }
  const endwaterAnimation = ()=>{  
   
  if((Object.keys(statusControlBox).length === 0)){
    setwaterAnimation(()=>false)
    pmTank.current.classList.remove("waterAnimation")
    pmTankRight.current.classList.remove("waterAnimationRight")
    document.getElementById("psi-needle-pm").classList.remove("psi-needle-pm-animate")
    document.getElementById("gpm-needle-pm").classList.remove("gpm-needle-pm-animate")
    // document.getElementById("amp-needle-pm").classList.remove("amp-needle-pm-animate")
    document.getElementById("psi-needle").classList.remove("psi-needle-animate")
    document.getElementById("gpm-needle").classList.remove("gpm-needle-animate")
    document.getElementById("amp-needle").classList.remove("amp-needle-animate")
    ballLeft.current.classList.remove("waterBallAnimation")
    ballRight.current.classList.remove("waterBallAnimation")
    toggleSwitch.current.style.borderColor = "rgb(239 68 68)"
    toggleSwitchRight.current.classList.remove("toggleLight")
    
    }
  }
  const startwaterAnimation = () =>{
    if((pmTank.current.classList != "waterAnimation") && waterAnimation === true){
      pmTank.current.classList.add("waterAnimation")
      pmTankRight.current.classList.add("waterAnimationRight")
      toggleSwitchRight.current.classList.add("toggleLight")
      setTimeout(greenLight,5000)
      
      ballLeft.current.classList.add("waterBallAnimation")
      ballRight.current.classList.add("waterBallAnimation")

      document.getElementById("psi-needle-pm").classList.add("psi-needle-pm-animate")
      document.getElementById("psi-needle").classList.add("psi-needle-animate")
      document.getElementById("gpm-needle").classList.add("gpm-needle-animate")
      document.getElementById("amp-needle").classList.add("amp-needle-animate")
  }
}
const ampGauge= () =>{
  if(Object.keys(statusControlBox).length === 6){
    console.log(Object.keys(statusControlBox).length)
    setpmAmpgauge(25)
  }else if((Object.keys(statusControlBox).length >= 1) && Object.keys(statusControlBox).length < 6){
    setpmAmpgauge(20)
  }else{
    setpmAmpgauge(0)
  }
}
  useEffect(()=>{
    startwaterAnimation()
  }),[waterAnimation]
  useEffect(()=>{
    endwaterAnimation()
    ampGauge()
    //need to change dependency to waterAnimation
  }),[statusControlBox]
  return (
    <>
      <div id="parent" className="flex gap-2 flex-col justify-around m-auto">
        <div id="upper-half" className="relative m-auto max-w-5xl  min-h-full">  
          <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/bg-pump-miser.png"} className="bg-contain" />
          <div id="logo" className="w-36 top-0 left-0 absolute">
            <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/AquaSolutions-7e4f4499.png"}/>
          </div>
          <div id="chat-bubble" 
          style={{"display":`${waterAnimation === true ? "none":""}`}}
          className="absolute top-1/4 right-1/4 z-10	w-1/4">
            <div className="bubble relative">
              <div className="bubble-content font-bold">
                <p className="!m-0">Click a button to turn on the water and start the Pump Miser&#8482; demo</p>
              </div>
              <div className="bubble-tail"></div>
            </div>
          </div>
          <div id="control-panel" className="flex justify-center absolute items-center top-1/4 right-3">
            <div id="water-usage-box" className="border-2 m-3 p-2">
              <div id="kitchen" data-value={1} onClick={(a)=>selectIcon(a)} className="house-service  hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Washing-Dish.png"}/>
                </div>
                <p className="text-xs !m-0">RUN KITCHEN SINK</p>
              </div>
              <div id="dishwasher" data-value={1} onClick={(a)=>selectIcon(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Dishwasher}/>
                </div>
                <p className="text-xs !m-0">RUN DISHWASHER</p>
              </div>
              <div id="laundry" data-value={2} onClick={(a)=>selectIcon(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Laundry}/>
                </div>
                <p className="text-xs !m-0">WASH LAUNDRY</p>
              </div>
              <div id="bath" data-value={3} onClick={(a)=>selectIcon(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Bath}/>
                </div>
                <p className="text-xs !m-0">TAKE A SHOWER</p>
              </div>
              <div id="Sprinklers" data-value={8} onClick={(a)=>selectIcon(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Sprinkler}/>
                </div>
                <p className="text-xs !m-0">SPRINKLERS</p>
              </div>
              <div id="toilet" data-value={1} onClick={(a)=>selectIcon(a)} className="house-service hover:text-amber-400">
                <div className="appliance-icon">
                  <img src={Toilet}/>
                </div>
                <p className="text-xs !m-0">FLUSH TOILET</p>
              </div>
            </div>
          </div>
          <div id="bathanimation" style={{"display":"none"}} className="absolute items-end top-36 right-60">
            <div className="flex w-12">
              <span className="border-2 border-dashed flex border-black	w-full -skew-y-[25deg]"></span>
            </div>
            <div className="w-36 bg-slate-700	rounded-full border-4	p-4">
              <div style={{"width":"100%","height":"0","paddingBottom":"100%","position":"relative"}}>
                <iframe src="https://giphy.com/embed/d5Tbt7bo5OBi2wQH1i" 
                  width="100%" 
                  height="100%" 
                  style={{"position":"absolute"}}
                  className="giphy-embed" 
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div id="kitchenanimation" style={{"display":"none"}} 
          className="absolute items-center gap-2 top-32 right-[25rem] flex-col h-auto"
          >
            <div className="w-36 rounded-full border-4	">
              <img className="rounded-full h-32" src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/kitchen-68c4b31e.gif"}/>
            </div>
            <div>
              <span className="border-2 border-dashed flex	border-black	h-28"></span>
            </div>
          </div>
          <div id="dishwasheranimation" style={{"display":"none"}} 
          className="absolute gap-2 -bottom-3 right-52 items-center">
            <div className="w-24 -skew-y-6">
              <span className="border-2 border-dashed flex border-black	w-full"></span>
            </div>
            <div className="w-36 h-36 flex items-center justify-center bg-slate-700	rounded-full border-4 p-4 overflow-hidden	">
              <img className="w-11/12" src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/12/DishwasherV-76f531af.gif"}/>
            </div>
          </div>
          <div id="laundryanimation" style={{"display":"none"}} 
          className="absolute gap-2 bottom-0 left-44 items-center"
          >
            <div className="w-36 h-36 flex items-center justify-center bg-slate-700 rounded-full border-4 p-4 overflow-hidden">
              <img className="w-9/12" src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/laundry-8c46cacd.gif"}/>
            </div>
            <div className="w-24">
              <span className="border-2 border-dashed flex border-black	w-full"></span>
            </div>
          </div>
          <div id="Sprinklersanimation" style={{"display":"none"}} 
          className="absolute gap-2 bottom-24 left-2 items-center flex-col"
          >
            <div className="w-36 h-36 flex items-center justify-center bg-slate-700	rounded-full border-4 p-4">
              <img className="w-9/12" src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/sprinkler-f652a2a5.gif"}/>
            </div>
            <div className=" h-8 flex">
              <span className="border-2 border-dashed flex border-black"></span>
            </div>
          </div>
          <div id="toiletanimation" style={{"display":"none"}} 
          className="absolute top-40 left-64 items-end"
          >
            <div className="w-36 h-36 flex items-center justify-center bg-slate-700	rounded-full p-4 border-4 overflow-hidden">
              <img className="w-8/12" src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/toilet-337c213a.gif"}/>
            </div>
            <div className="w-20 skew-y-12 justify-self-start">
              <span className="border-2 border-dashed flex border-black	w-full"></span>
            </div>
            
          </div>
        </div>
        <div id="lower-half" className="flex w-full justify-center max-w-7xl m-auto gap-4 flex-row-reverse">
            <div id="left-side" className="w-1/2">
              <div id="pump-miser-logo" className="w-40">
                <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/PM-logo-f41ebcc8.png"} className="p-2"/>
              </div>
              <div className="w-full">
                <div id="upper-tube" className="relative z-10 flex -mb-9 ml-auto mr-0">
                  <div id="tank-container" className="w-2/3 flex items-center flex-col justify-end">
                    <div className="flex w-10/12 gap-3">
                      <div id="pumpMiser-container" className="flex flex-col justify-end items-end w-20 mb-4 relative">
                        <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pump-Miser-b61bd711.svg"}/>
                        <div id="border-line" className="flex flex-col w-full items-end -z-10 absolute left-3/4 -bottom-2">
                          <span className="border-solid	border border-zinc-700 self-start h-3"></span>
                          <span className="w-full border-solid border border-zinc-700"></span>
                        </div>
                      </div>
                      <div id="tank-container-svg" className="flex w-28">
                        <svg
                          viewBox="0 0 84.2275854 138.57695"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                        >
                          {/* Mason jar outline*/}
                          <path
                          d="M75.1601221,158.5662 C75.1601221,158.5662 77.6146357,158.555218 80.3583201,158.5662 C83.4068805,158.578403 86.8097537,158.5662 87.5421213,158.5662 L144.647796,158.5662 C145.247981,158.590258 147.710204,158.5662 148.353907,158.5662 C148.997611,158.5662 157.160117,158.5662 157.160122,158.5662 L157.160122,145.293111 C157.165463,143.357266 157.165463,136.363818 157.160117,129.566296 L157.160117,67.3516036 C157.154093,57.9420097 139.405869,44.3325692 129.95549,44.0768928 L129.95549,34.9762951 L136.822616,34.9762951 C136.822616,34.9762951 136.822616,34.2713274 136.822616,33.4051999 C136.822616,32.5390724 136.794016,33.2431434 136.822616,32.524901 L136.822616,23.7803322 C136.822616,22.9641108 136.771196,22.8312423 136.822616,22.5768928 C136.852342,22.4298545 136.822616,24.4009608 136.822616,22 L98.9341605,22 C98.9341605,22.4922573 98.9341605,22.4922573 98.9341605,23.7803322 C98.9341605,24.6309368 98.9341605,25.2688902 98.9341605,25.6941924 C98.9341605,27.2121277 98.9341605,29.4890305 98.9341605,32.524901 C98.9341605,33.8126845 98.9341605,33.8126845 98.9341605,34.9762951 C101.830923,34.9762951 104.003495,34.9762951 105.451876,34.9762951 C105.670768,34.9762951 105.999106,34.9762951 106.43689,34.9762951 L106.43689,44.0768928 C97.0654621,44.3575934 75.1601221,57.9514836 75.1601221,67.3533525 L75.1601221,129.568044 C75.1673899,136.275171 74.6601221,141.627458 75.1601221,145.293111 Z"
                          fill="#ECE8D1"
                          stroke="#000000"
                          strokeWidth="2"
                          transform="translate(-194.779384, -658.999942) translate(11.000000, 638.000000) translate(109.839878, 0.000000) translate(116.051817, 90.288446) rotate(180.000000) translate(-116.051817, -90.288446)"
                          />
                          
                          <text x="25" y="20" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">TANK</text>

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
                      </div>
                      <div id="pressure-gauge" className="flex justify-start items-end w-20  mb-4 relative">
                        <svg viewBox="0 0 74 74" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <title>PSI Meter</title>
                          <circle cx="36" cy="36" r="34" stroke="#979797" strokeWidth="5" fill="none" />
                          <text x="55" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">80</text>
                          <text x="48" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">60</text>
                          <text x="32" y="13" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">40</text>
                          <text x="17" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">20</text>
                          <text x="10" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">0</text>
                          <g id="needle" transform="translate(33, 20) rotate(-100 3.481 10.514)" fill="#FB0000">
                            <path id="psi-needle-pm"  d="M7.902,1.381 L3.481,10.514 C3.093,11.454 2.409,12 1.657,12 C1.041,12 0.517,11.694 0.221,11.213 C-0.098,10.645 -0.075,9.946 0.312,9.356 L6.102,0.463 C6.398,0.026 6.991,-0.127 7.469,0.113 C7.948,0.354 8.130,0.900 7.902,1.381 Z" />
                          </g>
                          <path id="Line" d="M36,6 C43.962,6 51.479,9.079 56.969,14.857 C62.594,20.778 66.158,29.314 66.869,37 L5.143,37 C6.649,22.114 19.889,6 36,6 Z" fill="none" stroke="#979797" />
                          <text x="26" y="52" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">PSI</text>
                        </svg>
                        <div id="border-line" className="w-[110%] flex flex-col items-end -z-10 absolute right-2/4 -bottom-2">
                          <span className="border-solid	border border-zinc-700  h-3"></span>
                          <span className="w-full border-solid	border border-zinc-700 "></span>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-1.5">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pipe1-ee3f4fa1.svg"} />
                    </div>
                  </div>
                  <div id="pressure-container" className="flex flex-col w-1/3 justify-end items-center">
                    <p className="text-xs font-bold !m-0">Pressure</p>
                    <p className="text-xs font-bold !m-0">Switch</p>
                    <div className="flex flex-col items-center">
                      <div className="flex ml-5 max-h-6 items-center">
                        <div className="flex w-8 h-full bg-neutral-500">
                          <span ref={toggleSwitch} className="rounded-full !border-8 m-auto border-red-500 border-solid	"></span>
                        </div>
                        <div className="ml-1">
                          <p className="text-xs !m-0">50</p>
                          <p className="text-xs !m-0">70</p>
                        </div>
                      </div>
                      <span className="bg-neutral-500	 w-2 h-8"></span>
                      </div>
                    <div className="-mt-1.5">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pipe2-5ec5ae77.svg"} />
                    </div>
                  </div>
                  <div id="gpm-container" className="flex flex-col w-1/3 justify-end items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16">
                        <svg viewBox="0 0 74 74" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <title>GPM Meter</title>
                            <circle cx="36" cy="36" r="34" stroke="#979797" strokeWidth="5" fill="none" />
                            <text x="55" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">25</text>
                            <text x="48" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">15</text>
                            <text x="32" y="13" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">10</text>
                            <text x="17" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">5</text>
                            <text x="10" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">0</text>
                            <g id="needle" transform="translate(33, 20) rotate(-120 3.481 10.514)" fill="#FB0000">
                              <path 
                              id="gpm-needle-pm"  
                              style={{ 
                                transformOrigin: '3.952px 6.758px',
                                transition: 'transform 0.5s ease-in',
                                transform: `rotate(${pmGpmgauge}deg)`
                              }} 
                              d="M7.902,1.381 L3.481,10.514 C3.093,11.454 2.409,12 1.657,12 C1.041,12 0.517,11.694 0.221,11.213 C-0.098,10.645 -0.075,9.946 0.312,9.356 L6.102,0.463 C6.398,0.026 6.991,-0.127 7.469,0.113 C7.948,0.354 8.130,0.900 7.902,1.381 Z" />
                            </g>
                            <path id="Line" d="M36,6 C43.962,6 51.479,9.079 56.969,14.857 C62.594,20.778 66.158,29.314 66.869,37 L5.143,37 C6.649,22.114 19.889,6 36,6 Z" fill="none" stroke="#979797" />
                            <text x="26" y="52" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">GPM</text>
                        </svg>
                      </div>
                      <span className="bg-neutral-500	 w-2 h-8"></span>
                    </div>
                    <div className="-mt-1.5">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pipe2-5ec5ae77.svg"} />
                    </div>
                  </div>
                </div>
                <div id="water-tube" className="relative ml-auto mr-0">
                  <div ref={ballLeft} className="waterBall w-4 h-4 absolute border-2 rounded-full top-2/3"></div>
                  <div id="blueWaterH" className="w-full h-8 rounded-ss-md"></div>
                  <div id="blueWaterV" className="w-4 h-7 self-start rounded-br-2xl"></div>
                </div>
                <div id="amp-container" className="flex w-full relative -mt-3 -ml-1">
                  <div className=" -left-[4rem] top-1/4 flex w-16 flex-col">
                      <p className="font-bold text-center text-xs" >AMP METER</p>
                      <svg viewBox="0 0 74 74" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <title>Amp Meter</title>
                        <circle cx="36" cy="36" r="34" stroke="#979797" strokeWidth="5" fill="none" />
                        <text x="52" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">30</text>
                        <text x="47" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">25</text>
                        <text x="31" y="15" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">15</text>
                        <text x="15" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">10</text>
                        <text x="7" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">5</text>
                        <g id="needle" transform="translate(33, 20) rotate(-125 3.481 10.514)" fill="#FB0000">
                          <path 
                          id="amp-needle-pm"
                          style={{ 
                            transformOrigin: '3.952px 6.758px',
                            transition: 'transform 0.5s ease-in',
                            transform: `rotate(${pmAmpgauge}deg)`
                          }}
                          d="M7.902,1.381 L3.481,10.514 C3.093,11.454 2.409,12 1.657,12 C1.041,12 0.517,11.694 0.221,11.213 C-0.098,10.645 -0.075,9.946 0.312,9.356 L6.102,0.463 C6.398,0.026 6.991,-0.127 7.469,0.113 C7.948,0.354 8.130,0.900 7.902,1.381 Z">
                          </path>
                        </g>
                        <path id="Line" d="M36,6 C43.962,6 51.479,9.079 56.969,14.857 C62.594,20.778 66.158,29.314 66.869,37 L5.143,37 C6.649,22.114 19.889,6 36,6 Z" fill="none" stroke="#979797" />
                        <text x="25" y="52" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">AMP</text>
                      </svg>
                  </div>
                  <div id="border-line" className="flex w-3 items-center">
                    <span className="w-full border-solid border border-zinc-700"></span>
                  </div>
                  <div className="flex-1 relative">
                    <div className="w-6">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/well-pump-fcdd787b.png"}/>
                    </div>
                    <img src={(waterAnimation === false) ? "https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Recycle-13284bc8.svg":"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/RecycleAnimation-ca1a8a11.svg"} className="absolute top-1/4 left-1" />
                  </div>
                  <div className="w-1/4 m-auto"><img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Happy-Woman-Profile-65fee01a.png"} /></div>
                </div>
              </div>           
            </div>
            <span className="border-slate-500 border-r-4"></span>
            <div id="right-side" className="w-1/2	flex justify-between flex-col">
              <p className="py-2 !m-0 font-bold text-left">Conventional System</p>
              <div className="w-full">
                <div id="right-upper-tube" className="relative z-10 flex -mb-9 ml-auto mr-0">
                  <div id="right-tank-container" className="w-2/3 flex items-center flex-col justify-end">
                    <div className="flex justify-end w-9/12 gap-3">
                      <div id="right-tank-container-svg" className="flex w-24 relative">
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
                          <text x="25" y="20" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">TANK</text>


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
                      </div>
                      <div id="right-pressure-gauge" className="flex justify-start items-end w-16  mb-4 relative">
                        <svg viewBox="0 0 74 74" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <title>PSI Meter</title>
                            <circle cx="36" cy="36" r="34" stroke="#979797" strokeWidth="5" fill="none" />
                            <text x="55" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">80</text>
                            <text x="48" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">60</text>
                            <text x="32" y="13" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">40</text>
                            <text x="17" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">20</text>
                            <text x="10" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">0</text>
                            <g id="needle" transform="translate(33, 20) rotate(-100 3.481 10.514)" fill="#FB0000">
                              <path id="psi-needle"  d="M7.902,1.381 L3.481,10.514 C3.093,11.454 2.409,12 1.657,12 C1.041,12 0.517,11.694 0.221,11.213 C-0.098,10.645 -0.075,9.946 0.312,9.356 L6.102,0.463 C6.398,0.026 6.991,-0.127 7.469,0.113 C7.948,0.354 8.130,0.900 7.902,1.381 Z" />
                            </g>
                            <path id="Line" d="M36,6 C43.962,6 51.479,9.079 56.969,14.857 C62.594,20.778 66.158,29.314 66.869,37 L5.143,37 C6.649,22.114 19.889,6 36,6 Z" fill="none" stroke="#979797" />
                            <text x="26" y="52" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">PSI</text>
                        </svg>
                        <div id="border-line" className="w-[110%] flex flex-col items-end -z-10 absolute right-2/4 -bottom-2">
                          <span className="border-solid	border border-zinc-700 self-end h-3"></span>
                          <span className="w-full border-solid	border border-zinc-700"></span>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-1.5">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pipe1-ee3f4fa1.svg"} />
                    </div>
                  </div>
                  <div id="right-pressure-container" className="flex flex-col w-1/3 justify-end items-center">
                    <p className="text-xs font-bold !m-0">Pressure</p>
                    <p className="text-xs font-bold !m-0">Switch</p>
                    <div className="flex flex-col items-center">
                      <div className="flex ml-5 max-h-6 items-center">
                        <div className="flex w-8 h-full bg-neutral-500" >
                          <span ref={toggleSwitchRight}  
                          className="rounded-full border-8 m-auto border-red-500 border-solid"></span>
                        </div>
                        <div className="ml-1">
                          <p className="text-xs !m-0">40</p>
                          <p className="text-xs !m-0">60</p>
                        </div>
                      </div>
                      <span className="bg-neutral-500	 w-2 h-8"></span>
                      </div>
                    <div className="-mt-1.5">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pipe2-5ec5ae77.svg"} />
                    </div>
                  </div>
                  <div id="right-gpm-container" className="flex flex-col w-1/3 justify-end items-center">
                    <div className="flex flex-col items-center">
                    <div className="w-16">
                        <svg viewBox="0 0 74 74" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <title>GPM Meter</title>
                            <circle cx="36" cy="36" r="34" stroke="#979797" strokeWidth="5" fill="none" />
                            <text x="55" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">25</text>
                            <text x="48" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">15</text>
                            <text x="32" y="13" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">10</text>
                            <text x="17" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">5</text>
                            <text x="10" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="7" fontWeight="bold" fill="#000000">0</text>
                            <g id="needle" transform="translate(33, 20) rotate(-100 3.481 10.514)" fill="#FB0000">
                              <path 
                              id="gpm-needle" 
                              d="M7.902,1.381 L3.481,10.514 C3.093,11.454 2.409,12 1.657,12 C1.041,12 0.517,11.694 0.221,11.213 C-0.098,10.645 -0.075,9.946 0.312,9.356 L6.102,0.463 C6.398,0.026 6.991,-0.127 7.469,0.113 C7.948,0.354 8.130,0.900 7.902,1.381 Z" />
                            </g>
                            <path id="Line" d="M36,6 C43.962,6 51.479,9.079 56.969,14.857 C62.594,20.778 66.158,29.314 66.869,37 L5.143,37 C6.649,22.114 19.889,6 36,6 Z" fill="none" stroke="#979797" />
                            <text x="26" y="52" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">GPM</text>
                        </svg>
                      </div>
                      <span className="bg-neutral-500	 w-2 h-8"></span>
                    </div>
                    <div className="-mt-1.5">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Pipe2-5ec5ae77.svg"} />
                    </div>
                  </div>

                </div>
                <div id="right-water-tube" className="relative ml-auto mr-0">
                  <div ref={ballRight} className="waterBall w-4 h-4 absolute border-2 rounded-full top-2/3"></div>
                  <div id="blueWaterH" className="w-full h-8 rounded-ss-md"></div>
                  <div id="blueWaterV" className="w-4 h-7 self-start rounded-br-2xl"></div>
                </div>
                <div id="right-amp-container" className="flex w-full relative -mt-3 -ml-1">
                  <div className=" -left-[4rem] top-1/4 flex w-16 flex-col">
                    <p className="font-bold text-center text-xs">AMP METER</p>
                    <svg viewBox="0 0 74 74" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <title>Amp Meter</title>
                      <circle cx="36" cy="36" r="34" stroke="#979797" strokeWidth="5" fill="none" />
                      <text x="52" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">30</text>
                        <text x="47" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">25</text>
                        <text x="31" y="15" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">15</text>
                        <text x="15" y="22" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">10</text>
                        <text x="7" y="34" fontFamily="Helvetica-Bold, Helvetica" fontSize="9" fontWeight="bold" fill="#000000">5</text>
                      <g id="needle" transform="translate(33, 20) rotate(-100 3.481 10.514)" fill="#FB0000">
                        <path id="amp-needle"  d="M7.902,1.381 L3.481,10.514 C3.093,11.454 2.409,12 1.657,12 C1.041,12 0.517,11.694 0.221,11.213 C-0.098,10.645 -0.075,9.946 0.312,9.356 L6.102,0.463 C6.398,0.026 6.991,-0.127 7.469,0.113 C7.948,0.354 8.130,0.900 7.902,1.381 Z" />
                      </g>
                      <path id="Line" d="M36,6 C43.962,6 51.479,9.079 56.969,14.857 C62.594,20.778 66.158,29.314 66.869,37 L5.143,37 C6.649,22.114 19.889,6 36,6 Z" fill="none" stroke="#979797" />
                      <text x="25" y="52" fontFamily="Helvetica-Bold, Helvetica" fontSize="10" fontWeight="bold" fill="#000000">AMP</text>
                    </svg>
                  </div>
                  <div id="border-line" className="flex w-3 items-center">
                      <span className="w-full border-solid border border-zinc-700"></span>
                    </div>
                  <div className="flex-1 relative">
                    <div className="w-6">
                      <img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/well-pump-fcdd787b.png"}/>
                    </div>
                    <img src={(waterAnimation === false) ? "https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Recycle-13284bc8.svg":"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/RecycleAnimation-ca1a8a11.svg"} className="absolute top-1/4 left-1"/>
                  </div>
                  <div className="w-1/4 m-auto"><img src={"https://www.aquasolutionsus.com/wp-content/uploads/2023/11/Angry-Woman-Profile-27961d49.png"} /></div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
