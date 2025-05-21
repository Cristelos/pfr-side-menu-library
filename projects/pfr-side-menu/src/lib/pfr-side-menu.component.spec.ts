import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfrSideMenuComponent } from './pfr-side-menu.component';
import { provideRouter } from '@angular/router';

describe('PfrSideMenuComponent', () => {
  let component: PfrSideMenuComponent;
  let fixture: ComponentFixture<PfrSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfrSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PfrSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call isSignIn when button is clicked', () => {
    spyOn(component.isSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.isSignIn.emit).toHaveBeenCalled();
  });

    it('should call isSignOut when button is clicked', () => {
    spyOn(component.isSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.isSignOut.emit).toHaveBeenCalled();
  });
});
