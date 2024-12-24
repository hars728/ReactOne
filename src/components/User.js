import { useState } from "react";



const User = (props) => {
    const [count] = useState(0);
    const [count1] = useState(1);
    return (
        <div className="user-card">

            <h1>Count :{count}</h1>
            <h1>Count1 :{count1}</h1>
            <h1>Name :{props.name}</h1>
            <h1>Location:{props.location}</h1>
            <h1>Contact: 1212</h1>
        </div>
    )
}
export default User;