const http = require('http');

async function test() {
  const reqBody = JSON.stringify({
    fullName: "Test User",
    email: "test_payment@devlens.ai",
    password: "Password123!",
    role: "LEARN_USER"
  });

  const res = await fetch('http://127.0.0.1:8081/api/v1/learn/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: reqBody
  });
  
  const data = await res.json();
  console.log("Register:", data);

  const token = data.token;

  const orderRes = await fetch('http://127.0.0.1:8081/api/v1/learn/payments/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ planName: "TEST", amount: 999, promoCode: "" })
  });
  
  const orderData = await orderRes.json().catch(() => null);
  console.log("Create Order Status:", orderRes.status, orderData);

  const verifyRes = await fetch('http://127.0.0.1:8081/api/v1/learn/payments/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({
      razorpay_order_id: orderData ? orderData.orderId : "mock",
      razorpay_payment_id: "mock_pay",
      razorpay_signature: "mock_sig"
    })
  });
  
  console.log("Verify Status:", verifyRes.status);
  const verifyData = await verifyRes.text();
  console.log("Verify Data:", verifyData);
}
test();
