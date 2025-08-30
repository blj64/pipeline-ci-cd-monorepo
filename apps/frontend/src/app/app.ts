import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  template: `
    <main style="font-family: system-ui, sans-serif; margin: 2rem">
      <h1>Angular + FastAPI (staging)</h1>
      <p>API status: {{ status() }}</p>
      <button (click)="ping()" aria-label="Ping API">Ping API</button>
    </main>
  `,
})

export class App {
  private http = inject(HttpClient);
  status = signal('unknown');
  ngOnInit() { this.ping(); }
  ping() {
    this.http.get<{status:string}>('/api/health').subscribe({
      next: (r) => this.status.set(r.status),
      error: () => this.status.set('down')
    });
  }
}
