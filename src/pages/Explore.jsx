import {
  CollectionCardBody,
  CollectionCardButtons,
  CollectionCardCategory,
  CollectionCardCreatedAt,
  CollectionCardDescription,
  CollectionCardElem,
  CollectionCardID,
  CollectionCardImage,
  CollectionCardTitle,
  ExploreContainer,
  ExploreImg,
  ExplorePictureContainer,
  ExplorePictureTitleBox,
  ExploreTitle,
  ExploreWrapper,
  StyledLink,
  TableItems,
  TableWrapper,
  ExploreFlexContainer,
  Th,
  Td,
} from "../styles/styles";
import mainPicture from "../assets/overlay-bg.jpg";
import useFetch from "../hooks/useFetch";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";

const Explore = () => {
  const { language } = useLanguageContext();
  const { response, error, loading } = useFetch(
    `https://collectionwebserver.onrender.com/exploreInfo`,
    "GET",
    null
  );
  if (loading) return <div>Loading...</div>;

  return (
    <ExploreWrapper>
      <ExplorePictureContainer>
        <ExploreImg src={mainPicture} alt="main-pic" />
        <ExplorePictureTitleBox>
          {languageDictionary[language].exploreMainTitle}
        </ExplorePictureTitleBox>
      </ExplorePictureContainer>

      <ExploreContainer>
        <ExploreTitle>
          {languageDictionary[language].biggestCollections}
        </ExploreTitle>
        <ExploreFlexContainer>
          {response?.biggestCollections.map((collection) => (
            <CollectionCardElem key={collection._id}>
              <CollectionCardImage
                src={collection.image}
                alt="collection-pic"
              />
              <CollectionCardBody>
                <CollectionCardTitle>{collection.name}</CollectionCardTitle>
                <CollectionCardDescription>
                  {collection.description}
                </CollectionCardDescription>
                <CollectionCardCategory>
                  {collection.category}
                </CollectionCardCategory>
                <CollectionCardID>{collection._id}</CollectionCardID>
                <CollectionCardCreatedAt>
                  {collection.createdAt}
                </CollectionCardCreatedAt>
                <CollectionCardButtons>
                  <StyledLink to={`/biggest-collection/${collection._id}`}>
                    {languageDictionary[language].seeItems}
                  </StyledLink>
                </CollectionCardButtons>
              </CollectionCardBody>
            </CollectionCardElem>
          ))}
        </ExploreFlexContainer>
      </ExploreContainer>

      <ExploreContainer>
        <ExploreTitle>{languageDictionary[language].newItems}</ExploreTitle>

        <TableWrapper>
          <TableItems>
            <thead>
              <tr>
                <Th>{languageDictionary[language].name}</Th>
                <Th>{languageDictionary[language].date}</Th>
                <Th>{languageDictionary[language].description}</Th>
                <Th>{languageDictionary[language].createdAt}</Th>
                <Th>{languageDictionary[language].ownerId}</Th>
                <Th>{languageDictionary[language].customFields} </Th>
              </tr>
            </thead>
            <tbody>
              {response?.latestItems.map((item, index) => {
                const createdAt = new Date(item.createdAt);
                const manufactureDate = new Date(item.date);
                const formattedCreatedAt = createdAt.toLocaleDateString();
                const formattedManufactureDate =
                  manufactureDate.toLocaleDateString();

                return (
                  <tr key={index}>
                    <Td>{item.name}</Td>
                    <Td>{formattedManufactureDate}</Td>
                    <Td>{item.description}</Td>
                    <Td>{formattedCreatedAt}</Td>
                    <Td>{item.userId}</Td>
                    <Td>
                      {item.customFields.map((customField, index) => (
                        <div key={index}>
                          <strong>{customField.key}:</strong>{" "}
                          {customField.value}
                        </div>
                      ))}
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </TableItems>
        </TableWrapper>
      </ExploreContainer>
    </ExploreWrapper>
  );
};

export default Explore;
