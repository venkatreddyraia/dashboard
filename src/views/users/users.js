import axios from 'axios'
import React, { Component } from 'react'
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
export default class Users extends Component {
    state={
        usersData:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data);
            this.setState({usersData:res.data})
        }).catch((err)=>{console.log(err);})
    }
  render() {
    return (
      <div>
        <h1>users</h1>
        <CTable bordered borderColor="primary">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                {this.state.usersData.map((mapData,i)=>{
                  
               return <CTableBody key={{i}}> 
                  <CTableRow>
                    <CTableHeaderCell scope="row">{mapData.id}</CTableHeaderCell>
                    <CTableDataCell >{mapData.name}</CTableDataCell>
                    <CTableDataCell>{mapData.username}</CTableDataCell>
                  </CTableRow>
                </CTableBody>
                    })}
                
              </CTable>
      </div>
    )
  }
}