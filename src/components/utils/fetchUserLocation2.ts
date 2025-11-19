export async function fetchUserLocation2() {
  try {
    const response = await fetch('/api/get-location');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user location:', error);
    return null;
  }
}
