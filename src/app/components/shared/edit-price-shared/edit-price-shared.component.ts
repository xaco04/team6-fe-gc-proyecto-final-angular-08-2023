import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-price-shared',
  templateUrl: './edit-price-shared.component.html',
  styleUrls: ['./edit-price-shared.component.css']
})
export class EditPriceSharedComponent {
  @Input() price: any;
  editing: boolean = false;
  editedNombre: string = '';
  editedImagen: string = '';
  editedDescripcion: string = '';

  editarPrecio() {
    this.editing = true;
    this.editedNombre = this.price.nombre;
    this.editedImagen = this.price.imagen;
    this.editedDescripcion = this.price.descripcion;
  }

  guardarCambios() {
    this.price.nombre = this.editedNombre;
    this.price.imagen = this.editedImagen;
    this.price.descripcion = this.editedDescripcion;
    this.editing = false;
  }
}
