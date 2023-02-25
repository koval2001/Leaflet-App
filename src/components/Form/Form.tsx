import PropTypes from "prop-types";
import { Form, Field } from 'react-final-form';
import Button from 'react-bootstrap/Button';
import FormBootstrap from 'react-bootstrap/Form';
import './style.css';

const SaveForm = ({ handleUpdateList }) => {
  const required = value => (value ? undefined : 'Required')

  return (
    <div className="wrapper px-3 py-2">
      <Form
        onSubmit={handleUpdateList}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="productName" validate={required}>
              {({ input, meta }) => (
                <FormBootstrap.Group className="mb-3" controlId="formProductName">
                  <FormBootstrap.Label>Product name</FormBootstrap.Label>
                  <FormBootstrap.Control type="text" placeholder="Product name" {...input} />
                  <FormBootstrap.Control.Feedback type="invalid">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>
              )}
            </Field>
            <Field name="englishProductName" validate={required}>
              {({ input, meta }) => (
                <FormBootstrap.Group className="mb-3" controlId="formEnglishProductName">
                  <FormBootstrap.Label>English product name</FormBootstrap.Label>
                  <FormBootstrap.Control type="text" placeholder="English product name" {...input} />
                  <FormBootstrap.Control.Feedback type="invalid">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>
              )}
            </Field>
            <Field name="vendor" validate={required}>
              {({ input, meta }) => (
                <FormBootstrap.Group className="mb-3" controlId="formVendor">
                  <FormBootstrap.Label>Vendor</FormBootstrap.Label>
                  <FormBootstrap.Control type="text" placeholder="Vendor" {...input} />
                  <FormBootstrap.Control.Feedback type="invalid">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>
              )}
            </Field>
            <Field name="location" validate={required}>
              {({ input, meta }) => (
                <FormBootstrap.Group className="mb-3" controlId="formLocation">
                  <FormBootstrap.Label>Location</FormBootstrap.Label>
                  <FormBootstrap.Control type="text" placeholder="Location" {...input} />
                  <FormBootstrap.Control.Feedback type="invalid">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>
              )}
            </Field>
            <Field name="description" validate={required}>
              {({ input, meta }) => (
                <FormBootstrap.Group className="mb-3" controlId="formDescription">
                  <FormBootstrap.Label>Description</FormBootstrap.Label>
                  <FormBootstrap.Control type="text" placeholder="Description" {...input} />
                  <FormBootstrap.Control.Feedback type="invalid">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </FormBootstrap.Control.Feedback>
                </FormBootstrap.Group>
              )}
            </Field>
            <div>
              <Button variant="primary"  type="submit">Save marker</Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

SaveForm.propTypes = {
  handleUpdateList: PropTypes.func.isRequired,
};

export default SaveForm;
