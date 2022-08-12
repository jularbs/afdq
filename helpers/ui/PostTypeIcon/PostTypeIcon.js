import {
  IoFilmOutline,
  IoNewspaperOutline,
  IoImagesOutline,
} from "react-icons/io5";
import {
  PHOTO_ALBUM,
  VIDEO_LINK,
  BASIC_ARTICLE,
} from "../../../utils/constants";

const PostTypeIcon = ({ type, className, style }) => {
  const showPostType = (type) => {
    switch (type) {
      case PHOTO_ALBUM:
        return (
          <div>
            <IoImagesOutline className={`${className}`} style={style} />
          </div>
        );
      case VIDEO_LINK:
        return <IoFilmOutline className={`${className}`} style={style} />;
      case BASIC_ARTICLE:
        return <IoNewspaperOutline className={`${className}`} style={style} />;
      default:
        return (
          <div className={`${className}`} style={style}>
            {type}
          </div>
        );
    }
  };

  return showPostType(type);
};

export default PostTypeIcon;
