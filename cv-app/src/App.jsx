import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import './App.css'
import EduForm from './EducationForm'
import Button from './components/Button'
function App() {  
  const [person, setPerson]= useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        
    })
  const [prevPerson, setPrevPerson]=useState({...person});
  
  const [eduItem,setEduItem]=useState({
    startDate:'2025-09-01',
    endDate:'2025-06-29',
    schoolName: '',
    courseName: '',
    id: crypto.randomUUID()  
  });
  const [education, setEducation]=useState([]) ; 
  function getInfo(e){
    e.preventDefault()
    setPrevPerson({...person})
        
  }
  function addEdu(e) {
    e.preventDefault()

    setEducation(education => {
    const index = education.findIndex(item => item.id === eduItem.id);
    if (index !== -1) {
      // Replace existing item
      const updated = [...education];
      updated[index] = eduItem;
      return updated;
    } else {
      // Append new item
      return [...education, eduItem];
    }
  });

    setEduItem({
      startDate:'2025-09-01',
      endDate:'2025-06-29',
      schoolName: '',
      courseName: '',
      id: crypto.randomUUID()      
    });

  }
  
  function editEdu(e){
    console.log(e.target.className)
    setEduItem(education.find((item)=>item.id===e.target.className))
  }
  function delEdu(e){
    setEducation(education.filter((item)=>item.id != e.target.className))
    
  }
  const eduItems= education.map((item)=>{
  return  <article key={item.schoolName+item.courseName}>
      <h3>{item.schoolName}</h3>
      <h4>{item.courseName} {item.startDate} - {item.endDate}</h4>
      <Button  className={item.id} onClick={editEdu}>Edit</Button>
      <Button  className={item.id} onClick={delEdu}>Delete</Button>
    </article>
  });
  return (
    <>
      <div>
        <GeneralInfo person={person} setPerson={setPerson} send={getInfo}/>
        <div>
          <EduForm info={eduItem} setInfo={setEduItem} addItem={addEdu}/>
          <div>{eduItems}</div>
        </div>
      </div>
      <div>
        <h1>Cirruculum Vitae</h1>
        <section>
          <p>{prevPerson.firstName} {prevPerson.lastName}</p>
          <p>{prevPerson.email}</p><p>{prevPerson.phone}</p>
          
        </section>
        <section>
          
        </section>
      </div>
    </>
  )
}

export default App
