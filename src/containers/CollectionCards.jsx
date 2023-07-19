import { useState } from "react";
import {
  CollectionCardWrapper,
  CollectionCardElem,
  CollectionCardBody,
  CollectionCardImage,
  CollectionCardTitle,
  CollectionCardDescription,
  CollectionCardCategory,
  CollectionCardID,
  CollectionCardCreatedAt,
  CollectionCardButtons,
  CollectionCardButton,
  CollectionContainer,
  StyledLink,
} from "../styles/styles";

const CollectionCards = ({ response, onDelete }) => {
  const [selectValueFilter, setSelectValueFilter] = useState("");
  const collections = response?.collections.filter((collection) => {
    if (selectValueFilter === "") return true;
    else return collection.category === selectValueFilter;
  });

  return (
    <CollectionCardWrapper>
      <select
        value={selectValueFilter}
        onChange={(e) => setSelectValueFilter(e.target.value)}
      >
        <option value="">Filter Your Collections</option>
        <option value="Books">Books</option>
        <option value="Stamps">Stamps</option>
        <option value="Silverware">Silverware</option>
        <option value="Coins">Coins</option>
        <option value="Others">Others</option>
      </select>
      <CollectionContainer>
        {collections?.length ? (
          collections.map((item) => {
            const createdAt = new Date(item.createdAt);
            const formattedCreatedAt = createdAt.toLocaleDateString();

            return (
              <CollectionCardElem key={item._id}>
                <CollectionCardImage src={item.image} alt="collection-pic" />
                <CollectionCardBody>
                  <CollectionCardTitle>{item.name}</CollectionCardTitle>
                  <CollectionCardDescription>
                    {item.description}
                  </CollectionCardDescription>
                  <CollectionCardCategory>
                    {item.category}
                  </CollectionCardCategory>
                  <CollectionCardID>{item._id}</CollectionCardID>
                  <CollectionCardCreatedAt>
                    {formattedCreatedAt}
                  </CollectionCardCreatedAt>
                  <CollectionCardButtons>
                    <CollectionCardButton onClick={() => onDelete(item._id)}>
                      Remove
                    </CollectionCardButton>
                    <StyledLink to={`/collection/${item._id}`}>
                      See Items
                    </StyledLink>
                  </CollectionCardButtons>
                </CollectionCardBody>
              </CollectionCardElem>
            );
          })
        ) : (
          <div>There are no collections yet.</div>
        )}
      </CollectionContainer>
    </CollectionCardWrapper>
  );
};

export default CollectionCards;
