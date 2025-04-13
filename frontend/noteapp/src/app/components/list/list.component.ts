import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  
  notes: Note[] = []
  constructor(private noteServ: NoteService){}
  @Input() acceptNote!: Note;

  ngOnInit(): void {
    this.noteServ.getNotes().subscribe((resp: Note[]) =>{
      this.notes = resp
    })
  }
  editNote(note: Note){

  }
  deleteNote(note:Note){

    if(note.note_id != null){
      this.noteServ.deleteNote(note.note_id).subscribe(()=>{
        this.notes.splice(this.notes.indexOf(note),1)  
      })
    }
    
  }

}
