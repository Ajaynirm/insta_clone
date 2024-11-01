import React from 'react';
import PostElement from "./PostElement";
import test_pp_icon from "./photos/1.jpg";
import test_post_video
    from "./posts/beautiful-nature-view-status-video-with-song-natureshort-shorts-854-ytshorts.savetube.me.mp4";


function PostArea() {
    return (
        <div>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="6 min" username="Ajay" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="13 min" username="pratik" explanation="explanation..."/>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="10s" username="Ajay" explanation="explanation..."/>
            <PostElement media={test_pp_icon} likeCount="10" profilePicture={test_pp_icon} time="1 hr" username="Ajay" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="10 min" username="pratik" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="20 min" username="pratik" explanation="explanation..."/>
            <PostElement mediaType="video" media={test_post_video} likeCount="10" profilePicture={test_pp_icon} time="30 min" username="pratik" explanation="explanation..."/>

        </div>
    );
}

export default PostArea;