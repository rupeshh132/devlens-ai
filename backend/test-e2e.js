const http = require('http');

async function runTest(token) {
  try {
    console.log("=== 1. TEST CREATE ORDER ===");
    const createRes = await fetch('http://127.0.0.1:8081/api/v1/learn/payments/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ planName: "COMPETITIVE (JEE / NEET / UPSC)", amount: 799, promoCode: "" })
    });
    
    console.log("Create Status:", createRes.status);
    const createText = await createRes.text();
    console.log("Create Response:", createText);
    
    let orderId = 'order_mock_test123';
    try {
      const createData = JSON.parse(createText);
      if (createData.orderId) orderId = createData.orderId;
    } catch(e) {}

    console.log("\n=== 2. TEST VERIFY PAYMENT ===");
    const verifyRes = await fetch('http://127.0.0.1:8081/api/v1/learn/payments/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: "pay_mock_test123",
        razorpay_signature: "mock_signature_test"
      })
    });
    
    console.log("Verify Status:", verifyRes.status);
    const verifyText = await verifyRes.text();
    console.log("Verify Response:", verifyText);

  } catch(err) {
    console.error("Test Error:", err);
  }
}

const token = process.argv[2];
if (token) {
  runTest(token);
} else {
  console.log("No token provided");
}
