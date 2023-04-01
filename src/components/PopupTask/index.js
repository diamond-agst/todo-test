import React, {useState} from 'react';
import "./styles.scss";
import dayjs from 'dayjs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DialogTitle from '@mui/material/DialogTitle';

const PopupTask = ({open, handleClose, setListArray, setListArrayFirst, listArrayFirst}) => {
    const [valueDateStart, setValueDateStart] = useState()
    const [valueDateFinish, setValueDateFinish] = useState()
    const [valueTodo, setValueTodo] = useState()

    const onSubmit = () => {
        if(valueTodo){
            console.log(listArrayFirst)
        let list = [{
            id: listArrayFirst.length + 1,
            status: false,
            name: valueTodo,
            start: valueDateStart ? valueDateStart.slice(4,21) : "Jan 01 2023 00:00",
            finish: valueDateFinish ? valueDateFinish.slice(4,21) : "Jan 01 2023 00:00"
        }]
        setListArrayFirst(list.concat(listArrayFirst))
        localStorage.setItem('listArrayFirts', JSON.stringify(list.concat(listArrayFirst)));
        setListArray(list.concat(listArrayFirst))
        handleClose()
    }
}

    return(
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Task</DialogTitle>
                <DialogContent>
                    <div className="field">
                        <input onChange={(e) => setValueTodo(e.target.value)} placeholder=" " type="text" required autoComplete="off" id="name"/>
                        <label htmlFor="to-do" title="To Do" data-title="To Do"></label>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem components={['DatePicker']}>
                            <MultiInputDateTimeRangeField 
                            defaultValue={[dayjs('2023-01-01'), dayjs('2023-01-01')]}
                            onChange={(newValue) => {
                                setValueDateStart(newValue[0]["$d"].toString())
                                setValueDateFinish(newValue[1]["$d"].toString())
                            }} />
                        </DemoItem>
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className='cancelButton'>Cancel</button>
                    <button onClick={onSubmit} className='createButton'>Create</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PopupTask;