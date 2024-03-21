const User = (props) => {
    return (
        <div className="user">
            <p><b>Creator :</b> {props?.name}</p>
            <p><b>Email :</b> {props?.email}</p>
        </div>
    )
}

export default User;