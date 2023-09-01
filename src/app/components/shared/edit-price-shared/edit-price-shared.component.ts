import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-price-shared',
  templateUrl: './edit-price-shared.component.html',
  styleUrls: ['./edit-price-shared.component.css']
})
export class EditPriceSharedComponent {
  @Input() reward: any;
  editing: boolean = false;
  editedNombre: string = '';
  editedImagen: string = '';
  editedDescripcion: string = '';

  editarPrecio() {
    this.editing = true;
    this.editedNombre = this.reward.nombre;
    this.editedImagen = this.reward.imagen;
    this.editedDescripcion = this.reward.descripcion;
  }

  guardarCambios() {
    this.reward.nombre = this.editedNombre;
    this.reward.imagen = this.editedImagen;
    this.reward.descripcion = this.editedDescripcion;
    this.editing = false;
  }
}
