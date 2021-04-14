import { AisMessageWithLocation } from "./AisMessageWithLocation";


export interface PositionReportClassABase extends AisMessageWithLocation {
    navigationStatus: number;
    rateOfTurn: number;
    speedOverGround: number;
    courseOverGround: number;
    trueHeading: number;
    timestamp: number;
    maneuverIndicator: number;
    spare: number;
    raim: number;
    radioStatus: number;
}
