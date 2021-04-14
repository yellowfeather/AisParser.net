import { AisMessageWithLocation } from "./AisMessageWithLocation";

/**
 * StandardClassBCsPositionReport
 * Standard position report for Class B shipborne mobile equipment to be used instead of Messages 1, 2, 3.
 * Message type: 18
 */
export interface StandardClassBCsPositionReport extends AisMessageWithLocation {
    reserved: number;
    speedOverGround: number;
    courseOverGround: number;
    trueHeading: number;
    timestamp: number;
    regionalReserved: number;
    isCsUnit: boolean;
    hasDisplay: boolean;
    hasDscCapability: boolean;
    band: boolean;
    canAcceptMessage22: boolean;
    assigned: boolean;
    raim: number;
    radioStatus: number;
}
