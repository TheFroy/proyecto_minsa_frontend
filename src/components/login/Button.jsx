const Button = (props) => {
    return(
        <div className="container p-4">
            <span className={`btn border ${props.tipo} btn-block`} onClick={props.login}>{props.text}</span>
        </div>
    )
}

export default Button 