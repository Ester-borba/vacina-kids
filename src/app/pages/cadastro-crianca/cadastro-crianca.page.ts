import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonIcon, IonInput, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, peopleOutline, megaphoneOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cadastro-crianca',
  templateUrl: './cadastro-crianca.page.html',
  styleUrls: ['./cadastro-crianca.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent, IonIcon, IonInput, IonButton, IonSpinner
  ]
})
export class CadastroCriancaPage {

  form!: FormGroup;
  loading = false;

  constructor(private router: Router, private fb: FormBuilder) {
    addIcons({ gridOutline, peopleOutline, megaphoneOutline });

    this.form = this.fb.group({
      nome:        ['', Validators.required],
      nascimento:  ['', Validators.required],
      sexo:        [''],
      cpf:         [''],
      rg:          [''],
      altura:      [''],
      parentesco:  ['mae'],
      lgpd:        [false, Validators.requiredTrue]
    });
  }

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;

    // Simulação — depois conecta com Firebase
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1500);
  }

  voltar() {
    this.router.navigate(['/dashboard']);
  }

  irParaCampanhas() {
    this.router.navigate(['/campanhas']);
  }
}