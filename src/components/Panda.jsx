import React, { Suspense } from 'react'
const LazyPanda = React.lazy(() => import('./panda_model/PandaViewer'))

const Panda = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex justify-center max-w-screen-lg mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <LazyPanda />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Panda
