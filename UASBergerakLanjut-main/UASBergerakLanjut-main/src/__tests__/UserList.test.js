import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import UserList from '../UserList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('UserList Component', () => {
  it('renders user data from API', async () => {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, users);

    const { getByText } = render(<UserList />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('jane@example.com')).toBeTruthy();
    });
  });
});
