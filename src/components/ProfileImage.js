const ProfileImage = ({user_image_prop:image}) => {
    return (
        <img
          src={image}
          className="profile"
          alt="profile"
        />
    );
  }
  
  export default ProfileImage;
  