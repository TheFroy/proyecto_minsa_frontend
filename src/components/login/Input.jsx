const Input = (props) => {
    return (
        <>
        <div className="container p-2">
            <label htmlFor="">{props.texto}</label>
            <input className="form-control" onChange={props.getText} type={props.type} value={props.valor} />
        </div>
        </>
    )
}

export default Input 