import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoansTable from '../LoansTable';

// Mock data for testing
const mockStore = configureStore([]);
const initialState = {
  user: {
    status: "success", // Set status to "success" to render the DataGrid
    error: null,
    user: {
      loans: [
        { id: 1, amount: 1000, tenure: "12 months", purpose: "Business", startDate: "2024-01-01" },
        { id: 2, amount: 2000, tenure: "24 months", purpose: "Education", startDate: "2024-02-01" },
      ],
    },
  },
};


describe('LoansTable Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders the DataGrid with loan data', () => {
    render(
      <Provider store={store}>
        <LoansTable />
      </Provider>
    );

    // Assertions for rendered DataGrid content
    expect(screen.getByText('Loan ID')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Tenure/Duration')).toBeInTheDocument();
    expect(screen.getByText('Purpose')).toBeInTheDocument();
  });
});
