import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  isUpdate: boolean = false;
  updateSubject = new BehaviorSubject<boolean>(false)
  
  noteToEdit: Note = {title:'',content:''}
  editBehaivourSubject = new BehaviorSubject<Note>(this.noteToEdit)

  private apiUrl = "http://localhost:8000"
  constructor(private http: HttpClient) { }
  //C - Create
  addNote(note:Note):Observable<any>{
    return this.http.post(this.apiUrl+"/add_note",note)
  }
  // R - Read
  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(this.apiUrl+"/notes")
  }
  updateNote(note: Note):Observable<any>{
    return this.http.put(`${this.apiUrl}/update_note/${note.note_id}`,note)
  }

  //D - Delete
  deleteNote(note_id: number):Observable<any>{
     return this.http.delete(`${this.apiUrl}/delete_note/${note_id}`)
  }


  changeUpdate(value:boolean){
    this.isUpdate = value;
    this.updateSubject.next(value)
  }
  getIsUpdate(): Observable<boolean>{
    return this.updateSubject.asObservable()
  }

  /**
   * Editing part
   */
  
  setNoteToEdit(note: Note){
    this.noteToEdit = note
    this.editBehaivourSubject.next(this.noteToEdit)
  }
  getNoteToEdit(): Observable<Note>{
    return this.editBehaivourSubject.asObservable()
  }
}

