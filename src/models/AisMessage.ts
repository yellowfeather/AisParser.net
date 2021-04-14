/**
 * AisMessage
 * Common properties for all AIS messages
 */
export interface AisMessage {
    messageType: number;
    repeat: number;
    mmsi: number;
}