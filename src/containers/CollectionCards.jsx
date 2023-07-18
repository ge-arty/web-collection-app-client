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
} from "../styles/styles";

const CollectionCards = ({ response, onDelete }) => {
  const [selectValue, setSelectValue] = useState("");
  const collections = response?.collections.filter((collection) => {
    if (selectValue === "") return true;
    else return collection.category === selectValue;
  });

  return (
    <CollectionCardWrapper>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
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
                    <CollectionCardButton>See Items</CollectionCardButton>
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
