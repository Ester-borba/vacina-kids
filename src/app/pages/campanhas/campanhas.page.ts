import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  gridOutline, peopleOutline, megaphoneOutline,
  checkmarkCircleOutline, bandageOutline, heartOutline, shieldOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-campanhas',
  templateUrl: './campanhas.page.html',
  styleUrls: ['./campanhas.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon]
})
export class CampanhasPage {

  campanhas = [
    {
      nome: 'Campanha contra a Gripe (Influenza)',
      descricao: 'A vacina da gripe é atualizada todos os anos. Crianças pequenas têm prioridade por terem maior risco de complicações.',
      tipo: 'ativa', tipoLabel: 'Ativa',
      icone: 'bandage-outline',
      publico: '6 meses a 6 anos',
      periodo: '01/04 a 31/07',
      relevante: 'Helena, Theo'
    },
    {
      nome: 'Multivacinação Infantil',
      descricao: 'Mutirão para atualizar o caderninho. Leve a carteirinha e coloque todas as vacinas em dia em um só lugar.',
      tipo: 'ativa', tipoLabel: 'Ativa',
      icone: 'heart-outline',
      publico: 'Menores de 15 anos',
      periodo: '09/06 a 11/07',
      relevante: 'Helena, Theo, Lara'
    },
    {
      nome: 'Dia D contra a Poliomielite',
      descricao: 'Dia de mobilização nacional com a gotinha da paralisia infantil. Postos abertos o dia todo.',
      tipo: 'breve', tipoLabel: 'Encerra em breve',
      icone: 'shield-outline',
      publico: 'Menores de 5 anos',
      periodo: '14/06',
      relevante: 'Helena, Theo'
    },
  ];

  constructor(private router: Router) {
    addIcons({ gridOutline, peopleOutline, megaphoneOutline,
               checkmarkCircleOutline, bandageOutline, heartOutline, shieldOutline });
  }

  voltar() {
    this.router.navigate(['/dashboard']);
  }
}
