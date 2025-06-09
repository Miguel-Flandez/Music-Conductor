import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const music = new Audio('audio/music.m4a')
  // const volumeRef = useRef(null)

  const conduct = () =>{
    music.play()
    // if(volumeRef.current<1){
    //   volumeRef.current = volumeRef.current+0.2
    //   music.volume = volumeRef.current
    // }
    
  }


  useEffect(()=>{
    music.play()
    // volumeRef.current = 1
    // music.volume = volumeRef.current;
    

  setInterval(()=>{
    music.pause()
    // if(volumeRef.current){
    //   volumeRef.current = volumeRef.current-0.1
    //   music.volume = volumeRef.current
    // }else{
    //   return
    // }
  },500)


  }, [])

  return (
  <div onMouseMove={conduct} className="h-screen" >
    
  </div>
  )
}

export default App
