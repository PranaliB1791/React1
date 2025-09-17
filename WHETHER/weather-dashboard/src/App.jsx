import React, { Suspense } from 'react'

const TodayApp = React.lazy(() => import('weatherToday/TodayApp'))
const ForecastApp = React.lazy(() => import('weatherForecast/ForecastApp'))

export default function App() {
  return (
    <div>
      <h1>🌤 Weather Dashboard (Host)</h1>
      <Suspense fallback={<p>Loading today's weather...</p>}>
        <TodayApp />
      </Suspense>
      <Suspense fallback={<p>Loading forecast...</p>}>
        <ForecastApp />
      </Suspense>
    </div>
  )
}
