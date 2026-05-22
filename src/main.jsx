import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Calendar from './pages/Calendar'
import Analytics from './pages/Analytics'
import Team from './pages/Team'
import Settings from './pages/Settings'
import Help from './pages/Help'

const clientRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "tasks",
        element: <Tasks />
      },
      {
        path: "calendar",
        element: <Calendar />
      },
      {
        path: "analytics",
        element: <Analytics />
      },
      {
        path: "team",
        element: <Team />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "help",
        element: <Help />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={clientRouter} />
  </StrictMode>,
)
