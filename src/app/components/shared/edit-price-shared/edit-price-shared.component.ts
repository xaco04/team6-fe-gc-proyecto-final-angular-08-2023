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
    this.editedNombre = this.reward.name;
    this.editedImagen = this.reward.image;
    this.editedDescripcion = this.reward.description;
  }

  guardarCambios() {
    this.reward.name = this.editedNombre;
    this.reward.image = this.editedImagen;
    this.reward.description = this.editedDescripcion;
    this.editing = false;
  }
}
