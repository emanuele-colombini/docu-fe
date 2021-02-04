import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import md from 'markdown-it';
import mdp from 'markdown-it-plantuml';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-markdown-reader',
  templateUrl: './markdown-reader.component.html',
  styleUrls: ['./markdown-reader.component.scss']
})
export class MarkdownReaderComponent implements OnInit {

  private markdown;
  
  outHtml = '';

  constructor(
    private http: HttpClient
  ) {
    this.markdown = md().use(mdp);
  }
  
  async ngOnInit() {
    this.http
      .get(environment.markdownApi, { responseType: 'json' })
      .subscribe(msg => this.outHtml =  this.markdown.render(atob(msg['content'])));
  }
}
