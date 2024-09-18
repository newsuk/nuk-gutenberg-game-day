// src/edit.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Edit from './edit';
import apiFetch from '@wordpress/api-fetch';

// Mock apiFetch
jest.mock('@wordpress/api-fetch');

describe('Edit Component', () => {
    const mockSetAttributes = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders without crashing', () => {
        const { getByText } = render(<Edit attributes={{}} setAttributes={mockSetAttributes} />);
        expect(getByText('Drop an article here')).toBeInTheDocument();
    });

    test('fetches post data and updates state', async () => {
        const post = { id: 1, title: { rendered: 'Test Post' }, featured_media: 2 };
        const media = { source_url: 'http://example.com/image.jpg' };

        apiFetch.mockImplementation((options) => {
            if (options.path.includes('/wp/v2/posts/')) {
                return Promise.resolve(post);
            }
            if (options.path.includes('/wp/v2/media/')) {
                return Promise.resolve(media);
            }
        });

        const { getByText, getByAltText } = render(<Edit attributes={{ postId: 1 }} setAttributes={mockSetAttributes} />);

        await waitFor(() => expect(getByText('Test Post')).toBeInTheDocument());
    });

    test('renders correctly with post data but no featured media', async () => {
        const post = { id: 1, title: { rendered: 'Test Post' }, featured_media: null };

        apiFetch.mockImplementation((options) => {
            if (options.path.includes('/wp/v2/posts/')) {
                return Promise.resolve(post);
            }
        });

        const { getByText } = render(<Edit attributes={{ postId: 1 }} setAttributes={mockSetAttributes} />);

        await waitFor(() => expect(getByText('Test Post')).toBeInTheDocument());
        expect(() => getByAltText('Test Post')).toThrow();
    });
});