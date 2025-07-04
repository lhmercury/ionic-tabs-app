import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
})
export class InformacionPersonalPage implements OnInit {
  datosUsuario: any = {
    nombre: '',
    apellido: '',
    email: ''
  };
  
  mostrarDatos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  guardarDatos() {
    console.log('Datos del usuario:', this.datosUsuario);
    this.mostrarDatos = true;
    
    // Opcional: Mostrar toast de confirmación
    // this.mostrarToast('Datos guardados correctamente');
  }

  // Opcional: Método para mostrar toast
  /*
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  */
}
