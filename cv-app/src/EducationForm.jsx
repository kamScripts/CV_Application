
import Input from "./components/Input";
import Button from "./components/Button";
export default function EduForm({info, setInfo, addItem}) {    
    function handleChange(e) {
        e.target.name==='start'&&setInfo({
            ...info, startDate: e.target.value
        });
        e.target.name==='end'&&setInfo({
            ...info, endDate: e.target.value
        });
        e.target.name==='school'&&setInfo({
            ...info, schoolName: e.target.value
        });
        e.target.name==='course'&&setInfo({
            ...info, courseName: e.target.value
        });
    }
 return (
    <form id="edu">
        <label htmlFor="start">
            Start Date
            <Input
            name='start'
            value= {info.startDate}
            func={handleChange}
            type='date'/>
        </label>
        <label htmlFor="end">
            Graduation Date
            <Input
            name='end'
            value= {info.endDate}
            func={handleChange}
            type='date'/>
        </label>
        <label htmlFor="school">
            School / University
            <Input
            name='school'
            value= {info.schoolName}
            func={handleChange}
            />
        </label>
        <label htmlFor="course">
            Course Name
            <Input
            name='course'
            value= {info.courseName}
            func={handleChange}
            />
        </label>
        <Button onClick={addItem} type='submit'>
            Submit
        </Button>
    </form>
 );
}