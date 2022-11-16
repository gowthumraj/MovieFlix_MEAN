import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingService } from '../services/sharing.service';
import { MovieServices } from '../services/movie-services.service';

import { PaymentComponent,paymentVerify2 } from './payment.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

/*describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe('should verify',()=>{



  it('should not approve',()=>{

    //const handler = new HttpHandler();
    //const http = new HttpClient(handler);
    //const a  = new SharingService();
    //const b  = new MovieServices(http);
    //const c  = new SharingService();
    //const comp = new PaymentComponent(a,b,c);
    let result = paymentVerify2(200,2);
  expect(result).toBe("Payment Unsuccessfull");
  })
  
})
