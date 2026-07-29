import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Address, User } from '@core/models';

@Injectable({ providedIn: 'root' })
export class Profile {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/profile`;

  get(): Observable<User> { return this.http.get<User>(this.base); }

  update(fullName: string, phone?: string, avatarUrl?: string): Observable<User> {
    return this.http.put<User>(this.base, { fullName, phone, avatarUrl });
  }

  changePassword(currentPassword: string, newPassword: string): Observable<void> {
    return this.http.post<void>(`${this.base}/password`, { currentPassword, newPassword });
  }

  addresses(): Observable<Address[]> { return this.http.get<Address[]>(`${this.base}/addresses`); }

  saveAddress(address: Address): Observable<Address[]> {
    return this.http.post<Address[]>(`${this.base}/addresses`, address);
  }

  deleteAddress(id: string): Observable<Address[]> {
    return this.http.delete<Address[]>(`${this.base}/addresses/${id}`);
  }
}
