export default function Input({name, value, func, type='text'}) {
    return (
        <input name={name} value={value} onChange={func} type={type}/>
    )
}