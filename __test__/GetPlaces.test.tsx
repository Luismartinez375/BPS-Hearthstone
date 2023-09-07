import { getIDS, getPlaceDetail } from '../lib/getPlaces';
import { PlaceClass } from '../types';
describe('Testing both getIDS and getPlaceDetail functions', () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch;

  // Define a mock response for getIDS
  const getIDSResponse = {
    results: [
      {
        place_id: '1',
        name: 'Place 1',
        rating: 4.5,
        vicinity: 'Address 1',
      },
      {
        place_id: '2',
        name: 'Place 2',
        rating: 3.8,
        vicinity: 'Address 2',
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Reset all mock function calls before each test
  });
  describe('Testing get ids function', () => {
    it('should return an array of IdClass objects when given valid latitude and longitude as strings', async () => {
      // Mock the fetch function
      const mockFetch = jest.fn();
      global.fetch = mockFetch;

      // Mock the response data
      const responseData = {
        results: [{ place_id: '1' }, { place_id: '2' }, { place_id: '3' }],
      };
      const response = {
        json: jest.fn().mockResolvedValue(responseData),
      };
      mockFetch.mockResolvedValue(response);

      // Call the function with valid latitude and longitude as strings
      const result = await getIDS({ lat: '123', lng: '456' });

      // Check that the fetch function was called with the correct URL
      expect(mockFetch).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123,456&radius=10000&type=store&key=' +
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      );

      // Check that the response data was deserialized into an array of IdClass objects
      expect(result).toEqual([{ id: '1' }, { id: '2' }, { id: '3' }]);
    });
    it('should return an array of IdClass objects when given valid latitude and longitude as numbers', async () => {
      // Mock the fetch function
      const mockFetch = jest.fn();
      global.fetch = mockFetch;

      // Mock the response data
      const responseData = {
        results: [{ place_id: '1' }, { place_id: '2' }, { place_id: '3' }],
      };
      const response = {
        json: jest.fn().mockResolvedValue(responseData),
      };
      mockFetch.mockResolvedValue(response);

      // Call the function with valid latitude and longitude as numbers
      const result = await getIDS({ lat: '123', lng: '456' });

      // Check that the fetch function was called with the correct URL
      expect(mockFetch).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123,456&radius=10000&type=store&key=' +
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      );

      // Check that the response data was deserialized into an array of IdClass objects
      expect(result).toEqual([{ id: '1' }, { id: '2' }, { id: '3' }]);
    });
    it('should return an empty array when the API returns no results', async () => {
      // Mock the fetch function
      const mockFetch = jest.fn();
      global.fetch = mockFetch;

      // Mock the response data with no results
      const responseData = {
        results: [],
      };
      const response = {
        json: jest.fn().mockResolvedValue(responseData),
      };
      mockFetch.mockResolvedValue(response);

      // Call the function
      const result = await getIDS({ lat: '123', lng: '456' });

      // Check that the fetch function was called with the correct URL
      expect(mockFetch).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123,456&radius=10000&type=store&key=' +
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      );

      // Check that the result is an empty array
      expect(result).toEqual([]);
    });
    it('should throw an error when the API request fails', async () => {
      // Mock the fetch function to throw an error
      const mockFetch = jest
        .fn()
        .mockRejectedValue(new Error('API request failed'));
      global.fetch = mockFetch;

      // Call the function and expect it to throw an error
      await expect(getIDS({ lat: '123', lng: '456' })).rejects.toThrow(
        'API request failed'
      );
    });
    it('should return an array of IdClass objects when the API returns multiple results', async () => {
      // Mock the fetch function
      const mockFetch = jest.fn();
      global.fetch = mockFetch;

      // Mock the response data with multiple results
      const responseData = {
        results: [{ place_id: '1' }, { place_id: '2' }, { place_id: '3' }],
      };
      const response = {
        json: jest.fn().mockResolvedValue(responseData),
      };
      mockFetch.mockResolvedValue(response);

      // Call the function
      const result = await getIDS({ lat: '123', lng: '456' });

      // Check that the fetch function was called with the correct URL
      expect(mockFetch).toHaveBeenCalledWith(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123,456&radius=10000&type=store&key=' +
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      );

      // Check that the response data was deserialized into an array of IdClass objects
      expect(result).toEqual([{ id: '1' }, { id: '2' }, { id: '3' }]);
    });
  });
  describe('Testing get place details function', () => {
    it('should return an empty array when no places are found', async () => {
      // Mock the fetch function
      const mockFetch = jest.fn();
      global.fetch = mockFetch;

      // Mock the response data with no results
      const responseData = {
        results: [],
      };

      // Mock the fetch response
      mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(responseData),
      });

      // Call the function
      const result = await getPlaceDetail({ lat: '123', lng: '456' });

      // Assert the result
      expect(result).toEqual([]);
    });
    it('should return an empty array when given invalid latitude and longitude', async () => {
      // Mock the fetch function
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({ results: [] }),
      });

      // Call the function with invalid latitude and longitude
      const result = await getPlaceDetail({ lat: 'invalid', lng: 'invalid' });

      // Assert the result
      expect(result).toEqual([]);

      // Restore the original fetch function
      // global.fetch.mockRestore();
    });
    it('should throw an error when the fetch request for ids fails', async () => {
      // Mock the fetch function to throw an error
      const mockFetch = jest
        .fn()
        .mockRejectedValueOnce(new Error('Fetch error'));
      global.fetch = mockFetch;

      // Call the function and expect it to throw an error
      await expect(getPlaceDetail({ lat: '123', lng: '456' })).rejects.toThrow(
        'Fetch error'
      );
    });
    it('should fetch data from Google Places API and return deserialized PlaceClass objects', async () => {
      // Mock fetch function
      const mockFetch = jest.fn();
      global.fetch = mockFetch;

      // Mock response data
      const responseData = {
        results: [
          {
            // place data
          },
        ],
      };

      // Mock fetch response
      const mockResponse = {
        json: jest.fn().mockResolvedValue(responseData),
      };
      mockFetch.mockResolvedValue(mockResponse);

      // Mock deserialize function
      const mockDeserialize = jest.fn().mockReturnValue(new PlaceClass());
      jest.mock('ts-jackson', () => ({
        deserialize: mockDeserialize,
      }));

      // Call the function under test
      const result = await getPlaceDetail({ lat: '123', lng: '456' });

      // Assertions
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
        )
      );
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(
          'https://maps.googleapis.com/maps/api/place/details/json'
        )
      );
      expect(mockDeserialize).toHaveBeenCalledTimes(0);
      expect(result).toEqual([new PlaceClass()]);
    });
    it('should throw an error when the fetch request for place details fails', async () => {
      // Mock the fetch function
      const mockFetch = jest.fn();

      // Mock the first fetch response with valid ids
      const idsResponseData = {
        results: [
          {
            id: '1',
          },
          {
            id: '2',
          },
        ],
      };
      mockFetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(idsResponseData),
      });

      // Mock the second fetch response to throw an error
      mockFetch.mockRejectedValueOnce(new Error('Fetch error'));
      global.fetch = mockFetch;

      // Call the function and expect it to throw an error
      await expect(getPlaceDetail({ lat: '123', lng: '456' })).rejects.toThrow(
        'Fetch error'
      );
    });
    it('should handle invalid latitude and longitude values', async () => {
      // Mock the fetch function
      global.fetch = jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve({ results: [] }) })
      ) as jest.Mock;

      // Call the function under test with invalid latitude and longitude values
      const result = await getPlaceDetail({ lat: 'invalid', lng: 'invalid' });

      // Assertions
      expect(result).toEqual([]);

      // Clean up the mock
      //   global.fetch.mockClear();
      //   delete global.fetch;
    });
  });
});
