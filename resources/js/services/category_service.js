import {http, httpFile} from './http_service';

export function loadCategories() {
  return http().get('/categories');
}