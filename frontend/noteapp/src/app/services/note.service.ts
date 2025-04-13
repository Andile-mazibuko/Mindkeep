import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = "http://localhost:8000"
  constructor(private http: HttpClient) { }

  addNote(note:Note):Observable<any>{
    return this.http.post(this.apiUrl+"/add_note",note)
  }
  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.apiUrl+"/notes")
  }
  deleteNote(note_id: number):Observable<any>{
     return this.http.delete(`${this.apiUrl}/delete_note/${note_id}`)
  }
}
