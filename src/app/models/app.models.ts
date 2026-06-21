// src/app/models/app.models.ts

export interface Child {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Vaccine {
  id: string;
  name: string;
  dueDate: string; // Data prevista
  status: 'pendente' | 'atrasada' | 'concluida';
  dose: string;
}
