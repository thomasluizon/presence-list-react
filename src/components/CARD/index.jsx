import './style.css';

export default function Card(props) {
   return (
      <div className="card">
         <strong>{props.user}</strong>
         <small>{props.time}</small>
      </div>
   );
}
