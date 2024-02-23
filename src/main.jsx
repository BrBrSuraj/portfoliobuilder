
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import AllRouter from './router/AllRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={AllRouter} />
)
