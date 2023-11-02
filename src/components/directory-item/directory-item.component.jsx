import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer className="directory-item-container">
      <BackgroundImage className="background-image" $imageurl={imageUrl} />
      <Body className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
