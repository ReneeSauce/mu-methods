//assets/form/SeedModalForm.jsx
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ModalStub({ onSkipClick, onStorePeersClick }) {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Text className="text-muted">Fake Modal Form</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSeedModal">
        <Form.Text className="text-muted">Store your see phrase</Form.Text>
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

export default ModalStub;
