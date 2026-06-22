import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, peopleOutline, megaphoneOutline } from 'ionicons/icons';

@Component({
  selector: 'app-historico-vacinal',
  templateUrl: './historico-vacinal.page.html',
  styleUrls: ['./historico-vacinal.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon]
})
export class HistoricoVacinalPage {

  vacinas = [
    { nome: 'Pneumocócica 10', dose: 'Reforço (12 meses)',
      data: '12/10/2026', doenca: 'Doenças pneumocócicas',
      status: 'prevista', statusLabel: 'Prevista' },
    { nome: 'Tríplice viral', dose: '1ª dose (12 meses)',
      data: '12/10/2026', doenca: 'Sarampo, caxumba e rubéola',
      status: 'prevista', statusLabel: 'Prevista' },
    { nome: 'Febre amarela', dose: 'Dose única (9 meses)',
      data: '22/08/2026', doenca: 'Febre amarela',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Pentavalente', dose: '3ª dose',
      data: '14/04/2026', doenca: 'Difteria, tétano, coqueluche, Hib e Hep B',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'VIP', dose: '3ª dose',
      data: '14/04/2026', doenca: 'Poliomielite',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Meningocócica C', dose: '2ª dose',
      data: '14/03/2026', doenca: 'Meningite C',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Pentavalente', dose: '2ª dose',
      data: '14/02/2026', doenca: 'Difteria, tétano, coqueluche, Hib e Hep B',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'VIP', dose: '2ª dose',
      data: '14/02/2026', doenca: 'Poliomielite',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Pneumocócica 10', dose: '2ª dose',
      data: '14/02/2026', doenca: 'Doenças pneumocócicas',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Rotavírus', dose: '2ª dose',
      data: '14/02/2026', doenca: 'Rotavírus',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Meningocócica C', dose: '1ª dose',
      data: '12/01/2026', doenca: 'Meningite C',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Pentavalente', dose: '1ª dose',
      data: '14/12/2025', doenca: 'Difteria, tétano, coqueluche, Hib e Hep B',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'VIP', dose: '1ª dose',
      data: '14/12/2025', doenca: 'Poliomielite',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Pneumocócica 10', dose: '1ª dose',
      data: '14/12/2025', doenca: 'Doenças pneumocócicas',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'Rotavírus', dose: '1ª dose',
      data: '14/12/2025', doenca: 'Rotavírus',
      status: 'aplicada', statusLabel: 'Aplicada' },
    { nome: 'BCG', dose: 'Dose única',
      data: '12/10/2025', doenca: 'Tuberculose',
      status: 'aplicada', statusLabel: 'Aplicada' },
  ];

  constructor(private router: Router) {
    addIcons({ gridOutline, peopleOutline, megaphoneOutline });
  }

  voltar() {
    this.router.navigate(['/crianca-perfil', 1]);
  }

  irParaDashboard() {
    this.router.navigate(['/dashboard']);
  }

  irParaCampanhas() {
    this.router.navigate(['/campanhas']);
  }
}