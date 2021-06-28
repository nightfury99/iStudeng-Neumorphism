function FirstContentRow({ title, value, color }) {
    return (
        <div className="flex p-2">
            <div className="w-48">
                <p>{title}</p>
            </div>
            <div className="w-10">
                <p>:</p>
            </div>
            <div className={`${color ? 'text-red-600' : ''}`}>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default FirstContentRow
