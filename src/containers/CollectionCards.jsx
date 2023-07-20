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
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";

const CollectionCards = ({ response, onDelete }) => {
  const [selectValueFilter, setSelectValueFilter] = useState("");
  const { language } = useLanguageContext();
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
        <option value="">
          {languageDictionary[language].filterCollections}
        </option>
        <option value="Books">{languageDictionary[language].books}</option>
        <option value="Stamps">{languageDictionary[language].stamps}</option>
        <option value="Silverware">
          {languageDictionary[language].silverware}
        </option>
        <option value="Coins">{languageDictionary[language].coins}</option>
        <option value="Others">{languageDictionary[language].others}</option>
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
                      {languageDictionary[language].remove}
                    </CollectionCardButton>
                    <StyledLink to={`/collection/${item._id}`}>
                      {languageDictionary[language].seeItems}
                    </StyledLink>
                  </CollectionCardButtons>
                </CollectionCardBody>
              </CollectionCardElem>
            );
          })
        ) : (
          <div>{languageDictionary[language].noCollections}</div>
        )}
      </CollectionContainer>
    </CollectionCardWrapper>
  );
};

export default CollectionCards;
