import React, {useState, useEffect} from "react";
import "./styles.scss"
import profileIcon from "../../assets/images/profileIcon.png"
import PopupTask from "../PopupTask";

const Header = ({listItems, onAddItem, setListArray, listArrayFirst, setListArrayFirst}) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState()

    useEffect(() => {
        let searchLocal = JSON.parse(localStorage.getItem('search'));
        if(searchLocal){
            setSearch(searchLocal)
            setListArray(listArrayFirst.filter((item) => {
                return item.name.toLowerCase().includes(searchLocal.toLowerCase())
            })); 
        }
        
      }, [])

    const handleChange= (e) => {
        setSearch(e)
        localStorage.setItem('search', JSON.stringify(e));
        setListArray(listArrayFirst.filter((item) => {
            return item.name.toLowerCase().includes(e.toLowerCase())
        }));
    };
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <div className="headerWrapper">
                <div className="searchBlock">
                    <div className="searchInput">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#BFBFBF"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z" fill="#BFBFBF"/>
                        </svg>
                    <input value={search} onChange={(e) => handleChange(e.target.value)} placeholder="Search task"/> 
                    </div>
                </div>
                <div className="addTaskBlock">
                    <div onClick={handleClickOpen} className="addButton">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V6C11 5.44772 11.4477 5 12 5Z" fill="#FF4669"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z" fill="#FF4669"/>
                        </svg>
                        <h1>ADD TASK</h1>
                    </div>
                    <div className="profileIcon">
                        <img src={profileIcon}/>
                    </div>
                </div>
            </div>
            <PopupTask 
            listArrayFirst={listArrayFirst}
            setListArrayFirst={setListArrayFirst} setListArray={setListArray} onAddItem={onAddItem} 
            listItems={listItems} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
        </>
       
    )
}

export default Header;
