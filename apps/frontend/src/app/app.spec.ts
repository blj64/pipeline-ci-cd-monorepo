import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  it('should create', () => {
    const comp = new App();
    expect(comp).toBeTruthy();
  });
});
