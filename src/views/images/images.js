


import React, { useEffect, useState } from "react"

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

const Images = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

return (
    <div>


     <CTable bordered borderColor="primary">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                {users.map(user => {
                  
               return <CTableBody key={user.id}> 
                  <CTableRow>
                    <CTableHeaderCell scope="row">{user.id}</CTableHeaderCell>
                    <CTableDataCell >{user.title}</CTableDataCell>
                    <img src={user.url}/>
                  </CTableRow>
                </CTableBody>
                    })}
                
              </CTable>
              

</div>
)

}

export default Images
