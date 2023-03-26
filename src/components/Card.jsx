import '../styles/Card.css'
export default function Card({user}){
    return(
        <div className="card">
            <p>Name: {user.name}</p>
            <p>Job: {user.job}</p>
            <p>Hobby: {user.hobby}</p>
        </div>
    )
}
