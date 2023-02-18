//assets/form/SeedModalForm.jsx
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

//TODO:  replace this componentwith the modal component

export function ModalStub({ onSkipClick, onStorePeersClick }) {
  return (
    <Form className="d-flex flex-column  align-items-center">
      <Form.Group as={Row}>
        <Form.Text className="text-muted">Fake Modal Form</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSeedModal">
        <Form.Text className="text-muted">Store your seed phrase</Form.Text>
      </Form.Group>
      <Button variant="primary" type="button" onClick={onSkipClick}>
        Skip this step
      </Button>
      <Button variant="primary" type="button" onClick={onStorePeersClick}>
        Store with peers
      </Button>
    </Form>
  );
}
