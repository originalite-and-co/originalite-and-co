import Toast from '../view/components/Toast/Toast';
import React from 'react';
import ErrorBoundary from '../view/HOC/ErrorBoundary/ErrorBoundary';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CloudinaryContext } from 'cloudinary-react';
import { render } from '@testing-library/react';

const errorToast = <Toast
  message='An error has occurred. Please try again later'
  severity='error'
/>;

/**
 *
 * @param {JSXElement} component
 * @param {Object} store
 * @param {Object} history
 * @param {String} [cloudName]
 * @returns {{container?: HTMLElement, getAllByLabelText?: BoundFunction<AllByText> | BoundFunction<typeof queries["getAllByLabelText"]>, queryByText?: BoundFunction<QueryByText> | BoundFunction<typeof queries["queryByText"]>, FindAllByRole?: BoundFunction<FindAllByRole> | BoundFunction<typeof queries["FindAllByRole"]>, getByTestId?: BoundFunction<GetByBoundAttribute> | BoundFunction<typeof queries["getByTestId"]>, unmount?: () => void, findByAltText?: BoundFunction<FindByBoundAttribute> | BoundFunction<typeof queries["findByAltText"]>, getAllByText?: BoundFunction<AllByText> | BoundFunction<typeof queries["getAllByText"]>, findByTestId?: BoundFunction<FindByBoundAttribute> | BoundFunction<typeof queries["findByTestId"]>, findAllByTitle?: BoundFunction<FindAllByBoundAttribute> | BoundFunction<typeof queries["findAllByTitle"]>, findByDisplayValue?: BoundFunction<FindByBoundAttribute> | BoundFunction<typeof queries["findByDisplayValue"]>, findByTitle?: BoundFunction<FindByBoundAttribute> | BoundFunction<typeof queries["findByTitle"]>, getAllByPlaceholderText?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["getAllByPlaceholderText"]>, queryAllByTitle?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["queryAllByTitle"]>, queryAllByPlaceholderText?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["queryAllByPlaceholderText"]>, QueryByText?: BoundFunction<QueryByText> | BoundFunction<typeof queries["QueryByText"]>, queryByDisplayValue?: BoundFunction<QueryByBoundAttribute> | BoundFunction<typeof queries["queryByDisplayValue"]>, FindByText?: BoundFunction<FindByText> | BoundFunction<typeof queries["FindByText"]>, findAllByText?: BoundFunction<FindAllByText> | BoundFunction<typeof queries["findAllByText"]>, FindAllByBoundAttribute?: BoundFunction<FindAllByBoundAttribute> | BoundFunction<typeof queries["FindAllByBoundAttribute"]>, ByRoleOptions?: BoundFunction<ByRoleOptions> | BoundFunction<typeof queries["ByRoleOptions"]>, findByPlaceholderText?: BoundFunction<FindByBoundAttribute> | BoundFunction<typeof queries["findByPlaceholderText"]>, queryAllByDisplayValue?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["queryAllByDisplayValue"]>, queryByLabelText?: BoundFunction<QueryByText> | BoundFunction<typeof queries["queryByLabelText"]>, getByLabelText?: BoundFunction<GetByText> | BoundFunction<typeof queries["getByLabelText"]>, queryByTestId?: BoundFunction<QueryByBoundAttribute> | BoundFunction<typeof queries["queryByTestId"]>, getByPlaceholderText?: BoundFunction<GetByBoundAttribute> | BoundFunction<typeof queries["getByPlaceholderText"]>, history, asFragment?: () => DocumentFragment, queryByTitle?: BoundFunction<QueryByBoundAttribute> | BoundFunction<typeof queries["queryByTitle"]>, getByTitle?: BoundFunction<GetByBoundAttribute> | BoundFunction<typeof queries["getByTitle"]>, findAllByTestId?: BoundFunction<FindAllByBoundAttribute> | BoundFunction<typeof queries["findAllByTestId"]>, queryAllByAltText?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["queryAllByAltText"]>, getByAltText?: BoundFunction<GetByBoundAttribute> | BoundFunction<typeof queries["getByAltText"]>, AllByBoundAttribute?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["AllByBoundAttribute"]>, FindByBoundAttribute?: BoundFunction<FindByBoundAttribute> | BoundFunction<typeof queries["FindByBoundAttribute"]>, getByText?: BoundFunction<GetByText> | BoundFunction<typeof queries["getByText"]>, QueryByBoundAttribute?: BoundFunction<QueryByBoundAttribute> | BoundFunction<typeof queries["QueryByBoundAttribute"]>, GetByBoundAttribute?: BoundFunction<GetByBoundAttribute> | BoundFunction<typeof queries["GetByBoundAttribute"]>, AllByRole?: BoundFunction<AllByRole> | BoundFunction<typeof queries["AllByRole"]>, queryAllByTestId?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["queryAllByTestId"]>, QueryByRole?: BoundFunction<QueryByRole> | BoundFunction<typeof queries["QueryByRole"]>, getByRole?: BoundFunction<GetByRole> | BoundFunction<typeof queries["getByRole"]>, getAllByDisplayValue?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["getAllByDisplayValue"]>, findAllByRole?: BoundFunction<FindAllByRole> | BoundFunction<typeof queries["findAllByRole"]>, getByDisplayValue?: BoundFunction<GetByBoundAttribute> | BoundFunction<typeof queries["getByDisplayValue"]>, queryByPlaceholderText?: BoundFunction<QueryByBoundAttribute> | BoundFunction<typeof queries["queryByPlaceholderText"]>, findByText?: BoundFunction<FindByText> | BoundFunction<typeof queries["findByText"]>, findByLabelText?: BoundFunction<FindByText> | BoundFunction<typeof queries["findByLabelText"]>, queryAllByLabelText?: BoundFunction<AllByText> | BoundFunction<typeof queries["queryAllByLabelText"]>, getAllByTitle?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["getAllByTitle"]>, findAllByAltText?: BoundFunction<FindAllByBoundAttribute> | BoundFunction<typeof queries["findAllByAltText"]>, getAllByRole?: BoundFunction<AllByRole> | BoundFunction<typeof queries["getAllByRole"]>, GetByRole?: BoundFunction<GetByRole> | BoundFunction<typeof queries["GetByRole"]>, queryAllByRole?: BoundFunction<AllByRole> | BoundFunction<typeof queries["queryAllByRole"]>, FindAllByText?: BoundFunction<FindAllByText> | BoundFunction<typeof queries["FindAllByText"]>, getAllByTestId?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["getAllByTestId"]>, queryByRole?: BoundFunction<QueryByRole> | BoundFunction<typeof queries["queryByRole"]>, FindByRole?: BoundFunction<FindByRole> | BoundFunction<typeof queries["FindByRole"]>, queryAllByText?: BoundFunction<AllByText> | BoundFunction<typeof queries["queryAllByText"]>, getAllByAltText?: BoundFunction<AllByBoundAttribute> | BoundFunction<typeof queries["getAllByAltText"]>, debug?: (baseElement?: (Element | DocumentFragment | Array<Element | DocumentFragment>), maxLength?: number, options?: OptionsReceived) => void, findAllByDisplayValue?: BoundFunction<FindAllByBoundAttribute> | BoundFunction<typeof queries["findAllByDisplayValue"]>, store, rerender?: (ui: React.ReactElement) => void, GetByText?: BoundFunction<GetByText> | BoundFunction<typeof queries["GetByText"]>, findByRole?: BoundFunction<FindByRole> | BoundFunction<typeof queries["findByRole"]>, AllByText?: BoundFunction<AllByText> | BoundFunction<typeof queries["AllByText"]>, findAllByPlaceholderText?: BoundFunction<FindAllByBoundAttribute> | BoundFunction<typeof queries["findAllByPlaceholderText"]>, baseElement?: Element, queryByAltText?: BoundFunction<QueryByBoundAttribute> | BoundFunction<typeof queries["queryByAltText"]>, findAllByLabelText?: BoundFunction<FindAllByText> | BoundFunction<typeof queries["findAllByLabelText"]>}}
 */
const renderWithProjectProviders = (component, store, history, cloudName = "originalite-and-co") => {
  return {
    ...render(
      <ErrorBoundary fallback={errorToast}>
        <Router history={history}>
          <Provider store={store}>
            <CloudinaryContext cloudName={cloudName}>
              {component}
            </CloudinaryContext>
          </Provider>
        </Router>
      </ErrorBoundary>,
    ),
    history,
    store
  };

};


export default renderWithProjectProviders;