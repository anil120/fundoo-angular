import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnoteComponent } from './addnote.component';
import { AppMaterial } from '../../app.material.module'
import { HttpClientModule } from '@angular/common/http';


describe('AddnoteComponent', () => {
  let component: AddnoteComponent;
  let fixture: ComponentFixture<AddnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnoteComponent,
      HttpClientModule,     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
