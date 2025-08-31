import { Component, inject, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  private http = inject(HttpClient);
  status = signal('unknown');

  ngOnInit() {
    this.ping();
  }

  ping() {
    this.http.get<{ status: string }>('/health').subscribe({
      next: (r) => this.status.set(r.status),
      error: () => this.status.set('down'),
    });
  }
}
