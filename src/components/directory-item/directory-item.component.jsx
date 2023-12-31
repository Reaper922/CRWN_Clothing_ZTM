import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer
      className="directory-item-container"
      onClick={onNavigateHandler}
    >
      <BackgroundImage className="background-image" $imageurl={imageUrl} />
      <Body className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
