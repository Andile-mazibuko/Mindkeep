import { Component } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  note: Note = {title: '',content:''}
  notes: Note[] = []  
  constructor(private noteService: NoteService){}

  onFormSubmit(){
    console.log("HEY THERE")
    this.noteService.addNote(this.note).subscribe(() => {    
      //this.notes.push(this.note)
      this.note = {title: '',content:''}

    })    
  }
  getNotes():void{
    this.noteService.getNotes().subscribe((resp: Note[])=>{
      this.notes = resp
    })
    
  }
   
  /*recieveNoteToEdit(noteEdit:Note){
      this.note = noteEdit
  }*/
}
