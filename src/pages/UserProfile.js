import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {

    //used in the fetch to grab the data of get request
    const [user, setUser] = useState({});

    //params will equal the {id: `?`} of the link we click
    //this is bc on UserCard, we used {user.id} as our paramater
    const params = useParams()
    //grabs the id value, going to used for fetch
    const userId = params.id
    
    //udrseEffect to only run when userId changes, aka click new link 
    useEffect(() =>{
        //grabs url for the id of the link we click
        fetch(`http://localhost:4000/users/${userId}`)
        .then(r => r.json())
        .then(data => setUser(data))
        .catch(error => console.error(error))
      }, [userId])

      //if the fetch doesn't load in time, don't error out
      if(!user.name){
        return <h1>Loading...</h1>
      }
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* will display user name of the link we click */}
        <h1>{user.name}</h1>
      </main>
    </>
  );
};

export default UserProfile;