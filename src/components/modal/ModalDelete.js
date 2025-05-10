import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../../Axios/UserService";

const ModalDelete = (props) => {
  const { show, handleClose, getDataUser, handleDeleteUserFromModal } = props;
  console.log(getDataUser);

  const handleDelete = async () => {
    const res = await deleteUser(getDataUser.id);
    if (res && res.statusCode === 204) {
      handleDeleteUserFromModal(getDataUser);
      handleClose();
      toast.success("Delete user successfully!");
    } else {
      toast.error("Something wrong!");
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            Are you sure you want to delete this user?
            <br />
            <b>Email = {getDataUser.email}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDelete;
