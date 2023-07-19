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

const Explore = () => {
  const { response, error, loading } = useFetch(
    `https://collectionwebserver.onrender.com/exploreInfo`,
    "GET",
    null
  );

  return (
    <ExploreWrapper>
      <ExplorePictureContainer>
        <ExploreImg src={mainPicture} alt="main-pic" />
        <ExplorePictureTitleBox>
          Register, create your first collection and join our friendly
          community!
        </ExplorePictureTitleBox>
      </ExplorePictureContainer>

      <ExploreContainer>
        <ExploreTitle>Biggest Collections</ExploreTitle>
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
                    See Items
                  </StyledLink>
                </CollectionCardButtons>
              </CollectionCardBody>
            </CollectionCardElem>
          ))}
        </ExploreFlexContainer>
      </ExploreContainer>

      <ExploreContainer>
        <ExploreTitle>Latest Created Items</ExploreTitle>

        <TableWrapper>
          <TableItems>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Date</Th>
                <Th>Description</Th>
                <Th>Created At</Th>
                <Th>Owner ID</Th>
                <Th>Custom Fields</Th>
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
