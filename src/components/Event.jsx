function Event(props) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.description}</p>

      <button onClick={props.onEdit}>Edit</button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
}

export default Event;