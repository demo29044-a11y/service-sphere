import { useEffect, useRef, useState, useCallback } from "react";

interface PlaceResult {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

interface PlaceDetails {
  formatted_address: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  place_id: string;
  name?: string;
}

interface UsePlacesAutocompleteOptions {
  onPlaceSelect?: (place: PlaceDetails) => void;
  onError?: (error: string) => void;
  apiKey?: string;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: any) => {
            getPlace: () => any;
            addListener: (event: string, callback: () => void) => void;
          };
          PlacesService: new (element: HTMLElement) => {
            getDetails: (
              request: { placeId: string; fields?: string[] },
              callback: (place: any, status: string) => void
            ) => void;
          };
          PlacesServiceStatus: {
            OK: string;
          };
        };
        Geocoder: new () => {
          geocode: (
            request: { location: { lat: number; lng: number } },
            callback: (results: any[] | null, status: string) => void
          ) => void;
        };
        GeocoderStatus: {
          OK: string;
        };
      };
    };
  }
}

export function usePlacesAutocomplete({
  onPlaceSelect,
  onError,
  apiKey,
}: UsePlacesAutocompleteOptions = {}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetails | null>(null);
  const autocompleteRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scriptLoadedRef = useRef(false);

  // Load Google Maps API script
  useEffect(() => {
    // Check if already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already being loaded
    if (scriptLoadedRef.current) {
      return;
    }

    // Get API key from environment variable or parameter
    const key = apiKey || import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!key) {
      console.warn(
        "Google Maps API key not found. Please set VITE_GOOGLE_MAPS_API_KEY in your .env file or pass it as a prop."
      );
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (existingScript) {
      scriptLoadedRef.current = true;
      // Poll for Google Maps API to load
      const interval = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          setIsLoaded(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    // Load the script
    scriptLoadedRef.current = true;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Poll for Google Maps API to load
      const interval = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          setIsLoaded(true);
          clearInterval(interval);
        }
      }, 100);
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps API");
      scriptLoadedRef.current = false;
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, [apiKey]);

  // Initialize autocomplete when API is loaded
  useEffect(() => {
    if (!isLoaded || !inputRef.current) {
      return;
    }

    try {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["geocode", "establishment"],
          fields: ["place_id", "formatted_address", "geometry", "name"],
        }
      );

      autocompleteRef.current = autocomplete;

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        
        if (place.place_id) {
          // Get detailed place information
          const service = new window.google.maps.places.PlacesService(
            document.createElement("div")
          );

          service.getDetails(
            {
              placeId: place.place_id,
              fields: [
                "formatted_address",
                "geometry",
                "place_id",
                "name",
                "address_components",
              ],
            },
            (placeDetails, status) => {
              if (
                status === "OK" &&
                placeDetails
              ) {
                const placeData: PlaceDetails = {
                  formatted_address: placeDetails.formatted_address || "",
                  geometry: placeDetails.geometry,
                  place_id: placeDetails.place_id || "",
                  name: placeDetails.name,
                };

                setSelectedPlace(placeData);
                if (onPlaceSelect) {
                  onPlaceSelect(placeData);
                }
              }
            }
          );
        }
      });
    } catch (error) {
      console.error("Error initializing Google Places Autocomplete:", error);
    }

    return () => {
      if (autocompleteRef.current) {
        // Cleanup if needed
        autocompleteRef.current = null;
      }
    };
  }, [isLoaded, onPlaceSelect]);

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      const errorMsg = "Geolocation is not supported by your browser.";
      if (onError) {
        onError(errorMsg);
      } else {
        alert(errorMsg);
      }
      return;
    }

    if (!isLoaded || !window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded yet.");
      const errorMsg = "Location services are still loading. Please wait a moment and try again.";
      if (onError) {
        onError(errorMsg);
      } else {
        alert(errorMsg);
      }
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Use Geocoding API to get address from coordinates
        try {
          const geocoder = new window.google.maps.Geocoder();
          const latlng = {
            lat: latitude,
            lng: longitude,
          };

          geocoder.geocode({ location: latlng }, (results, status) => {
            if (
              status === "OK" &&
              results &&
              results[0]
            ) {
              const placeData: PlaceDetails = {
                formatted_address: results[0].formatted_address,
                geometry: {
                  location: {
                    lat: () => latitude,
                    lng: () => longitude,
                  },
                },
                place_id: results[0].place_id || "",
                name: results[0].formatted_address,
              };

              setSelectedPlace(placeData);
              if (inputRef.current) {
                inputRef.current.value = results[0].formatted_address;
              }
              if (onPlaceSelect) {
                onPlaceSelect(placeData);
              }
            } else {
              console.error("Geocoding failed:", status);
              const errorMsg = "Failed to get address for your location. Please try again.";
              if (onError) {
                onError(errorMsg);
              } else {
                alert(errorMsg);
              }
            }
          });
        } catch (error) {
          console.error("Error initializing geocoder:", error);
          const errorMsg = "Error getting your location. Please try again.";
          if (onError) {
            onError(errorMsg);
          } else {
            alert(errorMsg);
          }
        }
      },
      (error) => {
        console.error("Error getting current location:", error);
        let errorMessage = "Unable to get your location. ";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += "Please allow location access in your browser settings.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage += "Location request timed out. Please try again.";
            break;
          default:
            errorMessage += "An unknown error occurred.";
            break;
        }
        if (onError) {
          onError(errorMessage);
        } else {
          alert(errorMessage);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, [onPlaceSelect, onError, isLoaded]);

  return {
    inputRef,
    isLoaded,
    selectedPlace,
    getCurrentLocation,
  };
}

