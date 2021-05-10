import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/gf.jpg";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile" />
                    <div className={"Card-details"}>
                        <h3>Musah Ibrahim Ali</h3>
                        <p>Full Stack Developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>An Electrical / Electronics Engineering Student at Kwame Nkrumah University of Science and Technology.</p>
                    <p>Graduating in 2022 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>And a blogger.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://web.facebook.com/musah.ibrahim.3958"} title={"musah.ibrahim.3958"}>
                            <Facebook />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/musahibrahimali"} title={"Musahibrahimali"}>
                            <Twitter />
                        </IconButton>
                        <IconButton target={"_blank"} href={"linkedin.com/in/musah-ibrahim-ali-820600ab"} title={"musahibrahimali"}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/musahibrahimali/"} title={"musahibrahimali"}>
                            <Instagram />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;