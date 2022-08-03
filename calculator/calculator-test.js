describe("Monthly rate and decimal accuracy", () => {
  it("should calculate the monthly rate correctly", () => {
    const values = {
      amount: 50000,
      years: 5,
      rate: 5.8,
    };
    expect(calculateMonthlyPayment(values)).toEqual("962.00");
  });

  it("should return a result with 2 decimal places", () => {
    const values = {
      amount: 492015,
      years: 15,
      rate: 11.2,
    };
    expect(calculateMonthlyPayment(values)).toEqual("5654.17");
  });
});

describe("Intrest Rate Tests", () => {
  it("should handle high interest rates", () => {
    const values = {
      amount: 1000,
      years: 40,
      rate: 99,
    };
    expect(calculateMonthlyPayment(values)).toEqual("82.50");
  });

  it("should handle low interest rates", () => {
    const values = {
      amount: 1000,
      years: 40,
      rate: 0.01,
    };
    expect(calculateMonthlyPayment(values)).toEqual("2.09");
  });
});
