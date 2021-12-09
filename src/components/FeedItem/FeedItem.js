const FeedItem = (props) => {
    return (
        <ul>
            <li>
                <h2>{props.title}</h2>
            </li>
            <li>
                more info... <a href={props.link}>link</a>
            </li>
        </ul>
    )
}
export default FeedItem