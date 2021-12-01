import React from 'react'

export default function Fiche({data}) {
    return (
        <div>
            <h1>Fiche data</h1>
             {
                 data && 
                 <ul>
                     <li>{data.chantierfrom}</li>
                     <li>{data.chantierto}</li>
                     <li>{data.article}</li>
                     <li>{data.quantite}</li>
                     <li>{data.date}</li>
                     <li>{data.commentaire}</li>
                 </ul>
             }
        </div>
    )
}
