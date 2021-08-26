import Error from './Error';

const typeComponent = {
  textarea: (props) => <textarea {...props} />,
  default: (props) => <input {...props} />
};

const FormFieldComponent = (type, props) => {
  const findFormComponent = typeComponent[type] || typeComponent['default'];
  return findFormComponent(props);
};

export { Error, FormFieldComponent };
