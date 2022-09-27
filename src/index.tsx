import React, { useCallback, useRef, useState } from 'react'
import Button from '@mui/material/Button'

import { Tldraw, TldrawApp, TDShapeType } from '@tldraw/tldraw'
import './index.css'


export default function App() {
  const rTldrawApp = React.useRef<TldrawApp>()
  const pullData = useCallback(() => fetch('api/hello')
    .then(response => response.json())
    .then((data) => {
      console.error(JSON.parse(localStorage.getItem("shapes")!))
      rTldrawApp.current?.createShapes(JSON.parse(localStorage.getItem("shapes")!))
    }).catch(() => {
      // setPage("server error!")
    })
    , [])


  const commitData = () => {
    console.error(rTldrawApp.current?.page.shapes)
  }


  const pushData = () => {
    console.error(rTldrawApp.current?.page.shapes)
    localStorage.setItem("shapes", JSON.stringify(rTldrawApp.current?.page.shapes))
  }


  const handleMount = React.useCallback((app: TldrawApp) => {
    rTldrawApp.current = app
    app.createShapes([JSON.parse(localStorage.getItem("shapes")!)])
  }, [])

  return <div className="h-full">
    <div className="fixed z-10 bg-light-200 top-1/2 flex flex-col ">
      <Button size="small" onClick={pullData} variant="outlined"> Pull</Button>
      <Button size="small" onClick={commitData} variant="outlined"> Commit</Button>
      <Button size="small" onClick={pushData} variant="outlined"> Push</Button>
    </div>

    <div className="tldraw">
      <Tldraw onMount={handleMount} />
    </div>


    <div className="fixed  bottom-2">
      <a href="https://beian.miit.gov.cn">京ICP备2022027961号-1</a>
    </div>
  </div>

}
