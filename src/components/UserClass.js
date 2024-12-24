import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 1,
            userInfo: {
                name: "dummb",
                location: "dumbo"
            }
        };

        // console.log("child comonent const");

    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/hars728");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        // console.log("child component did mount");
    }

    render() {

        // console.log("child render");

        const { name, location, avatar_url } = this.state.userInfo;
        const { count, count1 } = this.state;
        return (
            <div className="user-card">

                <h1>Count :{count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                        count1: count1 + 1
                    })
                }}
                >
                    Inc count
                </button>
                <h1>Count1 :{count1}</h1>

                <img src={avatar_url} />
                <h1>Name :{name}</h1>
                <h1>Location:{location}</h1>
                <h1>Contact: 1212</h1>
            </div>
        )
    }
}
export default UserClass;