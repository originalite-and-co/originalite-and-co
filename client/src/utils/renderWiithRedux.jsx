import {Provider} from "react-redux";
import {render} from '@testing-library/react';

const renderWithRedux = (component, store) => {
    return{
        ...render(<Provider store={store}>{component}</Provider>),
        store
    };
};

export default renderWithRedux;