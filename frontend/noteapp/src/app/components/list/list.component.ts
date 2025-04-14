import { Component, EventEmitter, Input,Output ,OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  
  notes: Note[] = []
  constructor(private matDialog: MatDialog ,private noteServ: NoteService,private router: Router){
   }
 

  ngOnInit(): void {
    this.noteServ.getNotes().subscribe((resp: Note[]) =>{
      this.notes = resp
    })
  }
  editNote(note: Note){
    //this.noteServ.changeUpdate(true)
    //this.toEdit.emit(note)
    this.noteServ.setNoteToEdit(note)
    //this.router.navigate(["/edit"])
    const openDialog = this.matDialog.open(EditComponent,{data:note})
  
    
  }
  deleteNote(note:Note){

    if(note.note_id != null){
      this.noteServ.deleteNote(note.note_id).subscribe(()=>{
        this.notes.splice(this.notes.indexOf(note),1)  
      })
    }
    
  }

}
