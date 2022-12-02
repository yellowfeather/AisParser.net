import { MessageType } from './MessageType'

/**
 * AisMessage
 * Common properties for all AIS messages
 */
export interface AisMessage {
    messageType: MessageType;
    repeat: number;
    mmsi: number;
}