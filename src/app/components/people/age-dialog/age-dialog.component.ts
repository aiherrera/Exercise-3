import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface AgeDialog {
  age: number;
}

@Component({
  selector: 'app-age-dialog',
  templateUrl: './age-dialog.component.html',
  styleUrls: ['./age-dialog.component.scss'],
})
export class AgeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AgeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgeDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
