"use strict";
// 2. Adaptee (새로운 클래스, 호환 불가)
class NewPaymentGateway {
    makePayment(value) {
        console.log(`${value}원을 새 결제 게이트웨이로 처리함`);
    }
}
// 3. Adapter (Target 인터페이스 구현 + Adaptee를 내부에서 호출)
class PaymentAdapter {
    constructor(gateway) {
        this.gateway = gateway;
    }
    pay(amount) {
        // 내부적으로 새로운 API 호출
        this.gateway.makePayment(amount);
    }
}
// 4. 클라이언트 코드
function processPayment(processor, amount) {
    processor.pay(amount);
}
// 5. 실행 예시
const newGateway = new NewPaymentGateway();
const adapter = new PaymentAdapter(newGateway);
// 클라이언트는 여전히 OldPaymentProcessor 인터페이스만 사용
processPayment(adapter, 5000);
// 출력: 5000원을 새 결제 게이트웨이로 처리함
