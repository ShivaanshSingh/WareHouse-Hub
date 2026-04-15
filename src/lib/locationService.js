/**
 * Fetch city suggestions from Nominatim (OpenStreetMap)
 * @param {string} query 
 * @returns {Promise<Array<string>>}
 */
export async function fetchCities(query) {
  if (!query || query.length < 3) return [];

  // Use Nominatim API (Free and Open Source)
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=6&addressdetails=1&countrycodes=in`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept-Language': 'en',
        'User-Agent': 'Link2Logistics-Warehouse-App/1.0' // Required by Nominatim policy
      }
    });

    if (!response.ok) throw new Error('Failed to fetch cities');

    const data = await response.json();
    
    // Process results into objects for better filtering/sorting
    return data.map(item => {
      const city = item.address.city || item.address.town || item.address.village || item.address.suburb || '';
      const state = item.address.state || '';
      const country = item.address.country || '';
      
      let displayName = '';
      if (city) {
        displayName = `${city}${state ? ', ' + state : ''}${country ? ', ' + country : ''}`;
      } else {
        displayName = item.display_name.split(',').slice(0, 3).join(',').trim();
      }

      return {
        display: displayName,
        name: city || item.name || '',
        type: item.addresstype || item.type,
        class: item.class,
        importance: item.importance
      };
    });
  } catch (error) {
    console.error('fetchCities Error:', error);
    return [];
  }
}
