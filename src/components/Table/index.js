import React from "react";
import "./styles.scss"

const Table = ({
        listItems, 
        sortFinishData, 
        sortStartData, 
        sortStart, 
        sortFinish, 
        listArray, 
        setListArray, 
        listArrayFirst, 
        setListArrayFirst
    }) => {
    const handleOnChange = (id, status) => {
        const newState = listArrayFirst.map(obj => {
            if (obj.id === id) {
              return {...obj, status: !status};
            }
            return obj;
          });
      
          setListArray(newState);
          localStorage.setItem('listArrayFirts', JSON.stringify(newState));
    }

    const updateState = (index) => (e) => {
        const newArray = listArrayFirst.map((item) => {
          if (index === item.id) {
            return { ...item, ["name"]: e.target.value };
          } else {
            return item;
          }
        });
        setListArray(newArray);
        setListArrayFirst(newArray)
        localStorage.setItem('listArrayFirts', JSON.stringify(newArray));
      };

    const handleCick = (id) => {
        setListArray(listArray.filter((item) => item.id !== id));
        localStorage.setItem('listArrayFirts', JSON.stringify(listArray.filter((item) => item.id !== id)));
      };

    return(
        <div className="tableBlock">
            <table>
                <thead>
                    <tr>
                        <th align="left">
                            <div>
                                <h1>Status</h1>
                            </div>
                        </th>
                        <th align="left">
                            <div>
                                <h1>To do</h1>
                            </div>
                        </th>
                        <th align="left">
                            <div onClick={sortStartData} style={{cursor: "pointer"}}>
                                <h1>Start</h1>
                                <svg style={sortStart ? {transform: "rotate(180deg)"} : null} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                                </svg>
                            </div>
                        </th>
                        <th align="left">
                            <div onClick={sortFinishData} style={{cursor: "pointer"}}>
                                <h1>Finish</h1>
                                <svg style={sortFinish ? {transform: "rotate(180deg)"} : null} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                                </svg>
                            </div>
                        </th>
                        <th align="left">
                            <div>
                                <h1>Action</h1>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listItems.map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>
                                    <input 
                                    checked={item.status} 
                                    type="checkbox" 
                                    onChange={(e) => handleOnChange(item.id, item.status, e)} />
                                </td>
                                <td>
                                    <input 
                                    className="inputName"
                                    value={item.name} 
                                    name="name"
                                    onChange={updateState(item.id)}/>
                                </td>
                                <td>
                                    <p>{item.start}</p>
                                </td>
                                <td>
                                    <p>{item.finish}</p>
                                </td>
                                <td>
                                    <div>
                                        <button onClick={() => handleCick(item.id)}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 7C6.55228 7 7 7.44772 7 8V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V8C5 7.44772 5.44772 7 6 7Z" fill="#B4B4B4"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 8C10.5523 8 11 8.44772 11 9V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V9C9 8.44772 9.44772 8 10 8Z" fill="#B4B4B4"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14 8C14.5523 8 15 8.44772 15 9V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V9C13 8.44772 13.4477 8 14 8Z" fill="#B4B4B4"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5Z" fill="#B4B4B4"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H9C8.44772 4 8 3.55228 8 3Z" fill="#B4B4B4"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
