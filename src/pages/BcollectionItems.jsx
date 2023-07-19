import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
  CollectionWrapper,
  TableItems,
  TableWrapper,
  Td,
  Th,
} from "../styles/styles";

const BcollectionItems = () => {
  const { id } = useParams();
  const { response, error, loading, resendRequest } = useFetch(
    `https://collectionwebserver.onrender.com/collections`,
    "GET",
    null
  );
  const collection = response?.allCollections.find(
    (collection) => collection._id === id
  );

  // State to manage the selected sort option
  const [sortOption, setSortOption] = useState("");

  // Function to handle sort change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedItems = collection?.item.slice().sort((itemA, itemB) => {
    if (sortOption === "old") {
      return new Date(itemA.createdAt) - new Date(itemB.createdAt);
    } else if (sortOption === "new") {
      return new Date(itemB.createdAt) - new Date(itemA.createdAt);
    } else {
      return 0;
    }
  });

  return (
    <CollectionWrapper>
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
            </tr>
          </thead>
          <tbody>
            {sortedItems?.length ? (
              sortedItems.map((item, index) => {
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
              })
            ) : (
              <tr>
                <Td colSpan="6">No items found.</Td>
              </tr>
            )}
          </tbody>
        </TableItems>
      </TableWrapper>
    </CollectionWrapper>
  );
};

export default BcollectionItems;
