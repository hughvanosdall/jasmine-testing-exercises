describe("Payments Test", () => {
  beforeEach(() => {
    billAmtInput.value = 40;
    tipAmtInput.value = 5;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('40');
    expect(allPayments['payment1'].tipAmt).toEqual('5');
    expect(allPayments['payment1'].tipPercent).toEqual(13);
  });

  it('should not add a new payment on submitPaymentInfo() with empty input', () => {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should create a new payment on createCurPayment()', () => {
    let expectedPayment = {
      billAmt: '40',
      tipAmt: '5',
      tipPercent: 13,
    };

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should not create payment with empty input on createCurPayment()', () => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

  afterEach( () => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});