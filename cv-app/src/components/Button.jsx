export default function Button({onClick,type, children}){
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}