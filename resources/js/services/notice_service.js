import {http, httpFile} from './http_service';

export function createNotice(data) {
  return http().post('/notices', data);
}