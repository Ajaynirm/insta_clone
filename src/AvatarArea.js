import React from 'react';
import test_pp_icon from "./photos/1.jpg";

function AvatarArea() {
    return (
        <div>
            <div className="avatar-area-main-box">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">mr_love_hater</div>
                    <div style={{color: "#8e8e8e"}}>Ajay pratik</div>
                </div>
                <div className="profile-switch-and-follow-button">Switch</div>
            </div>
            <div style={{margin: "12px 0 12px", display: "flex"}}>
                <div style={{color: "#8e8e8e"}}>Suggestions for you</div>
                <div style={{marginLeft: "120px"}}>See All</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">the_future_king</div>
                    <div style={{color: "#8e8e8e"}}>king</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">the_present_king</div>
                    <div style={{color: "#8e8e8e"}}>king</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small"  alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">the_yesturday_king</div>
                    <div style={{color: "#8e8e8e"}}>monk</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">the_past_joker</div>
                    <div style={{color: "#8e8e8e"}}>joker</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="avatar-area-suggestions">
                <img className="profile_photo_small" src={test_pp_icon} alt="logo"/>
                <div className="avatar-name">
                    <div id="linked-username">the_futuer_joker</div>
                    <div style={{color: "#8e8e8e"}}>jokerr</div>
                </div>
                <div className="profile-switch-and-follow-button">Follow</div>
            </div>
            <div className="all-gray">
                <div className="basic-link-help" style={{marginTop: "30px"}}>
                    <div><a href="frontend/src#">About</a></div>
                    <div>Help</div>
                    <div>Press</div>
                    <div>API</div>
                    <div>Jobs</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>Locations</div>
                    <div>Language</div>
                </div>
                <div style={{marginTop: "30px"}}>© 2025 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
}

export default AvatarArea;