export default function Album({user}){
      const { username, name, email }= user;
      return(
            <div>
                  <h2>User Name: {username}</h2>
                  <h3>Name: {name} </h3>
                  <p>email: {email}</p>
            </div>
      )
}