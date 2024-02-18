type paramsType = {
  endpoint: string;
  method?: string;
  body?: string;
};
export async function fetchAPI(params: paramsType) {
  const { endpoint, method, body } = params;
  const response = await fetch(`${process.env.API_URL}${endpoint}`, {
    method: method || "GET",
    body: body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.json();

  return data;
}

export async function fetchAPIAuth(params: paramsType) {
  const { endpoint, method, body } = params;
  const token = localStorage.getItem("token");

  if (!token) {
    return { error: "token is required" };
  }

  const response = await fetch(`${process.env.API_URL}${endpoint}`, {
    method: method || "GET",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token as string,
    },
  });

  const data = await response.json();

  return data;
}
