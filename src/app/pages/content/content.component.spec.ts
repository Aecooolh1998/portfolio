import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material.module';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let router: Router

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ContentComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigateToSplashScreen', () => {
    it('should navigate top the splash screen upon clicking the button', () => {
      component.navigateToSplashScreen();

      const spy = router.navigate as jasmine.Spy;
      const navArgs = spy.calls.first().args[0];
  
      expect(navArgs[0]).toBe('');
    });
  });
});
