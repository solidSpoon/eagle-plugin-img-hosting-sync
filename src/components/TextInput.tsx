const TextInput = ({title}:{title: string}) =>{
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{title}</span>
            </div>
            <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
        </label>
    )
}

export default TextInput;