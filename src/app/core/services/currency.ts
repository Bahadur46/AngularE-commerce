import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

/** Prices are whole rupees in this catalogue; paise only clutter the column. */
@Pipe({ name: 'KovaPrice', standalone: true })
export class PricePipe implements PipeTransform {
  private readonly formatter = new Intl.NumberFormat(environment.locale, {
    style: 'currency',
    currency: environment.currency,
    maximumFractionDigits: 0
  });

  transform(value: number | null | undefined): string {
    return this.formatter.format(value ?? 0);
  }
}
