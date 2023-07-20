import {
  DeleteBtn,
  SubmitBtn,
  TableItems,
  TableWrapper,
  Td,
  Th,
} from "../styles/styles";
import {
  useLanguageContext,
  languageDictionary,
} from "../contexts/LanguageContext";

const AdminPanelTable = ({
  response,
  reqDeleteUser,
  reqAdminControl,
  reqBlockControl,
}) => {
  const { language } = useLanguageContext();

  const deleteUser = (id) => {
    reqDeleteUser(id);
  };
  const adminControl = (id, admin) => {
    reqAdminControl(id, admin);
  };
  const blockControl = (id, block) => {
    reqBlockControl(id, block);
  };

  return (
    <TableWrapper>
      <TableItems>
        <thead>
          <tr>
            <Th>{languageDictionary[language].username}</Th>
            <Th>{languageDictionary[language].email}</Th>
            <Th>{languageDictionary[language].adminStatus}</Th>
            <Th>{languageDictionary[language].blockStatus}</Th>
            <Th>{languageDictionary[language].id}</Th>
            <Th>{languageDictionary[language].giveAdmin}</Th>
            <Th>{languageDictionary[language].unBlock}</Th>
            <Th>{languageDictionary[language].removeAccount}</Th>
            <Th>{languageDictionary[language].removeAdmin}</Th>
            <Th>{languageDictionary[language].block}</Th>
          </tr>
        </thead>
        <tbody>
          {response?.map((user, index) => {
            return (
              <tr key={index}>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td>{user.admin ? "Admin" : "User"}</Td>
                <Td>{user.block ? "Blocked" : "not Blocked"}</Td>
                <Td>{user._id}</Td>
                <Td>
                  <SubmitBtn
                    onClick={() => adminControl(user._id, user.admin)}
                    disabled={user.admin}
                  >
                    Submit
                  </SubmitBtn>
                </Td>
                <Td>
                  <SubmitBtn
                    onClick={() => blockControl(user._id, user.block)}
                    disabled={!user.block}
                  >
                    unBlock
                  </SubmitBtn>
                </Td>
                <Td>
                  <DeleteBtn onClick={() => deleteUser(user._id)}>
                    Remove User
                  </DeleteBtn>
                </Td>
                <Td>
                  <DeleteBtn
                    onClick={() => adminControl(user._id, user.admin)}
                    disabled={!user.admin}
                  >
                    Remove Admin
                  </DeleteBtn>
                </Td>
                <Td>
                  <DeleteBtn
                    onClick={() => blockControl(user._id, user.block)}
                    disabled={user.block}
                  >
                    Block
                  </DeleteBtn>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </TableItems>
    </TableWrapper>
  );
};
export default AdminPanelTable;
