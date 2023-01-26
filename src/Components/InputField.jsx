const InputField = ({text, handleInput, handleSubmit}) => {

    return (
    <label className="input-field">
        <input className="input-in" value={text} onChange={e => handleInput(e.target.value)} />
        <button className="button blue-btn add-todo" onClick={handleSubmit}>Add todo</button>
    </label>

    )
}

export default InputField