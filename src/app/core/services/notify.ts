import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class Notify {
  private readonly snackBar = inject(MatSnackBar);

  /** Confirmations use the past tense of the action that caused them. */
  done(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 3000 });
  }

  problem(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 6000, panelClass: 'Kova-error' });
  }
}
