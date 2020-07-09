//-----------------------//
//      IMPORTS          //
//-----------------------//
import React from "react";
import App from "./App";
import { render, fireEvent, wait, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

test("App fetches show data and renders it", async () => {
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

  //----------------------------------------------------------------//
  //  Useful to resolve different values over multiple async calls  //
  //----------------------------------------------------------------//

  mockFetchShow.mockResolvedValueOnce(showData);

  //----------------------------------//
  //  Pull in testing props           //
  //----------------------------------//
  const { queryAllByText, getByText } = render(<App />);

  //--------------------------------------//
  //  test component - assert that there  //
  //  are no seasons rendered yet         //
  //--------------------------------------//
  expect(queryAllByText(/fetching data.../i)).toHaveLength(1);

  //-----------------------------------------------------//
  // wait for a promise to settle and to resume          //
  // execution of the async function after fullfillment  //
  // when resumed, the value of the await is that of the //
  // fulfilled promise                                   //
  //-----------------------------------------------------//
  await waitFor(() => {
    //-----------------------------------------------//
    //  assert we now have name of seasons rendering //
    //-----------------------------------------------//
    expect(queryAllByText(/chapter1/i)).toHaveLength(1);
  });
});
