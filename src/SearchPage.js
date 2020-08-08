import React from 'react';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...        "
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
            />
            <VideoRow
                views="700K"
                subs="659K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to..."
                timestamp="4 days ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ"
            />
            <VideoRow
                views="1.2M"
                subs="659K"
                description="In this LIVE training, Sonny and Qazi will show you how to build a Facebook messenger..."
                timestamp="1 months ago"
                channel="Clever Programmer"
                title="🔴 Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"
                image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
            />
            <VideoRow
                views="2.2M"
                subs="659K"
                description="Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the..."
                timestamp="2 months ago"
                channel="Clever Programmer"
                title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
                image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
            />
            <VideoRow
                views="700K"
                subs="659K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to..."
                timestamp="4 days ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ"
            />
            <VideoRow
                views="1.2M"
                subs="659K"
                description="In this LIVE training, Sonny and Qazi will show you how to build a Facebook messenger..."
                timestamp="1 months ago"
                channel="Clever Programmer"
                title="🔴 Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"
                image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
            />
            <VideoRow
                views="2.2M"
                subs="659K"
                description="Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the..."
                timestamp="2 months ago"
                channel="Clever Programmer"
                title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
                image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one hour training... check this out"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
            />
            <VideoRow
                views="700K"
                subs="659K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to..."
                timestamp="4 days ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBhmjZZwsIJmDq23-rDBqfGMoiqIQ"
            />
            <VideoRow
                views="1.2M"
                subs="659K"
                description="In this LIVE training, Sonny and Qazi will show you how to build a Facebook messenger..."
                timestamp="1 months ago"
                channel="Clever Programmer"
                title="🔴 Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"
                image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
            />
            <VideoRow
                views="2.2M"
                subs="659K"
                description="Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the..."
                timestamp="2 months ago"
                channel="Clever Programmer"
                title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
                image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA"
            />    
        </div>
    )
}

export default SearchPage
