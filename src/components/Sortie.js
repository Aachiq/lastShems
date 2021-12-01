import {React,useState,useEffect} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './Transtyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatelliteDish, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import MouvChild from './MouvChild'
import axios from 'axios'
import Moment from 'react-moment';

// import './Sortie.css'
export default function Sortie() {
  const [chantiers,setChantiers]=useState([]);
  const [articles,setArticles]=useState([]);
  const [types,setTypes]=useState([]);
  // const [user,setUser] = useState('B.AITALI');
  const [stockqnt,setStockqnt]=useState(0);
  const [unit,setUnit]=useState("");
  const iduser = 3;
  let dt = new Date();

  const [mouvement,setMouvement]=useState({
    chantier:"",
    article:"",
    type:"",
    chantierTo:"",
    quantite:0,
    date_mouve:"",
    date_saisie:"",
    commentaire:""
  })
  const [mouvDis,setMouvDis]=useState({
    chantier:"",
    article:"",
    type:"",
    chantierTo:"",
    quantite:0,
    date_mouve:"",
    date_saisie:"",
    commentaire:""
  })
  useEffect(()=>{
   fetch("http://localhost:8000/getchant/?user="+iduser)
    .then(x => x.json())
    .then(y => setChantiers(y.chant));
    fetch("http://localhost:8000/gettypes")
    .then(x => x.json())
    .then(y => setTypes(y.types))
   },[])

   const handleChantier = (event)=>{
    const value = event.target.value;
    setMouvement({...mouvement,chantier:value});
    // const nom = event.target.name;
    // setMouvDis({...mouvDis,chantier:nom});
    // console.log(nom)
    fetch("http://localhost:8000/getart/?chantier="+value)
    .then(x => x.json())
    .then(y => setArticles(y.art))
   }
   const handleArticle = (event)=>{
    const value = event.target.value;
    const nom = event.target.name;
    setMouvement({...mouvement,article:value});
    setMouvDis({...mouvDis,article:nom})
    fetch("http://localhost:8000/getstock/?article="+value+"&chantier="+mouvement.chantier)
    .then(x => x.json())
    .then(y => setStockqnt(y.stock[0].quantite))
    fetch("http://localhost:8000/getunit/?article="+value)
    .then(x => x.json())
    .then(y => setUnit(y.unit[0].nom))
   }

   const handleType = (event)=>{
    const value = event.target.value
    setMouvement({...mouvement,type:value});
   }

   const handleChantierTo = (event)=>{
    const value = event.target.value
    setMouvement({...mouvement,chantierTo:value});
    const nom = event.target.name
    setMouvDis({...mouvDis,chantierTo:nom})
   }

   const handleQuantite = (event)=>{
    const value = event.target.value
    setMouvement({...mouvement,quantite:value});
   }
   const handleDateMouv = (event)=>{
    //const value = event.target.value
    setMouvement({...mouvement,date_mouve: new Date()});
   }
   const handleDateSaisie = (event)=>{
    const value = event.target.value
    setMouvement({...mouvement,date_saisie:value});
   }
   const handleCommentaire = (event)=>{
    const value = event.target.value
    setMouvement({...mouvement,commentaire:value});
   }
   const handleSubmit=(event)=>{
    event.preventDefault();
    const mv = {
      chantier:"",
      article:"",
      type:"",
      chantierTo:"",
      quantite:0,
      date_mouve:"",
      date_saisie:"",
      commentaire:""
    }
     axios.post("http://localhost:8000/handlemouve",mouvement)
     .then(()=>console.log("yes"))
     .catch((err)=>console.log(err))
   }
     return (
        <div>
          {/* {JSON.stringify(mouvement) +'||' + JSON.stringify(articles) }  */}
         <h2 className="text text-center"><strong><FontAwesomeIcon className="icon" icon={faSignOutAlt} /> Sortie Magasin</strong></h2>
          <Container>
          <Form style={{marginTop:30}} onSubmit={handleSubmit}>
          <FormGroup row className="justify-content-center">
          {/* <Col sm={2}>
          </Col> */}
          <Label for="chant" sm={2}><b> Chantier</b></Label>
          <Col sm={5}>
          <Input type="select" onChange={handleChantier} name="chantier" id="chant" >
          <option selected disabled>Choisissez Chantier</option>
           { 
             chantiers && chantiers.map((chant,index)=>(
              <option key={index} value={chant.id} name={chant.nom_chant}>{chant.nom_chant}</option>
             ))
           }           
          </Input>
          </Col>
          {/* <Col sm={2}></Col> */}
        </FormGroup>
        <FormGroup row className="justify-content-center">
        {/* <Col sm={3}></Col> */}
          <Label for="article" sm={2}><b> Article</b></Label>
          <Col sm={5}>
          <Input type="select" onChange={handleArticle} name="article" id="article">
          <option selected disabled>Choisissez Article</option>
          { 
             articles && articles.map((art,i)=>(
              <option key={i} value={art.id} name={art.nom_ar}>{art.nom_ar}</option>
             ))
           }    
           </Input>
          </Col>
          {/* <Col sm={3}></Col> */}
        </FormGroup>
        <FormGroup row className="justify-content-center">
         {/* <Col sm={3}></Col> */}
          <Label for="type" sm={2}><b> Type</b></Label>
          <Col sm={5}>
          <Input type="select" onChange={handleType} name="type" id="type">
          <option selected disabled>Type mouvement</option>
          { 
             types && types.map((type,i)=>(
              <option key={i}>{type.nom_type}</option>
             ))
           }    
          </Input>
          </Col>
          {/* <Col sm={3}></Col> */}
        </FormGroup>

        { mouvement.type == "transfert" &&
          <div> 
          {/* <FormGroup row className="justify-content-center">
          <Col sm={2}></Col> 
          <Label for="chantF" sm={2}><b> de chantier </b></Label>
          <Col sm={5}>
          <Input type="select" onChange={handleChange} name="chantierFrom" id="chantF">
          { 
             chantiers && chantiers.map((chant,ind)=>(
              <option key={ind}>{chant.nom_chant}</option>
             ))
           }       
          </Input>
          </Col>
          <Col sm={2}></Col> 
        </FormGroup> */}
        <FormGroup row className="justify-content-center">
          <Label for="chantT" sm={2}><b> au chantier </b></Label>
          <Col sm={5}>
          <Input type="select" onChange={handleChantierTo} name="chantierTo" id="chantT">
          { 
             chantiers && chantiers.map((chant,ind)=>(
              <option key={ind} value={chant.id} name={chant.nom_chant}>{chant.nom_chant}</option>
             ))
           }       
          </Input>
          </Col>
          {/* <Col sm={3}></Col> */}

        </FormGroup>
        </div>
        }
      
        <FormGroup row className="justify-content-center">
        {/* <Col sm={3}></Col> */}
          <Label for="quantite" sm={2}><b> Quantite</b> </Label>
          <Col sm={5}>
          <Input type="number" style={{width:'30%',display:'inline-block'}} onChange={handleQuantite} name="quantite" id="quantite" max={stockqnt}/> <b style={{display:'inline-block',margin:5}}>{mouvement.article &&('/'+stockqnt +' '+ unit)}</b>
          </Col>
        </FormGroup>
        <FormGroup row className="justify-content-center">
        {/* <Col sm={3}></Col> */}
          <Label for="date" sm={2}><b> Date Opération </b></Label> 
          <Col sm={5}>
          {
           <Input type="text" value={(dt.getDate())+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear()} onChange={handleDateMouv} name="date" id="date"/>}
          {/* <Moment format="DD/MM/YYYY" style={{margin:10}}>
                {new Date()}
            </Moment> */}
          </Col>
          {/* <Col sm={3}></Col> */}

        </FormGroup>
        <FormGroup row className="justify-content-center">
        {/* <Col sm={3}></Col> */}
          <Label for="date" sm={2}><b> Date Saisie</b></Label>
          <Col sm={5}>
          <Input type="date" onChange={handleDateSaisie} name="date" id="date"/>
          </Col>
          {/* <Col sm={3}></Col> */}

        </FormGroup>
        <FormGroup row className="justify-content-center">
        {/* <Col sm={3}></Col> */}
          <Label for="commentaire" sm={2}><b> Commentaire</b> </Label>
          <Col sm={5}>
          <Input type="textarea" onChange={handleCommentaire} name="commentaire" id="commentaire"/>
          </Col>
          {/* <Col sm={3}></Col> */}

        </FormGroup>
        <div className="text-center">
        <Button color="warning" className="btn btn-md mx-auto">Ajouter</Button> 
        </div>
        </Form>
          </Container>
          {/* {JSON.stringify(mouvDis)} */}
           {/* <MouvChild/> */}
        </div>

    );
  }
 