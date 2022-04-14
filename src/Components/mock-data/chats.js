const chats = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '9:30 AM',
    isRead: false,
    userId: 1,
    withUserId: 2,
    responseToMessageId: null,
  },
  {
    id: 2,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '9:30 AM',
    isRead: true,
    userId: 2,
    withUserId: 1,
    responseToMessageId: 1,

  },
  {
    id: 3,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '9:30 AM',
    isRead: false,
    userId: 2,
    withUserId: 1,
    responseToMessageId: 1,

  },
  {
    id: 4,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '9:30 AM',
    isRead: true,
    userId: 1,
    withUserId: 2,
    responseToMessageId: 3,

  },
  {
    id: 5,
    name: 'John Doe',
    message: 'Hello, how are you? ,'
            + ' Dolor quis proident elit in dolore magna proident qui proident duis non aliqua.'
            + ' Veniam aliqua aliqua veniam aliquip voluptate magna voluptate anim.'
            + ' Ut sunt sunt labore officia irure velit occaecat est cillum deserunt tempor commodo.',
    time: '9:30 AM',
    isRead: false,
    userId: 2,
    withUserId: 1,
    responseToMessageId: 4,

  },
  {
    id: 6,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '9:30 AM',
    isRead: true,
    userId: 2,
    withUserId: 1,
    responseToMessageId: 1,

  },

  {
    id: 6,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '9:30 AM',
    isRead: true,
    userId: 2,
    withUserId: 1,
    responseToMessageId: 4,

  },

];

export default chats;
