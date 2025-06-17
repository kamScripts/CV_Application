import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import DisplayArticle from "./DisplayArticle";
export default function GeneralInfo({person, setPerson, send}) {
    
    const [isEdit, setIsEdit]=useState(false)
    
    function handleInput(e) {
            e.target.name==='firstName'&&setPerson({
                ...person, firstName: e.target.value
            }); 
            e.target.name==='lastName'&&setPerson({
                ...person, lastName: e.target.value
            });
            e.target.name==='email'&&setPerson({
                ...person, email: e.target.value
            });
            e.target.name==='phone'&&setPerson({
                ...person, phone: e.target.value
            });
    }
    function edit(e) {
        e.preventDefault()
        setIsEdit(!isEdit)
        
    }
    return (
        <div>
            <form id="generalInfo">
                <h2>Personal Info</h2>
                {!isEdit&&
                <>
                    <DisplayArticle
                     title='First Name'
                     val={person.firstName}
                     />
                     <DisplayArticle
                     title='Last Name'
                     val={person.lastName}
                     />
                     <DisplayArticle
                     title='Email Address'
                     val={person.email}
                     />
                     <DisplayArticle
                     title='Phone Number'
                     val={person.phone}
                     />
                </>}
                {isEdit&&<><label htmlFor="firstName">
                    First Name
                    <Input 
                    name='firstName'
                    value={person.firstName}
                    func={handleInput}
                    
                     />
                </label>
                <label htmlFor="lastName">
                    Last Name
                    <Input 
                    name='lastName'
                    value={person.lastName}
                    func={handleInput}
                     />
                </label>
                <label htmlFor="email">
                    Email
                    <Input 
                    name='email'
                    value={person.email}
                    func={handleInput}
                     />
                </label>
                <label htmlFor="phone">
                    Phone
                    <Input 
                    name='phone'
                    value={person.phone}
                    func={handleInput}
                     />
                </label>
                </>}
                <Button onClick={edit}>
                    Edit
                </Button>
                <Button type='submit' onClick={(e)=>{
                    send(e)
                    setIsEdit(false)
                }}>
                    Submit
                </Button>
            </form>
        </div>
    )

}