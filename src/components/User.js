const User = ({user_name_prop:name,user_handle_prop:handle}) => {
    return (
            <span className="user">
              <span className="name">{name}</span>
              <span className="handle">{handle}</span>
            </span>
    );
  }
  
  export default User;