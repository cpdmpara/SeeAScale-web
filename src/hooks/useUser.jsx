import { useState, useCallback } from 'react';
import api from '@api/axios';

export default function useUser(){
  const [username, setUsername] = useState(null);

  const fetchMyName = useCallback(async () => {
    try {
      const response = await api.get('/account/my-name');
      setUsername(response.data.name);
      return response.data.name;
    }
    catch (e) {
      setUsername(null);
      return null;
    }
  }, []);

  const fetchLogIn = useCallback(async (email, password) => {
    try {
      const payload = {
        email: email,
        password: password
      }
      const response = await api.post('/account/login', payload);
      setUsername(response.data.name);
      return {
        status: response.status,
        name: response.data.name
      }
    }
    catch (e) {
      setUsername(null);
      console.log(e);
      return {
        status: e.response.status,
        detail: e.response.data?.detail
      };
    }
  }, []);

  return {username, fetchLogIn, fetchMyName}
}