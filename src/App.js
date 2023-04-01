import React, {useState} from "react"
import Header from './components/Header';
import MainBlock from './components/MainBlock';

let listItems = [
  {
      id: 1,
      status: true,
      name: "Fix cnqiwcnwo",
      start: "Mar 3 2023 20:30",
      finish: "Mar 4 2023 12:00"
  },
  {
      id: 2,
      status: true,
      name: "Fibytnnynx bugs",
      start: "Mar 10 2023 20:30",
      finish: "Mar 13 2023 12:00"
  },{
      id: 3,
      status: false,
      name: "Fix ,;v,per,v[rel",
      start: "Mar 17 2023 20:30",
      finish: "Mar 18 2023 12:00"
  },
  {
      id: 4,
      status: true,
      name: "cwecw bugs",
      start: "Mar 17 2023 20:30",
      finish: "Mar 20 2023 12:00"
  },
  {
      id: 5,
      status: true,
      name: "Fix dwepdlewp",
      start: "Mar 23 2023 20:30",
      finish: "Mar 25 2023 12:00"
  },{
      id: 6,
      status: false,
      name: "vmeflvew bugs",
      start: "Mar 9 2023 20:30",
      finish: "Mar 12 2023 12:00"
  },
  {
      id: 7,
      status: true,
      name: "Fix edpekofvr",
      start: "Mar 18 2023 20:30",
      finish: "Mar 20 2023 12:00"
  },
  { 
      id: 8,
      status: true,
      name: "c,dlvm,lf,b bugs",
      start: "Mar 20 2023 20:30",
      finish: "Mar 23 2023 12:00"
  },{
      id: 9,
      status: false,
      name: "Fix .;wecpwel",
      start: "Mar 27 2023 20:30",
      finish: "Mar 28 2023 12:00"
  },
  {
      id: 10,
      status: true,
      name: "rertry bugs",
      start: "Mar 14 2023 20:30",
      finish: "Mar 17 2023 12:00"
  },
  {
      id: 11,
      status: true,
      name: "Fix cfrvjumlo",
      start: "Mar 4 2023 20:30",
      finish: "Mar 5 2023 12:00"
  },{
      id: 12,
      status: false,
      name: "nuymi,i bugs",
      start: "Mar 22 2023 20:30",
      finish: "Mar 25 2023 12:00"
  },
  {
      id: 13,
      status: true,
      name: "Fix miumi",
      start: "Mar 19 2023 20:30",
      finish: "Mar 23 2023 12:00"
  },
  {
      id: 14,
      status: true,
      name: "vreveve bugs",
      start: "Mar 20 2023 20:30",
      finish: "Mar 27 2023 12:00"
  },{
      id: 15,
      status: false,
      name: "Fix bhtnyt",
      start: "Mar 10 2023 20:30",
      finish: "Mar 12 2023 12:00"
  },
  {
      id: 16,
      status: true,
      name: "vgregferg bugs",
      start: "Mar 2 2023 20:30",
      finish: "Mar 3 2023 12:00"
  },
  {
      id: 17,
      status: true,
      name: "Fix ukiujnty",
      start: "Mar 7 2023 20:30",
      finish: "Mar 10 2023 12:00"
  },{
      id: 18,
      status: false,
      name: "ervevs bugs",
      start: "Mar 15 2023 20:30",
      finish: "Mar 17 2023 12:00"
  },
  {
      id: 19,
      status: true,
      name: "Fix bubgrbrgs",
      start: "Mar 20 2023 20:30",
      finish: "Mar 28 2023 12:00"
  },
  {
      id: 20,
      status: true,
      name: "vrever bugs",
      start: "Mar 1 2023 20:30",
      finish: "Mar 3 2023 12:00"
  },{
      id: 21,
      status: false,
      name: "Fix regre",
      start: "Mar 13 2023 20:30",
      finish: "Mar 14 2023 12:00"
  },
  {
      id: 22,
      status: true,
      name: "grebsew bugs",
      start: "Mar 23 2023 20:30",
      finish: "Mar 25 2023 12:00"
  },
  {
      id: 23,
      status: true,
      name: "Fix gvree",
      start: "Mar 1 2023 20:30",
      finish: "Mar 2 2023 12:00"
  },{
      id: 24,
      status: false,
      name: "vergvrec bugs",
      start: "Mar 14 2023 21:41",
      finish: "Mar 16 2023 12:00"
  },
]

function App() {
  const listLocal = JSON.parse(localStorage.getItem('listArrayFirts'))
  const [listArrayFirst, setListArrayFirst] = useState(listLocal ? listLocal : listItems);
  const [listArray, setListArray] = useState(listLocal ? listLocal : listItems);

  return (
    <div className="App">
      <Header listArrayFirst={listArrayFirst} setListArrayFirst={setListArrayFirst} listArray={listArray} listItems={listItems} setListArray={setListArray}/>
      <MainBlock listArrayFirst={listArrayFirst} setListArrayFirst={setListArrayFirst} listArray={listArray} setListArray={setListArray} listItems={listItems}/>
    </div>
  );
}

export default App;
