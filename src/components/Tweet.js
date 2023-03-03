import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

const Tweet = ({tweets: {user: {name,image,handle},timestamp,message}}) => {
  return (
    <div className="tweet">
      <ProfileImage user_image_prop={image}/>

      <div className="body">
        <div className="top">
          <User user_name_prop={name} user_handle_prop={handle}/>

          <Timestamp timestamp_prop={timestamp}/>
        </div>

        <Message message_prop={message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
