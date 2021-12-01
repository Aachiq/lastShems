import {React,useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Fiche from './Fiche'
export default function Mytest(props) {
    const [mymodal,setMymodal] = useState(false)
    const toggle = ()=>{
        setMymodal(!mymodal)
    }    
   return (
      <div>
        <Button color="danger" onClick={toggle}>Tester Modal</Button>
        <Modal isOpen={mymodal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Fiche/>
           </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }


