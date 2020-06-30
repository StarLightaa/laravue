import {http, httpFile} from './http_service';

export function loadNotices() {
  return http().get('/notices');
}

export function createNotice(data) {
  return http().post('/notices', data);
}

export function updateNotice(id, data) {
  return http().post(`notices/${id}`, data);
}
