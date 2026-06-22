import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  gridOutline, peopleOutline, megaphoneOutline,
  addOutline, warningOutline, checkmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon]
})
export class DashboardPage implements OnInit {

  nomeUsuario = 'Ana';
  nomeInicial = 'A';
  totalCriancas = 4;
  totalDoses = 29;
  totalAtrasadas = 3;
  totalCampanhas = 3;
  temAtrasadas = true;

  criancas = [
    { id: 1, nome: 'Helena',  idade: '8 meses', cor: '#ABC270',
      status: 'em-dia',   statusLabel: '✓ Em dia',
      aplicadas: 15, previstas: 2, atrasadas: 0 },
    { id: 2, nome: 'Theo',    idade: '4 anos',  cor: '#FEC868',
      status: 'pendente', statusLabel: '⚠ Tem pendência',
      aplicadas: 9,  previstas: 0, atrasadas: 3 },
    { id: 3, nome: 'Lara',    idade: '11 anos', cor: '#ABC270',
      status: 'em-dia',   statusLabel: '✓ Em dia',
      aplicadas: 5,  previstas: 3, atrasadas: 0 },
    { id: 4, nome: 'Ester',   idade: '0 meses', cor: '#FDA769',
      status: 'proxima',  statusLabel: '● Vacina próxima',
      aplicadas: 0,  previstas: 3, atrasadas: 0 },
  ];

  campanhas = [
    { nome: 'Campanha contra a Gripe (Influenza)',
      tipo: 'ativa', tipoLabel: 'Ativa',
      publico: '6 meses a 6 anos',
      periodo: '01/04 a 31/07',
      relevante: 'Helena, Theo' },
    { nome: 'Multivacinação Infantil',
      tipo: 'ativa', tipoLabel: 'Ativa',
      publico: 'Menores de 15 anos',
      periodo: '09/06 a 11/07',
      relevante: 'Helena, Theo, Lara' },
    { nome: 'Dia D contra a Poliomielite',
      tipo: 'breve', tipoLabel: 'Encerra em breve',
      publico: 'Menores de 5 anos',
      periodo: '14/06',
      relevante: 'Helena, Theo' },
  ];

  constructor(private router: Router) {
    addIcons({ gridOutline, peopleOutline, megaphoneOutline,
               addOutline, warningOutline, checkmarkOutline });
  }

  ngOnInit() {}

  irParaPerfil(id: number) {
    this.router.navigate(['/crianca-perfil', id]);
  }

  irParaCampanhas() {
    this.router.navigate(['/campanhas']);
  }

 irParaCadastro() {
  this.router.navigate(['/cadastro-crianca']);
}

  irParaCriancas() {
    console.log('crianças');
  }

  verPendencias() {
    console.log('ver pendências');
  }
}