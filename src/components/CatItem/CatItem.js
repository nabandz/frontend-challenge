import styled from "styled-components";

import favBorderIcon from "../../resources/img/icons/favorite_border.svg";
import favIcon from "../../resources/img/icons/favorite.svg";

export const CatItem = ({ cat, onCatFavorites }) => {
  const handleFavoritesClick = () => {
    onCatFavorites(cat);
  };

  const ItemFavButton = cat.isFav ? ItemButtonActive : ItemButton;

  return (
    <ItemStyle>
      <ItemImg src={cat.url} alt={`cat-${cat.id}`}></ItemImg>
      <ItemFavButton onClick={handleFavoritesClick} />
    </ItemStyle>
  );
};

const ItemButton = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  bottom: 1rem;
  right: 1rem;
  background-image: url(${favBorderIcon});
  background-position: right 50% top 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
  background-color: transparent;
  visibility: hidden;
  cursor: pointer;
  &:hover {
    background-image: url(${favIcon});
  }
`;

const ItemButtonActive = styled(ItemButton)`
  background-image: url(${favIcon});
`;

const ItemStyle = styled.div`
  position: relative;
  min-width: 224px;
  height: 224px;
  background-color: var(--color-white);
  transition: var(--transition);
  user-select: none;
  &::before {
    content: "";
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    transition: var(--transition);
  }
  &:hover {
    &::before {
      scale: 1.15;
      box-shadow: var(--box-shadow);
      transition: var(--transition);
    }
  }
  &:hover ${ItemButton} {
    visibility: visible;
  }
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
