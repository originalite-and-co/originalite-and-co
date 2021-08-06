import {render} from "@testing-library/react";
import ErrorToast from "./ErrorToast";
import userEvent from "@testing-library/user-event";

describe("ErrorToast", () => {
    test("Smoke", () => {
        const message = "test"
        const {getByText} = render(<ErrorToast message={message}/>);

        expect(getByText(/test/i)).toBeInTheDocument();
    });

    test("if button renders and close the toast", () => {
        const message = "test"
        const {getByTestId, queryByText} = render(<ErrorToast message={message}/>);

        const button = getByTestId("error-toast-close-icon");
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        setTimeout(() => {
            expect(queryByText(/test/i)).toBeNull();
        }, 500)
    });

    test("if it closes automatically after a period of time", () => {
        const message = "test"
        const duration = 500;
        const {queryByText} = render(<ErrorToast message={message} autoHideDuration={duration}/>);

        setTimeout(() => {
            expect(queryByText(/test/i)).toBeNull();
        }, duration + 50)
    })
})