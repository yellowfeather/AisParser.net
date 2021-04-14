import { AisMessageWithLocation } from "./AisMessageWithLocation";

/**
 * ExtendedClassBCsPositionReport
 * Extended position report for class B shipborne mobile equipment; contains additional static information.
 * Message type: 19
 */
export interface ExtendedClassBCsPositionReport extends AisMessageWithLocation {
    reserved: number;
    speedOverGround: number;
    courseOverGround: number;
    trueHeading: number;
    timestamp: number;
    regionalReserved: number;
    name: string;
    shipType: number;
    dimensionToBow: number;
    dimensionToStern: number;
    dimensionToPort: number;
    dimensionToStarboard: number;
    positionFixType: number;
    raim: number;
    dataTerminalReady: boolean;
    assigned: boolean;
    spare: number;
}
