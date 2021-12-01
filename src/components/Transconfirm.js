import React from 'react'

export default function Transconfirm() {
    return (
        <div>
         <h1 className="text text-center"><strong><FontAwesomeIcon className="icon" icon={faSignOutAlt} /> Confirmer Transfert</strong></h1>
         <Container>
          <Form style={{marginTop:30}}>
          <FormGroup row>
          <Label for="chant" sm={2}><b> Chantier</b></Label>
          <Col sm={10}>
          <Input type="select" name="chantier" id="chant">
           { 
             chantiers && chantiers.map((chant,ind)=>(
              <option key={ind}>{chant.nom}</option>
             ))
           }           
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="art" sm={2}><b> Article</b></Label>
          <Col sm={10}>
          <Input type="select" name="article" id="art">
          { 
             articles && articles.map((art,i)=>(
              <option key={i}>{art.nom}</option>
             ))
           }    
           </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="type" sm={2}><b> Type</b></Label>
          <Col sm={10}>
          <Input type="select" name="type" id="type">
            <option>Transit</option>
            <option>Principal</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="qnt" sm={2}><b> Quantite</b> </Label>
          <Col sm={10}>
          <Input type="number" name="quantite" id="qnt"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="dt" sm={2}><b> Date</b></Label>
          <Col sm={10}>
          <Input type="date" name="date" id="dt"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="com" sm={2}><b> Commentaire</b> </Label>
          <Col sm={10}>
          <Input type="textarea" name="comment" id="com"/>
          </Col>
        </FormGroup>
        <div className="text-center">
        <Button color="warning" className="btn btn-lg mx-auto">valider</Button> 
        </div>
        </Form>
          </Container>
        </div>
    )
}
