/-----------------------//
//      IMPORTS          //
//-----------------------//
import React from "react";
import Episodes from "./Episodes";
import { render, rerender } from "@testing-library/react";

test("renders correctly", () => {
  //---------------------//
  //  SET UP DUMMY DATA  //
  //---------------------//
  const showData = {
    id: "34343",
    image: { medium: "img" },
    name: "chapter1",
    season: 5,
    number: 3,
    summary: "<p>season summary</p>",
    runtime: 10,
  };

  //-----------------------------------------//
  //  Renders component with an empty array  //
  //-----------------------------------------//
  const { rerender, queryAllByText, getByText } = render(
    <Episodes episodes={[]} />
  );

  //-----------------------------------------------------------------//
  //  test component - assert that there are no seasons rendered yet //
  //-----------------------------------------------------------------//
  expect(queryAllByText(/season/i)).toHaveLength(0);

  //-------------------------------------------------------------------//
  //  test prop updates rerenders component with dummy data passed in  //
  //  as the new props                                                 //
  //-------------------------------------------------------------------//
  rerender(<Episodes episodes={[showData]} />);

  //----------------------------------------//
  //  assert we now have seasons rendering  //
  //----------------------------------------//
  expect(queryAllByText(/season/)).toHaveLength(1);
});




const showData = [
{
  id: "34343",
  image: { medium: "img" },
  name: "chapter1",
  season: 5,
  number: 3,
  summary: "<p>season summary</p>",
  runtime: 10,
}
];