import './style.css';

export default function Card(props) {
   function handleNameChange(name) {
      console.log(name);
   }

   return (
      <div className="card">
         <strong>{props.user}</strong>
         <small>{props.time}</small>
      </div>
   );
}
