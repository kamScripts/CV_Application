
import Input from "./components/Input";
import Button from "./components/Button";
export default function ExpForm({info, setInfo, addItem}) {    
    function handleChange(e) {
        e.target.name==='start'&&setInfo({
            ...info, startDate: e.target.value
        });
        e.target.name==='end'&&setInfo({
            ...info, endDate: e.target.value
        });
        e.target.name==='companyName'&&setInfo({
            ...info, company: e.target.value
        });
        e.target.name==='jobTitle'&&setInfo({
            ...info, jobTitle: e.target.value
        });
        e.target.name==='description'&&setInfo({
            ...info, description: e.target.value
        });
    }
 return (
    <form id="edu">
        <h2>Experience</h2>
        <label htmlFor="start">
            From
            <Input
            name='start'
            value= {info.startDate}
            func={handleChange}
            type='date'/>
        </label>
        <label htmlFor="end">
            Until
            <Input
            name='end'
            value= {info.endDate}
            func={handleChange}
            type='date'/>
        </label>
        <label htmlFor="companyName">
            Company Name
            <Input
            name='companyName'
            value= {info.company}
            func={handleChange}
            />
        </label>
        <label htmlFor="jobTitle">
            Job Title
            <Input
            name='jobTitle'
            value= {info.jobTitle}
            func={handleChange}
            />
        </label>
        <label htmlFor="description">
            Description
            <textarea
            name='description'
            value= {info.description}
            onChange={handleChange}
            
            />
        </label>
        <Button onClick={addItem} type='submit'>
            Submit
        </Button>
    </form>
 );
}