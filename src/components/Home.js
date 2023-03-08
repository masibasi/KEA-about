import React from "react";

export default function Home() {
    return (
        <div className="home_wrapper">
            <div className="catch_phrase">
                <div className="catch_phrase_1">We provide</div>
                <div>"Advanced Coding, Cloud Engineering,</div>
                <div>and Lifelong Execution with Reliability"</div>
            </div>
            <img
                className="main_img"
                src={require("../assets/acceler_bg.jpg")}
                alt=""
            />
        </div>
    );
}
