import React from 'react'
import { Table,Container } from 'reactstrap';

export default function MouvChild() {
    return (
        <div>
            <h2>Liste mouvement(s) <span style={{color:'red'}}>à valider</span></h2>
           <Container>
           <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
           </Container>
        </div>
    )
}
