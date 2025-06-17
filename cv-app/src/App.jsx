import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import './App.css'
import EduForm from './EducationForm'
import Button from './components/Button'
import ExpForm from './ExpForm'
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
  const [education, setEducation]=useState([]);
  const [expItem,setExpItem]=useState({
    startDate:'2025-09-01',
    endDate:'2025-06-29',
    company: '',
    jobTitle: '',
    description: '',
    id: crypto.randomUUID()  
  });
  const [experience, setExperience]=useState([]); 
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
    setEduItem(education.find((item)=>item.id===e.target.className))
  }
  function delEdu(e){
    setEducation(education.filter((item)=>item.id != e.target.className))   
  }
  
  function addExp(e){
    e.preventDefault()

    setExperience(experience => {
    const index = experience.findIndex(item => item.id === expItem.id);
    if (index !== -1) {
      // Replace existing item
      const updated = [...experience];
      updated[index] = expItem;
      return updated;
    } else {
      // Append new item
      return [...experience, expItem];
    }
  });

    setExpItem({
      startDate:'2025-09-01',
      endDate:'2025-06-29',
      company: '',
      jobTitle: '',
      description: '',
      id: crypto.randomUUID()      
    });
  }
  function editExp(e){
    setExpItem(experience.find((item)=>item.id===e.target.className))
  }
  function delExp(e){
    setExperience(experience.filter((item)=>item.id != e.target.className))   
  }
  const eduItems= education.map((item)=>{
    return  <article key={item.id}>
        <h3>{item.schoolName}</h3>
        <h4>{item.courseName} {item.startDate} - {item.endDate}</h4>
        <Button  className={item.id} onClick={editEdu}>Edit</Button>
        <Button  className={item.id} onClick={delEdu}>Delete</Button>
      </article>
    });
    const expItems= experience.map((item)=>{
    return  <article key={item.id}>
        <h3>{item.company}</h3>
        <h4>{item.jobTitle} {item.startDate} - {item.endDate}</h4>
        <p>{item.description}</p>
        <Button  className={item.id} onClick={editExp}>Edit</Button>
        <Button  className={item.id} onClick={delExp}>Delete</Button>
      </article>
    });
  return (
    <div className='appContainer'>
      <div >
        <div id='personal' className='formSection'>
          <GeneralInfo person={person} setPerson={setPerson} send={getInfo}/>
        </div>
        <div className='formSection'>
          <EduForm info={eduItem} setInfo={setEduItem} addItem={addEdu}/>
          <div>{eduItems }</div>
        </div>
        <div className='formSection'>
        <ExpForm info={expItem} setInfo={setExpItem} addItem={addExp} />
        <div>{expItems }</div>
        </div>
      </div>
      <div className='cv'>
        <h1>Cirruculum Vitae</h1>
        <section>
          <p>{prevPerson.firstName} {prevPerson.lastName}</p>
          <p>{prevPerson.email}</p><p>{prevPerson.phone}</p>          
        </section>
        <section>
          <h2>Educational Experience</h2>
          {education && education.map(
            (item)=><article key={item.id}>
                      <h3>{item.schoolName}</h3>
                      <h4><span className='sep'>{item.courseName}</span> <span>{item.startDate}-{item.endDate}</span></h4>
                    </article>
          )
          }
        </section>
        <section>
          <h2>Practical Experience</h2>
          {experience && experience.map(
            (item)=><article key={item.id}>
                      <h3>{item.company}</h3>
                      <h4><span className='sep'>{item.jobTitle}</span><span className='sep'>{item.startDate}-{item.endDate}</span></h4>
                      <p>{item.description}</p>
                    </article>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
