export interface IApiGatewayService {
    // Gets service health status
    getServicesHealth(): Promise<string>;
}