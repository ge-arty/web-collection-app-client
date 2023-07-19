import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CollectionWrapper,
  DeleteBtn,
  StyledLink,
  SubmitBtn,
  TableItems,
  TableWrapper,
  Td,
  Th,
} from "../styles/styles";
import useFetch from "../hooks/useFetch";
import { useGlobalContext } from "../contexts/GlobalContext";
import useRequest from "../hooks/useRequest";

const CollectionPage = () => {
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
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (option === "old") {
      return collection?.item.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
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
      <StyledLink to={`/collection/${id}/create-item`}>Create Item</StyledLink>
      <select
        style={{ marginLeft: "10px" }}
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="">Sort By Date</option>
        <option value="old">From old to New</option>
        <option value="new">From new to Old</option>
      </select>
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
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {collection?.item.map((item, index) => {
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
                        <strong>{customField.key}:</strong> {customField.value}
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
                      Edit
                    </StyledLink>
                    <DeleteBtn onClick={() => onDelete(item._id)}>
                      Remove
                    </DeleteBtn>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </TableItems>
      </TableWrapper>
    </CollectionWrapper>
  );
};

export default CollectionPage;
