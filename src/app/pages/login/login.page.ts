import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonInput,
    IonButton,
    IonIcon,
    IonSpinner
  ]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  mostrarSenha = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    addIcons({ eyeOutline, eyeOffOutline });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.loading = true;

    // Simulação — depois conecta com Firebase Auth
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1500);
  }

  irParaCadastro() {
    // this.router.navigate(['/cadastro']);
    console.log('ir para cadastro');
  }

  esqueceuSenha() {
    console.log('esqueceu senha');
  }
}
