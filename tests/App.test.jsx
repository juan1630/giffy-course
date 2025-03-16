import { render } from '@testing-library/react';
import App from "../src/App";
import "./mocks/intersectionObserverMock";

describe("Pruebas en el <App />", () => {
  test("testing in <App />", async function () {
    const { findByText } = render(<App />);
    const linkMexicoElement = await findByText(/Gif de mexico/i);
    expect(linkMexicoElement).toBeInTheDocument();
  });

  test("Should show trends searches" , async() => {
    const { findByText } = render(<App />);
    const trendsTitle  = await findByText("Trends searches");
    expect(trendsTitle).toBeInTheDocument();
  })
});
