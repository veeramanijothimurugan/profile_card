const UserData = [
  {
    name: "Veeramani",
    city: "Aruppukottai",
    description: "Front-end Developer",
    skills: ["UI / UX","HTML","CSS","JavaScript","React Js"],
    online: true,
    profile: "images/pic1.jpg",
  },

  {
    name: "Veeramani",
    city: "Aruppukottai",
    description: "Front-end Developer",
    skills: ["UI / UX","HTML","CSS","JavaScript","React Js"],
    online: false,
    profile: "images/pic1.jpg",
  },

  {
    name: "Veeramani",
    city: "Aruppukottai",
    description: "Front-end Developer",
    skills: ["UI / UX","HTML","CSS","JavaScript","React Js"],
    online: true,
    profile: "images/pic1.jpg",
  },

];


function User(props){
  return(
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "Online" : "Offline"}</span>
      <img className="img" src={props.profile} alt="user"/>
      <h3>{props.name}</h3>
      <h4 style={{fontWeight: "normal"}}>{props.city}</h4>
      <p>{props.description}</p>
      <div className="btn">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}
        </ul>
      </div>
    </div>
  )
}

const profile_card = () => {
  return (
      <>
      {UserData.map((user,index)=>(
        <User name={user.name} city={user.city} description={user.description} skills={user.skills} online={user.online} profile={user.profile}/>
       ))}
      </>
  )
}

export default profile_card
