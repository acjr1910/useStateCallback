import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UseStateCallbackExample from "./useStateCallback.example";

describe("useStateCallback.js", () => {
  it("should call cb after state has changed", () => {
    const callbackMock = jest.fn((v) => v);

    render(
      <UseStateCallbackExample startCountAt={0} callbackFn={callbackMock} />
    );

    userEvent.click(screen.getByText(/increment button/i));

    expect(callbackMock).toHaveBeenCalled();

    expect(callbackMock.mock.results[0].value).toBe(1);

    userEvent.click(screen.getByText(/increment button/i));
    expect(callbackMock.mock.results[1].value).toBe(2);

    userEvent.click(screen.getByText(/increment button/i));
    expect(callbackMock.mock.results[2].value).toBe(3);

    expect(callbackMock).toHaveBeenCalledTimes(3);
  });
});
