import { AisMessage } from "./AisMessage";

/**
 * AisMessageWithLocation
 * Common properties for all AIS messages that contain location information
 */
export interface AisMessageWithLocation extends AisMessage {
    positionAccuracy: number;
    longitude: number;
    latitude: number;
}