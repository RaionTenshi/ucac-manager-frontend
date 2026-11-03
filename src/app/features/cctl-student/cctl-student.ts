import { Component, computed, signal } from '@angular/core';
import { SelectField } from '../../shared/components/atoms/select-field/select-field';

interface Detail {
  criterion: string;
  note: number;
  max: number;
}
interface Competence {
  name: string;
  note: number;
  total: number;
  details: Detail[];
}

interface DetailBlock {
  order: number;
  title: string;
  rows: { question: string; note: number | '' }[];
}

@Component({
  imports: [SelectField],
  selector: 'app-cctl-student',
  styleUrl: './cctl-student.scss',
  templateUrl: './cctl-student.html',
})
export class CctlStudent {
  ueList = ['UE.2.2. Programmation', 'UE.2.3. Bases de données'];
  sessions = ['Normale', 'Rattrapage'];
  years = [2024, 2025, 2026];
  cctlNames = ['Conception et UML', 'Algorithmique'];

  ue = signal('');
  session = signal('');
  year = signal<number | ''>('');
  cctl = signal('');

  tab = signal<'general' | 'details'>('general');

  results = signal<Competence[]>([]);

  canSearch = computed(
    () => !!this.ue() && !!this.session() && this.year() !== '' && !!this.cctl(),
  );

  totalNote = computed(() => this.results().reduce((sum, c) => sum + c.note, 0));

  totalMax = computed(() => this.results().reduce((sum, c) => sum + c.total, 0));

  detailColumns = computed(() => {
    const res = this.results();

    const blocks: DetailBlock[] = res.length
      ? res.map((c, i) => ({
          order: i,
          title: `Questions(C${i + 1})`,
          rows: c.details.map((d) => ({ question: d.criterion, note: d.note })),
        }))
      : [2, 3, 2].map((n, i) => ({
          order: i,
          title: `Questions(C${i + 1})`,
          rows: Array.from({ length: n }, () => ({ question: '', note: '' as const })),
        }));

    return [blocks.filter((_, i) => i % 2 === 0), blocks.filter((_, i) => i % 2 === 1)];
  });
}
