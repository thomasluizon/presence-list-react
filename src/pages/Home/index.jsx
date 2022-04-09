import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../components/CARD';

export default function Home() {
   const [studentName, setStudentName] = useState();
   const [students, setStudents] = useState([]);
   const [user, setUser] = useState({ name: '', avater: '' });

   const addStudent = () => {
      const student = {
         name: studentName,
         time: new Date().toLocaleTimeString('pt-br', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
         }),
      };
      setStudents(prevState => [...prevState, student]);
   };

   useEffect(() => {
      fetch('https://api.github.com/users/thomasluizon')
         .then(response => response.json())
         .then(data => {
            setUser({
               name: data.name,
               avatar: data.avatar_url,
            });
         });
   }, []);

   return (
      <div className="container">
         <header>
            <h1>Lista de presença</h1>
            <div>
               <strong>{user.name}</strong>
               <img src={user.avatar} alt="Foto de perfil" />
            </div>
         </header>
         <input
            onChange={e => setStudentName(e.target.value)}
            type="text"
            placeholder="Digite o nome"
         />
         <button onClick={addStudent} type="button">
            Adicionar
         </button>
         {students.map(student => (
            <Card key={student.time} user={student.name} time={student.time} />
         ))}
      </div>
   );
}
