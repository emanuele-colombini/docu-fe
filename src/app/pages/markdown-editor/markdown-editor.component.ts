import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  editorOptions = {theme: 'vs', language: 'markdown'};
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  
  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.http
      .get(`http://docu-be:8080/api/markdown`)
      .subscribe(msg => this.code = msg['content']);
  }

}
