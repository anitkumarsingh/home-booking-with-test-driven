const apiClient = {
  homeApi: () => {
    return Promise.resolve([
      {
        title: 'Test title 1',
        content: 'This is test content',
        location: 'Test location 1',
        price: 12
      },
      {
        title: 'Test title 2',
        content: 'This is test content 2',
        location: 'Test location 2',
        price: 124
      },
      {
        title: 'Test title 3',
        content: 'This is test content 3',
        location: 'Test location 3',
        price: 54
      },
      {
        title: 'Test title 4',
        content: 'This is test content 4',
        location: 'Test location 4',
        price: 43
      }
    ]);
  }
};
export default apiClient;
