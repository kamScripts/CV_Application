import './displayArticle.css'
export default function DisplayArticle({title, val}){
    return (
        <article className="displayArticle">
            <h3>{title}:</h3>
            <p>{val}</p>
        </article>
    );
}