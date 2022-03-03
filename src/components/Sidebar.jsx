import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions';
import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{user}] = useStateValue();

    const [channels, setChennels] = useState([]);

    useEffect(() => {
        db.collection("room").onSnapshot((snapshot) => {
            console.log(snapshot);
            setChennels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().room,
                }))
            );
        });
    }, [])
    console.log("user>>>>", user);
    console.log(channels);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>@creative_programmer</h2>
                    <h3>
                        <FiberManualRecordIcon
                            className="sidebar__dotted"
                        />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon
                    className="sidebar__change"
                />

            </div>
            <SidebarOptions Icon={InsertCommentIcon} Title={"Threads"} />
            <SidebarOptions Icon={InboxIcon} Title={"Mentions & reactions"} />
            <SidebarOptions Icon={DraftsIcon} Title={"Saved Items"} />
            <SidebarOptions Icon={BookmarkIcon} Title={"Channel browser"} />
            <SidebarOptions Icon={PeopleAltIcon} Title={"People & user groups"} />
            <SidebarOptions Icon={AppsIcon} Title={"Apps"} />
            <SidebarOptions Icon={FileCopyIcon} Title={"File Browser"} />
            <SidebarOptions Icon={ExpandLessIcon} Title={"Show less"} />
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} Title={"Channels"} />
            <hr />
            <SidebarOptions Icon={AddIcon} addChannelOption Title={"Add Channel"} />

            <div className="sidebar__scroll">
                {channels.map((channel, index) => (
                    <SidebarOptions Title={channel.name} id={channel.id} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar