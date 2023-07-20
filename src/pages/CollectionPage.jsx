import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CollectionWrapper,
  DeleteBtn,
  StyledLink,
  TableItems,
  TableWrapper,
  Td,
  Th,
} from "../styles/styles";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";
import useFetch from "../hooks/useFetch";
import { useGlobalContext } from "../contexts/GlobalContext";
import useRequest from "../hooks/useRequest";

const CollectionPage = () => {
  const { language } = useLanguageContext();
  const [sortOption, setSortOption] = useState("");

  // Collection Id
  const { id } = useParams();

  const { userId, token } = useGlobalContext();

  const { response, error, loading, resendRequest } = useFetch(
    `https://collectionwebserver.onrender.com/user/${userId}`,
    "GET",
    token
  );
  const collection = response?.collections.find(
    (collection) => collection._id === id
  );
  const sortCollection = (option) => {
    if (option === "new") {
      return collection?.item.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (option === "old") {
      return collection?.item.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else {
      return collection?.item;
    }
  };
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const sortedCollection = sortCollection(sortOption);

  const { sendRequest } = useRequest(null, "DELETE");
  const onDelete = (itemId) => {
    const collectionId = id;
    const body = { userId, collectionId };
    sendRequest(
      body,
      token,
      `https://collectionwebserver.onrender.com/deleteItem/${itemId}`
    ).then(() => resendRequest());
  };

  return (
    <CollectionWrapper>
      <StyledLink to={`/collection/${id}/create-item`}>
        {languageDictionary[language].createItem}
      </StyledLink>
      <select
        style={{ marginLeft: "10px", marginTop: "15px" }}
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="">{languageDictionary[language].sortByDate}</option>
        <option value="old">{languageDictionary[language].fromOldtoNew}</option>
        <option value="new">{languageDictionary[language].fromNewToOld}</option>
      </select>
      <TableWrapper>
        <TableItems>
          <thead>
            <tr>
              <Th>{languageDictionary[language].name}</Th>
              <Th>{languageDictionary[language].date}</Th>
              <Th>{languageDictionary[language].description}</Th>
              <Th>{languageDictionary[language].createdAt}</Th>
              <Th>{languageDictionary[language].ownerId}</Th>
              <Th>{languageDictionary[language].customFields}</Th>
              <Th>{languageDictionary[language].actions}</Th>
            </tr>
          </thead>
          <tbody>
            {sortedCollection?.length ? (
              sortedCollection.map((item, index) => {
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
                    <Td>
                      <StyledLink
                        to={`/item-update/${id}/${item._id}`}
                        style={{
                          margin: "5px auto",
                          padding: "5px",
                          display: "block",
                          width: "65px",
                        }}
                      >
                        {languageDictionary[language].edit}
                      </StyledLink>
                      <DeleteBtn onClick={() => onDelete(item._id)}>
                        {languageDictionary[language].remove}
                      </DeleteBtn>
                    </Td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <Td colSpan="7">{languageDictionary[language].noItemsFound}</Td>
              </tr>
            )}
          </tbody>
        </TableItems>
      </TableWrapper>
    </CollectionWrapper>
  );
};

export default CollectionPage;
