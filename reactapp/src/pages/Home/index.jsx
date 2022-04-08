import React, { useState } from 'react';
import './style.css';
import Card from '../../components/CARD';

export default function Home() {
   const [studentName, setStudentName] = useState();

   return (
      <div className="container">
         <h1>Nome: {studentName}</h1>
         <input
            onChange={e => setStudentName(e.target.value)}
            type="text"
            placeholder="Digite o nome"
         />
         <button type="button">Adicionar</button>
         <Card user="Thomas" time="10:55:25" />
         <Card user="João" time="11:00:10" />
      </div>
   );
}
