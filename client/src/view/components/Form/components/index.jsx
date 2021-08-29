import Error from './Error';
import Radio from './Radio';

const typeComponent = {
  radio: (props) => <Radio {...props} />,
  textarea: (props) => <input type="textarea" {...props} />,
  default: (props) => <input className="form__input" {...props} />,
};

const FormFieldComponent = (type, props) => {
  const findFormComponent = typeComponent[type] || typeComponent.default;
  return findFormComponent(props);
};

export { Error, FormFieldComponent };
