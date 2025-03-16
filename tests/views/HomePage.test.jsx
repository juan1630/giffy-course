import { render, fireEvent, screen } from "@testing-library/react";
import { HomePage } from "../../src/views/HomePage"

describe("test  in HomePage view" , () => {
    test("Should show title" , async() => {
      const { getByText } =  await render(<HomePage />);
      const titleHome =  getByText("Gif App");
      expect(titleHome).toBeInTheDocument();
    });

    /*
    test("form search could be used", async() => {
       render(<HomePage />);
       const input = await screen.findByRole('textbox');
       fireEvent.change(input, { target: {value: "cars"} });
       expect("cars").toEqual(input.target.value)
    })
       */
})