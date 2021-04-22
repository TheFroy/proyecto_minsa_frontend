import {Form, Row, Col} from 'react-bootstrap'
const RadioButton = ({texto, bool}) => {
    return(
        <div className="container p-2">
            <label htmlFor=""> {texto}</label>
            <fieldset>
                <Form.Group as={Row}>
                <Col border sm={6}>
                {bool === 1 ? 
                    <Form.Check
                    checked
                    type="radio"
                    label="Si"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />:
                    <Form.Check
                    type="radio"
                    label="Si"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />}
                </Col>
                <Col sm={6}>
                    {bool === 0 ? 
                    <Form.Check
                    checked
                    type="radio"
                    label="No"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />:
                    <Form.Check
                    type="radio"
                    label="No"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />}
                </Col>
                </Form.Group>
            </fieldset>
        </div>
    )
}

export default RadioButton