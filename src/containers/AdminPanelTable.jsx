import {
  DeleteBtn,
  SubmitBtn,
  TableItems,
  TableWrapper,
  Td,
  Th,
} from "../styles/styles";

const AdminPanelTable = ({
  response,
  reqDeleteUser,
  reqAdminControl,
  reqBlockControl,
}) => {
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
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Admin Status</Th>
            <Th>Block Status</Th>
            <Th>ID</Th>
            <Th>Make Admin</Th>
            <Th>UnBlock</Th>
            <Th>Remove Account</Th>
            <Th>Remove From Admins</Th>
            <Th>Block</Th>
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
