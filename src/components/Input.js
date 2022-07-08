import "./input.css"


const Input = ({text, submit}) => {
  return (
    <form className="input" onSubmit={submit}>
        <input type={"text"} placeholder="Please enter location" className="input_value" onChange={text}/>
    </form>
  )
}

export default Input