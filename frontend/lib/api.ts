const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";

async function handleResponse(response: Response) {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const message = payload?.message ?? response.statusText;
    throw new Error(message);
  }
  return payload;
}

export async function fetchInstallerStatus() {
  return fetch(`${apiUrl}/installer/status`).then(handleResponse);
}

export async function completeInstallation(payload: unknown) {
  return fetch(`${apiUrl}/installer/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(handleResponse);
}

export async function authorizeSandboxPayment(provider: string, amount: number, orderId: string) {
  return fetch(`${apiUrl}/payments/sandbox/authorize`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider, amount, orderId })
  }).then(handleResponse);
}

export async function createSandboxOrder(payload: unknown) {
  return fetch(`${apiUrl}/orders/sandbox`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(handleResponse);
}

export async function fetchDashboard() {
  return fetch(`${apiUrl}/analytics/dashboard`).then(handleResponse);
}
