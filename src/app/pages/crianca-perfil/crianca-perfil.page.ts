import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  gridOutline, peopleOutline, megaphoneOutline,
  cardOutline, listOutline, calendarOutline,
  checkmarkOutline, chevronForwardOutline,
  alertCircleOutline, medkitOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-crianca-perfil',
  templateUrl: './crianca-perfil.page.html',
  styleUrls: ['./crianca-perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon]
})
export class CriancaPerfilPage implements OnInit {

  mostrarCarteirinha = false;

  crianca = {
    nome: 'Helena',
    idade: '8 meses',
    nascimento: '12/10/2025',
    status: 'em-dia',
    statusLabel: '✓ Em dia',
    aplicadas: 15,
    previstas: 2,
    atrasadas: 0
  };

  porcentagem = 100;
  dashOffset = 0;

  proximasVacinas = [
    { nome: 'Pneumocócica 10', detalhe: 'Reforço (12 meses) · prevista 12 out' },
    { nome: 'Tríplice viral',  detalhe: '1ª dose (12 meses) · prevista 12 out' },
  ];

  aplicadas = [
    { nome: 'Febre amarela',   detalhe: 'Dose única (9 meses) · 22 jun' },
    { nome: 'Pentavalente',    detalhe: '3ª dose · 14 dez' },
    { nome: 'VIP',             detalhe: '3ª dose · 14 dez' },
    { nome: 'Pneumocócica 10', detalhe: '2ª dose · 14 dez' },
    { nome: 'Rotavírus',       detalhe: '2ª dose · 14 dez' },
    { nome: 'Pentavalente',    detalhe: '2ª dose · 14 abr' },
    { nome: 'VIP',             detalhe: '2ª dose · 14 abr' },
    { nome: 'Meningocócica C', detalhe: '2ª dose · 14 mar' },
    { nome: 'Pentavalente',    detalhe: '1ª dose · 14 fev' },
    { nome: 'VIP',             detalhe: '1ª dose · 14 fev' },
    { nome: 'Pneumocócica 10', detalhe: '1ª dose · 14 fev' },
    { nome: 'Rotavírus',       detalhe: '1ª dose · 14 jan' },
    { nome: 'Meningocócica C', detalhe: '1ª dose · 14 jan' },
    { nome: 'Pentavalente',    detalhe: '1ª dose · 14 dez' },
    { nome: 'BCG',             detalhe: 'Dose única · nascimento' },
  ];

  constructor(private router: Router) {
    addIcons({
      gridOutline, peopleOutline, megaphoneOutline,
      cardOutline, listOutline, calendarOutline,
      checkmarkOutline, chevronForwardOutline,
      alertCircleOutline, medkitOutline
    });
  }

  ngOnInit() {
    const circunferencia = 2 * Math.PI * 52;
    this.dashOffset = circunferencia * (1 - this.porcentagem / 100);
  }

  abrirCarteirinha() {
    this.mostrarCarteirinha = true;
  }

  fecharCarteirinha() {
    this.mostrarCarteirinha = false;
  }

  irParaHistorico() {
    this.router.navigate(['/historico-vacinal', 1]);
  }

  voltar() {
    this.router.navigate(['/dashboard']);
  }

  irParaCampanhas() {
    this.router.navigate(['/campanhas']);
  }
}