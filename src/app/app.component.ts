import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AgeDialogComponent } from '@/components/people/age-dialog/age-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  age: number = 0;
  isChecking: boolean = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isChecking = event.url.includes('check-data');
      }
    });
  }

  sendData(): void {
    const dialogRef = this.dialog.open(AgeDialogComponent, {
      data: { age: this.age },
    });

    dialogRef.afterClosed().subscribe((age: number) => {
      if (age > 0) {
        this.router.navigateByUrl(`/check-data?age=${age}`);
      } else {
        this._snackBar.open(
          'You must select an age to check the information',
          '',
          {
            duration: 3000,
            verticalPosition: 'top',
          }
        );
      }
    });
  }
}
