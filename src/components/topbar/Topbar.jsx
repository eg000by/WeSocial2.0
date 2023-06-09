import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            <Link className="link" to="/">
                <span className="logo">WeSocial</span>
            </Link>
                
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchInputIcon" />
                    <input placeholder="Search" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                {/* <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                </div> */}
                {/* <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div> */}
                    <img src="/assets/person/2.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}