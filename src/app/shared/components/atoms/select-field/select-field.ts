import { Component, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-select-field',
  styleUrl: './select-field.scss',
  templateUrl: './select-field.html',
})
export class SelectField<T extends string | number> {
  label = input.required<string>();
  options = input.required<T[]>();
  placeholder = input('Choisir');

  value = model<T | ''>('');

  onChange(event: Event) {
    const raw = (event.target as HTMLSelectElement).value;
    const found = this.options().find((o) => String(o) === raw);
    if (found !== undefined) this.value.set(found);
  }
}
