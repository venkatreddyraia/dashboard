import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          DTM
        </a>
        <span className="ms-1">&copy; 2022 Dashboard.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
         DTM Admin &amp; Dashboard 
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
