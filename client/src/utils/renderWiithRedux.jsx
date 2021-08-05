const {render} = require("@testing-library/react");
import {Provider} from "react-redux";

const renderWithRedux = (component, store) => {
    return{
        ...render(<Provider store={store}>{component}</Provider>),
        store
    };
};

export default renderWithRedux;