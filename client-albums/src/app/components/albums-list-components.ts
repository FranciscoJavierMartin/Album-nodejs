import{Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute,Params}from '@angular/router';

@Component({
    selector:'albums-list',
    templateUrl:'../views/albums-list.html'
})

export class AlbumsListComponent implements OnInit{
public titulo: string;

ngOnInit(){
    this.titulo='Listado de albums';
    console.log('Album-list.Component.ts cargado');
}
}