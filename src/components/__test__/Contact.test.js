import {render , screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

//need to check whether the contact page is loading or not?

test("Should load contact us Componenet" , ()=>{
render(<Contact />)  //firrst need to render the component to the jsdom
const heading = screen.getByRole("heading");        //screen is the object
//Assertion
expect(heading).toBeInTheDocument();  //it will find whether the heading is found inside the Documnet or not.

});


test("Should load button inside the cantact  Componenet" , ()=>{
render(<Contact />)  //firrst need to render the component to the jsdom
//const button = screen.getByRole("button");        //screen is the object
const button = screen.getByText("Send Message");    //another way to find the button.

//Assertion
expect(button).toBeInTheDocument();  //it will find whether the heading is found inside the Documnet or not.

});

