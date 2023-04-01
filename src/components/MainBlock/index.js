import React, {useEffect, useState} from "react";
import "./styles.scss";
import Table from "../Table";
import ReactPaginate from 'react-paginate';

const MainBlock = ({
        listItems, 
        listArray, 
        setListArray, 
        listArrayFirst, 
        setListArrayFirst
    }) => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [itemOffset, setItemOffset] = useState(0);
    const [showPerPage, setShowPerPage] = useState(false);
    const [valueTitle, setValueTitle] = useState("Julia's List")
    const [sortStart, setSortStart] = useState(false);
    const [sortFinish, setSortFinish] = useState(false);
    const endOffset = itemOffset + itemsPerPage;
    let currentItems = listArray.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(listArray.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % listArray.length;
      setItemOffset(newOffset);
    };

    const onAddItem = () => {
        setListArray(listItems)
        currentItems = listArray.slice(itemOffset, endOffset)
    }

    useEffect(() => {
        let startLocal = localStorage.getItem('sortStart');
        let finishLocal = localStorage.getItem('sortFinish');
        if(listArrayFirst){
            if(startLocal){
                if(JSON.parse(startLocal)){
                    setListArray(listArrayFirst.sort((date1, date2) => new Date(date1.start) - new Date(date2.start)))
                    setSortStart(false)
                }else{
                    setListArray(listArrayFirst.sort((date1, date2) => new Date(date2.start) - new Date(date1.start)))
                    setSortStart(true) 
                }
            }else if(finishLocal){
                if(JSON.parse(finishLocal)){
                    setListArray(listArrayFirst.sort((date1, date2) => new Date(date1.finish) - new Date(date2.finish)))
                    setSortFinish(false)
                }else{
                    setListArray(listArrayFirst.sort((date1, date2) => new Date(date2.finish) - new Date(date1.finish)))
                    setSortFinish(true)
                }
            }
        }
       
    }, [])

    const sortStartData = () => {
        if(sortStart){
           setListArray(listArrayFirst.sort((date1, date2) => new Date(date1.start) - new Date(date2.start)))
           localStorage.setItem('sortStart', JSON.stringify(sortStart));
           localStorage.removeItem('sortFinish');
           setSortStart(false)
        }else{
          setListArray(listArrayFirst.sort((date1, date2) => new Date(date2.start) - new Date(date1.start)))
          localStorage.setItem('sortStart', JSON.stringify(sortStart));
          localStorage.removeItem('sortFinish');
          setSortStart(true)  
        }
    }

    const sortFinishData = () => {
        if(sortFinish){
           setListArray(listArrayFirst.sort((date1, date2) => new Date(date1.finish) - new Date(date2.finish)))
           localStorage.setItem('sortFinish', JSON.stringify(sortFinish));
           localStorage.removeItem('sortStart');
           setSortFinish(false)
        }else{
            setListArray(listArrayFirst.sort((date1, date2) => new Date(date2.finish) - new Date(date1.finish)))
            localStorage.setItem('sortFinish', JSON.stringify(sortFinish));
            localStorage.removeItem('sortStart');
            setSortFinish(true)
        }
    }

    return(
        <div className="mainBlock">
            <div className="mainWrapper">
                <div className="headingMainBlock">
                    <div className="titleMainBlock">
                        <input placeholder="Name of list" onChange={(e) => setValueTitle(e.target.value)} value={valueTitle}/>
                    </div>
                </div>  
                <Table 
                    listItems={currentItems}
                    sortFinishData={sortFinishData}
                    sortStartData={sortStartData}
                    sortStart={sortStart}
                    sortFinish={sortFinish}
                    onAddItem={onAddItem}
                    listArray={listArray}
                    setListArray={setListArray}
                    listItem={listItems}
                    setListArrayFirst={setListArrayFirst}
                    listArrayFirst={listArrayFirst} />
      
                <div className="paginationBlock">
                    <div className="showItem">
                        <p>Showing :</p>
                        <div className="showCount" onClick={() => setShowPerPage(true)}>
                           <p className="showText">{itemsPerPage} Tasks</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                            </svg> 
                        </div>
                        
                        {showPerPage && <div className="selectPerPage">
                            <div className="perPageBlock" onClick={() => setShowPerPage(false)}>
                                <p className="showText">{itemsPerPage} Tasks</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                                </svg> 
                            </div>
                            {itemsPerPage !== 5 &&<p
                            onClick={() => {
                                setShowPerPage(false);
                                setItemsPerPage(5)
                            }} 
                            className="showText">5 Tasks</p>}
                            {itemsPerPage !== 10 &&<p 
                            onClick={() => {
                                setShowPerPage(false);
                                setItemsPerPage(10)
                            }}
                            className="showText">10 Tasks</p>}
                            {itemsPerPage !== 15 &&<p 
                            onClick={() => {
                                setShowPerPage(false);
                                setItemsPerPage(15)
                            }}
                            className="showText">15 Tasks</p>}
                        </div>}
                    </div>
                    <div className="paginationItem">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="&#8250;"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="&#8249;"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                    <div className="totalItem">
                        <p>Total tasks : <span className="totalCount">{listArray.length}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;
