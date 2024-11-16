const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para aceitar JSON
app.use(express.json());

// Banco de dados simulado
let tarefas = [];

// Criar nova tarefa
app.post('/tasks', (req, res) => {
  const { titulo, descricao, status } = req.body;
  
  // Verifica se os campos obrigatórios foram enviados
  if (!titulo || !descricao || !status) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
  }

  const novaTarefa = { id: tarefas.length + 1, titulo, descricao, status };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);  // Retorna a nova tarefa criada
});

// Listar todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tarefas);  // Retorna todas as tarefas
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API Kanban rodando em http://localhost:${PORT}`);
});
