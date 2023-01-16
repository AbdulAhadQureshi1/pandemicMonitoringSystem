import React, {lazy, Suspense} from 'react'
import '../App.css'
import useElementOnScreen from '../components/ObserverHook'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import DailyStats from '../components/DailyStats'
import OverallStats from '../components/OverallStats'
// import Map from '../components/Gmaps'
import Footer from '../components/Footer'

const Map = lazy(()=>import('../components/Gmaps'));

export default function Home() {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.75
    })

  return (
    <>
        <Content></Content>
        <DailyStats></DailyStats>
        <OverallStats></OverallStats>
        <Suspense fallback={<div>Loading Map</div>}>
          <Map></Map>
        </Suspense>
    </>
  )
}
