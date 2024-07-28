import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CreateButton from '../createButton';


describe('navigation tests', () => {
    test('navigates to a new page when the button is clicked ', () => {

        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<CreateButton />} />
                    <Route path="/NewSuccessCases" element={<div>New Success Case Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        const buttonElement = screen.getByText(/create new success case/i);
        fireEvent.click(buttonElement);

        expect(screen.getByText(/new success case page/i)).toBeInTheDocument();

    });
})

