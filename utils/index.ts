export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'd2a158f411mshc6852cb5b3ad246p10ba08jsnd53b63859cfb',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}