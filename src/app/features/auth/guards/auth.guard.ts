import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return true;
  }
}
