export default function Input({name, value, func}) {
    return (
        <input name={name} value={value} onChange={func}/>
    )
}