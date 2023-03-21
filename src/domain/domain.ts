export interface HotChocolate {
    productName: string;
    englishProductName: string;
    vendor: string;
    location: string;
    // TODO: use type from leaflet
    lat: number;
    lon: number;
    description?: string;
}
