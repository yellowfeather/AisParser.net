import { MessageType } from '../models/MessageType'

interface MessageTypeComponentName {
    messageType: MessageType,
    componentName: string
}

const messages:MessageTypeComponentName[] = [
    { messageType: MessageType.PositionReportClassA, componentName: "PositionReportClassA" },
    // { messageType: MessageType.PositionReportClassAAssignedSchedule, componentName: "PositionReportClassAAssignedSchedule" },
    // { messageType: MessageType.PositionReportClassAResponseToInterrogation, componentName: "PositionReportClassAResponseToInterrogation" },
    // { messageType: MessageType.BaseStationReport, componentName: "BaseStationReport" },
    // { messageType: MessageType.StaticAndVoyageRelatedData, componentName: "StaticAndVoyageRelatedData" },
    // { messageType: MessageType.BinaryAddressedMessage, componentName: "BinaryAddressedMessage" },
    // { messageType: MessageType.BinaryAcknowledge, componentName: "BinaryAcknowledge" },
    // { messageType: MessageType.BinaryBroadcastMessage, componentName: "BinaryBroadcastMessage" },
    // { messageType: MessageType.StandardSarAircraftPositionReport, componentName: "StandardSarAircraftPositionReport" },
    // { messageType: MessageType.UtcAndDateInquiry, componentName: "UtcAndDateInquiry" },
    // { messageType: MessageType.UtcAndDateResponse, componentName: "UtcAndDateResponse" },
    // { messageType: MessageType.AddressedSafetyRelatedMessage, componentName: "AddressedSafetyRelatedMessage" },
    // { messageType: MessageType.SafetyRelatedAcknowledgement, componentName: "SafetyRelatedAcknowledgement" },
    // { messageType: MessageType.SafetyRelatedBroadcastMessage, componentName: "SafetyRelatedBroadcastMessage" },
    // { messageType: MessageType.Interrogation, componentName: "Interrogation" },
    // { messageType: MessageType.AssignmentModeCommand, componentName: "AssignmentModeCommand" },
    // { messageType: MessageType.DgnssBinaryBroadcastMessage, componentName: "DgnssBinaryBroadcastMessage" },
    // { messageType: MessageType.StandardClassBCsPositionReport, componentName: "StandardClassBCsPositionReport" },
    // { messageType: MessageType.ExtendedClassBCsPositionReport, componentName: "ExtendedClassBCsPositionReport" },
    // { messageType: MessageType.DataLinkManagement, componentName: "DataLinkManagement" },
    // { messageType: MessageType.AidToNavigationReport, componentName: "AidToNavigationReport" },
    // { messageType: MessageType.ChannelManagement, componentName: "ChannelManagement" },
    // { messageType: MessageType.GroupAssignmentCommand, componentName: "GroupAssignmentCommand" },
    // { messageType: MessageType.StaticDataReport, componentName: "StaticDataReport" },
    // { messageType: MessageType.SingleSlotBinaryMessage, componentName: "SingleSlotBinaryMessage" },
    // { messageType: MessageType.MultipleSlotBinaryMessageWithCommunicationsState, componentName: "MultipleSlotBinaryMessageWithCommunicationsState" },
    // { messageType: MessageType.PositionReportForLongRangeApplications, componentName: "PositionReportForLongRangeApplications" }
]
export default {
    getComponentName(messageType: MessageType): string {
        var item = messages.find(m => m.messageType == messageType)
        return item?.componentName ?? "Default"
    }
}