import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Paginator from "../../components/Paginator";

describe("Paginator Component", () => {
  it("Paginator component renders", () => {
    render(<Paginator />);
    const buttons = screen.getAllByTestId("paginator-component");
    expect(buttons).toBeTruthy();
  });

  it("paginator buttons render",()=>{
    let component = render(<Paginator />)
    const nextButtonEl = component.getByTestId('paginator-next')
    const backButtonEl = component.getByTestId('paginator-back')
    expect(nextButtonEl).toBeTruthy()
    expect(backButtonEl).toBeTruthy()
  });
  
  it("page number renders",()=>{
    let component = render(<Paginator />)
    const numberEl = component.getByTestId('paginator-number')
    expect(numberEl).toBeTruthy()
    expect(numberEl.textContent).toBe('1')
  });
  
  it("paginator increments correctly",()=>{

    function MockPage(){
      const [currentPage, setCurrentPage] = useState(2)

      function goNext(){
        setCurrentPage(prevCurrentPage=> prevCurrentPage+1);
      }
      function goPrev(){
        
        setCurrentPage(prevCurrentPage=> prevCurrentPage-1);
      }
    
    
    return (
      <div data-testid='mock'>
        <Paginator nextFn={goNext} prevFn={goPrev} currentPage={currentPage} maxPage={4} />
      </div>
    )}

    let component = render(<MockPage/>)

    const mockEl = component.getByTestId('mock')
    const numberEl = component.getByTestId('paginator-number')
    const nextButtonEl = component.getByTestId('paginator-next')
    const backButtonEl = component.getByTestId('paginator-back')


    expect(numberEl.textContent).toBe('2')
    fireEvent.click(nextButtonEl)
    expect(numberEl.textContent).toBe('3')
    fireEvent.click(nextButtonEl)
    expect(numberEl.textContent).toBe('4')
    fireEvent.click(nextButtonEl)
    expect(numberEl.textContent).toBe('4')

  });
  
  it("paginator decrements correctly",()=>{

    function MockPage(){
      const [currentPage, setCurrentPage] = useState(3)

      function goNext(){
        setCurrentPage(prevCurrentPage=> prevCurrentPage+1);
      }
      function goPrev(){
        
        setCurrentPage(prevCurrentPage=> prevCurrentPage-1);
      }
    
    
    return (
      <div data-testid='mock'>
        <Paginator nextFn={goNext} prevFn={goPrev} currentPage={currentPage} maxPage={4} />
      </div>
    )}

    let component = render(<MockPage/>)

    const mockEl = component.getByTestId('mock')
    const numberEl = component.getByTestId('paginator-number')
    const nextButtonEl = component.getByTestId('paginator-next')
    const backButtonEl = component.getByTestId('paginator-back')


    expect(numberEl.textContent).toBe('3')
    fireEvent.click(backButtonEl)
    expect(numberEl.textContent).toBe('2')
    fireEvent.click(backButtonEl)
    expect(numberEl.textContent).toBe('1')
    fireEvent.click(backButtonEl)
    expect(numberEl.textContent).toBe('1')});
});
