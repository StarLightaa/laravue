import {http, httpFile} from './http_service';

export function loadNotices(data) {
  return http().get('/notices',{
    params: data
  });
}

export function createNotice(data) {
  return http().post('/notices', data);
}

export function updateNotice(id, data) {
  return http().post(`notices/${id}`, data);
}