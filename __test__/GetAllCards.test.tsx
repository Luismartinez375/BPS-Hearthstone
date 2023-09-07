import { getAllCards } from '../lib/getAllCards';
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    // Other router properties and methods you use in your component
  })),
}));
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        message: 'Table created successfully',
      }),
  })
) as jest.Mock;
beforeEach(() => {
  jest.clearAllMocks(); // Reset all mock function calls before each test
});

describe('Testing get all cards function', () => {
  it('should return an array of CardClass objects when given a valid search term', () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    // Mock the response
    const mockResponse = {
      json: jest.fn().mockResolvedValue([
        {
          cardId: '1',
          name: 'Card 1',
          cardSet: 'Set 1',
          type: 'Type 1',
          rarity: 'Rarity 1',
          attack: 1,
          health: 1,
          text: 'Text 1',
          race: 'Race 1',
          playerClass: 'Class 1',
          img: 'Image 1',
          mechanics: 'Mechanics 1',
          cost: 1,
        },
        {
          cardId: '2',
          name: 'Card 2',
          cardSet: 'Set 2',
          type: 'Type 2',
          rarity: 'Rarity 2',
          attack: 2,
          health: 2,
          text: 'Text 2',
          race: 'Race 2',
          playerClass: 'Class 2',
          img: 'Image 2',
          mechanics: 'Mechanics 2',
          cost: 2,
        },
      ]),
    };
    mockFetch.mockResolvedValue(mockResponse);

    // Call the function
    const result = getAllCards('searchTerm');

    // Assert the result
    expect(result).resolves.toEqual([
      {
        cardid: '1',
        cardname: 'Card 1',
        cardset: 'Set 1',
        type: 'Type 1',
        rarity: 'Rarity 1',
        attack: 1,
        health: 1,
        text: 'Text 1',
        race: 'Race 1',
        playerclass: 'Class 1',
        img: 'Image 1',
        mechanics: 'Mechanics 1',
        mana: 1,
      },
      {
        cardid: '2',
        cardname: 'Card 2',
        cardset: 'Set 2',
        type: 'Type 2',
        rarity: 'Rarity 2',
        attack: 2,
        health: 2,
        text: 'Text 2',
        race: 'Race 2',
        playerclass: 'Class 2',
        img: 'Image 2',
        mechanics: 'Mechanics 2',
        mana: 2,
      },
    ]);
  });
  it('should return an empty array when no cards match the search term', () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    // Mock the response
    const mockResponse = {
      json: jest.fn().mockResolvedValue([]),
    };
    mockFetch.mockResolvedValue(mockResponse);

    // Call the function
    const result = getAllCards('searchTerm');

    // Assert the result
    expect(result).resolves.toEqual([]);
  });
  it('should return an array of CardClass objects when given a search term with special characters', () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    // Mock the response
    const mockResponse = {
      json: jest.fn().mockResolvedValue([
        {
          cardId: '1',
          name: 'Card 1',
          cardSet: 'Set 1',
          type: 'Type 1',
          rarity: 'Rarity 1',
          attack: 1,
          health: 1,
          text: 'Text 1',
          race: 'Race 1',
          playerClass: 'Class 1',
          img: 'Image 1',
          mechanics: 'Mechanics 1',
          cost: 1,
        },
        {
          cardId: '2',
          name: 'Card 2',
          cardSet: 'Set 2',
          type: 'Type 2',
          rarity: 'Rarity 2',
          attack: 2,
          health: 2,
          text: 'Text 2',
          race: 'Race 2',
          playerClass: 'Class 2',
          img: 'Image 2',
          mechanics: 'Mechanics 2',
          cost: 2,
        },
      ]),
    };
    mockFetch.mockResolvedValue(mockResponse);

    // Call the function
    const result = getAllCards('searchTerm!@#$%^&*()');

    // Assert the result
    expect(result).resolves.toEqual([
      {
        cardid: '1',
        cardname: 'Card 1',
        cardset: 'Set 1',
        type: 'Type 1',
        rarity: 'Rarity 1',
        attack: 1,
        health: 1,
        text: 'Text 1',
        race: 'Race 1',
        playerclass: 'Class 1',
        img: 'Image 1',
        mechanics: 'Mechanics 1',
        mana: 1,
      },
      {
        cardid: '2',
        cardname: 'Card 2',
        cardset: 'Set 2',
        type: 'Type 2',
        rarity: 'Rarity 2',
        attack: 2,
        health: 2,
        text: 'Text 2',
        race: 'Race 2',
        playerclass: 'Class 2',
        img: 'Image 2',
        mechanics: 'Mechanics 2',
        mana: 2,
      },
    ]);
  });
  it('should return an array of CardClass objects when given a search term with only one character', () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;

    // Mock the response
    const mockResponse = {
      json: jest.fn().mockResolvedValue([
        {
          cardId: '1',
          name: 'Card 1',
          cardSet: 'Set 1',
          type: 'Type 1',
          rarity: 'Rarity 1',
          attack: 1,
          health: 1,
          text: 'Text 1',
          race: 'Race 1',
          playerClass: 'Class 1',
          img: 'Image 1',
          mechanics: 'Mechanics 1',
          cost: 1,
        },
        {
          cardId: '2',
          name: 'Card 2',
          cardSet: 'Set 2',
          type: 'Type 2',
          rarity: 'Rarity 2',
          attack: 2,
          health: 2,
          text: 'Text 2',
          race: 'Race 2',
          playerClass: 'Class 2',
          img: 'Image 2',
          mechanics: 'Mechanics 2',
          cost: 2,
        },
      ]),
    };
    mockFetch.mockResolvedValue(mockResponse);

    // Call the function
    const result = getAllCards('a');

    // Assert the result
    expect(result).resolves.toEqual([
      {
        cardid: '1',
        cardname: 'Card 1',
        cardset: 'Set 1',
        type: 'Type 1',
        rarity: 'Rarity 1',
        attack: 1,
        health: 1,
        text: 'Text 1',
        race: 'Race 1',
        playerclass: 'Class 1',
        img: 'Image 1',
        mechanics: 'Mechanics 1',
        mana: 1,
      },
      {
        cardid: '2',
        cardname: 'Card 2',
        cardset: 'Set 2',
        type: 'Type 2',
        rarity: 'Rarity 2',
        attack: 2,
        health: 2,
        text: 'Text 2',
        race: 'Race 2',
        playerclass: 'Class 2',
        img: 'Image 2',
        mechanics: 'Mechanics 2',
        mana: 2,
      },
    ]);
  });
});
