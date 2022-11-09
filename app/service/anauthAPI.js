import anauthAPI from 'axios';

// anauthAPI.defaults.baseURL = 'http://localhost:3000/api/unauthCards';



async function addCard(card) {
  const { data } = await anauthAPI.post(
    'http://localhost:4000/api/unauthCards',
    card
  );
  return data;
}

async function deleteCard(id) {
  const response = await anauthAPI.delete(
    `http://localhost:4000/api/unauthCards/${id}`
  );
  return response;
}

const apiForUnregisteredUsers = {
    addCard,
    deleteCard 
};


export default apiForUnregisteredUsers;
