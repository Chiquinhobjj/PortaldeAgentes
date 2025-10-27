'use client';

import React, { useState, useEffect } from 'react';

export default function TestPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('Testing API connection...');
        const response = await fetch('http://localhost:8001/api/agents');
        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Data received:', data);
        setData(data);
        setError(null);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  if (loading) {
    return <div>Testando conexão com API...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Teste de API</h1>
      <p>Dados recebidos: {data ? data.length : 0} agentes</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
