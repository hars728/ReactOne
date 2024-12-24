import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("parent comonent const");
    }

    async componentDidMount() {
        // console.log("parent component did mount");

    }


    render() {
        // console.log("parent render");
        return (
            <div className="about">
                <h1 className="about__title">About the web </h1>


                {/* <User name={"Harsh kumar Gupta"} location={"Hazaribag"} /> */}
                <UserClass name={"Harsh kumar "} location={"Hazaribagh"} />
            </div>
        );
    }
}
export default About;