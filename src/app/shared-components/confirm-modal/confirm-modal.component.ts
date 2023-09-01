import { Component, EventEmitter, Input, Output } from '@angular/core';
import { confirmModalConsts } from 'src/app/consts/createPost.consts';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent {
  @Input() isConfirmationModalOpen: boolean | undefined;
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmDelete = new EventEmitter<void>();

  dataConsts = confirmModalConsts;

  onCancelClick(): void {
    console.log('Modal close clicked');
    this.closeModal.emit();
  }

  onConfirmClick(): void {
    console.log('Modal confirm clicked');
    this.confirmDelete.emit();
  }
}
