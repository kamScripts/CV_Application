export default function Button({onClick,type='button',className='', children}){
    return (
        <button className={className}type={type} onClick={onClick}>
            {children}
        </button>
    )
}